import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@persofin/shadcn';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import { AccountForm } from './AccountForm';

export function CreateAccountModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={'space-x-2'}>
          <AiOutlinePlusCircle fontSize={20} />
          <span>Create account</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create account</DialogTitle>
          <DialogDescription>
            Create an account resembling a bank account.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <AccountForm setIsOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
