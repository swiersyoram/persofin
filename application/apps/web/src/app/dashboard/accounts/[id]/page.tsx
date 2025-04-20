'use client';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  accountsByIdQuery,
  deleteAccountMutation,
  QueryKeys,
} from '@persofin/api';
import { useParams, useRouter } from 'next/navigation';
import { DashboardTitle } from '@persofin/dashboard';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@persofin/shadcn';
import { ApplicationRoutes } from '@persofin/utils';

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: account } = useQuery({
    queryKey: [QueryKeys.ACCOUNTS_DETAIL, id],
    queryFn: accountsByIdQuery(id),
  });

  const mutation = useMutation({
    mutationFn: deleteAccountMutation,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: [QueryKeys.ACCOUNTS] })
        .then(() => router.push(ApplicationRoutes.accounts));
    },
  });

  const handleDeleteAccount = async () => {
    try {
      if (account) mutation.mutate(account.id);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  if (!account) return null;
  return (
    <div>
      <div className="flex justify-between items-center">
        <DashboardTitle>{account.name}</DashboardTitle>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                account and all its data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteAccount}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <div className="mt-4">
        <p>Account ID: {id}</p>
        {account.description && <p>Description: {account.description}</p>}
        {account.iban && <p>IBAN: {account.iban}</p>}
      </div>
    </div>
  );
};

export default Page;
