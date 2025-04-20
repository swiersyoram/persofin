'use client';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addAccountMutation,
  QueryKeys,
  updateAccountMutation,
} from '@persofin/api';
import { cleanIBANString, validateIBAN } from '@persofin/utils';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@persofin/shadcn';
import { useForm } from 'react-hook-form';
import { Account } from '@persofin/types';

interface AccountFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialData?: Account;
  isUpdate?: boolean;
}

export const AccountForm = ({
  setIsOpen,
  initialData,
  isUpdate = false,
}: AccountFormProps) => {
  const queryClient = useQueryClient();
  const form = useForm<Account>({
    defaultValues: initialData,
  });

  useEffect(() => {
    if (initialData) {
      form.reset(initialData);
    }
  }, [initialData, form]);

  const mutation = useMutation({
    mutationFn: isUpdate ? updateAccountMutation : addAccountMutation,
    onSuccess: async () => {
      queryClient
        .invalidateQueries({
          queryKey: [QueryKeys.ACCOUNTS],
        })
        .then(() => {
          if (isUpdate)
            queryClient.invalidateQueries({
              queryKey: [QueryKeys.ACCOUNTS_DETAIL, initialData?.id],
            });
          setIsOpen(false);
        });
    },
  });

  const handleIBANChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    let value = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();

    if (value.length > 34) {
      value = value.substring(0, 34);
    }

    e.target.value = cleanIBANString(value);
    onChange(value);
  };

  return (
    <div className={'w-full flex justify-center'}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
          className={'flex flex-col w-80 space-y-4'}
        >
          <FormField
            control={form.control}
            name="name"
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={isUpdate}
            control={form.control}
            name="iban"
            rules={{
              validate: (value) => {
                return validateIBAN(value) || 'Please enter a valid IBAN';
              },
            }}
            render={({ field: { onChange, ...restField } }) => (
              <FormItem>
                <FormLabel>IBAN</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. BE68 5390 0754 7034"
                    {...restField}
                    onChange={(e) => handleIBANChange(e, onChange)}
                  />
                </FormControl>
                {!isUpdate && (
                  <>
                    <FormMessage />
                    <p className="text-xs text-gray-500 mt-1">
                      International Bank Account Number (e.g., BE68 5390 0754
                      7034)
                    </p>
                  </>
                )}
              </FormItem>
            )}
          />

          <Button type="submit" disabled={mutation.isPending}>
            {isUpdate ? 'Update account' : 'Create account'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
