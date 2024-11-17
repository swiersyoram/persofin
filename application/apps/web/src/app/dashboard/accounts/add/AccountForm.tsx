'use client';
import React from 'react';
import { DashboardTitle } from '@persofin/dashboard';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addAccountMutation, QueryKeys } from '@persofin/api';
import { useRouter } from 'next/navigation';
import { ApplicationRoutes } from '@persofin/utils';
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

            <Button type="submit" disabled={mutation.isPending}>
              Create account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
