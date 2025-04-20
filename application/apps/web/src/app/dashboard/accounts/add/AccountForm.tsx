'use client';
import React from 'react';
import { DashboardTitle } from '@persofin/dashboard';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addAccountMutation, QueryKeys } from '@persofin/api';
import { useRouter } from 'next/navigation';
import { ApplicationRoutes, formatIBAN, validateIBAN } from '@persofin/utils';
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

export const AccountForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const form = useForm<Account>();
  const mutation = useMutation({
    mutationFn: addAccountMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.Accounts] });
      router.push(ApplicationRoutes.accounts);
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

    e.target.value = formatIBAN(value);
    onChange(value);
  };

  return (
    <div>
      <DashboardTitle>Add Account</DashboardTitle>
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
                      placeholder="e.g. BE9 3704 0044 0532 0130 00"
                      {...restField}
                      onChange={(e) => handleIBANChange(e, onChange)}
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-gray-500 mt-1">
                    International Bank Account Number (e.g., BE89 3704 0044 0532
                    0130 00)
                  </p>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={mutation.isPending}>
              Create account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
