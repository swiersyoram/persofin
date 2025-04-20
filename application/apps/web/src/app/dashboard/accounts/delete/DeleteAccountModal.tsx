import React from 'react';
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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAccountMutation, QueryKeys } from '@persofin/api';
import { ApplicationRoutes } from '@persofin/utils';
import { useRouter } from 'next/navigation';
import { Account } from '@persofin/types';

interface DeleteAccountModalProps {
  account: Account;
}

const DeleteAccountModal = ({ account }: DeleteAccountModalProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

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
      mutation.mutate(account.id);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };
  return (
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
  );
};

export default DeleteAccountModal;
