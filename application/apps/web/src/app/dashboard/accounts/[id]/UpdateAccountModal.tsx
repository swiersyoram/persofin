import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@persofin/shadcn';
import { AiOutlineEdit } from 'react-icons/ai';
import React, { useState } from 'react';
import { AccountForm } from '../create/AccountForm';
import { Account } from '@persofin/types';

interface UpdateAccountModalProps {
  account: Account;
}

export function UpdateAccountModal({ account }: UpdateAccountModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={'space-x-2'} variant="outline">
          <AiOutlineEdit fontSize={20} />
          <span>Update Account</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Account</DialogTitle>
          <DialogDescription>Update the account details.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <AccountForm
            setIsOpen={setOpen}
            initialData={account}
            isUpdate={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
