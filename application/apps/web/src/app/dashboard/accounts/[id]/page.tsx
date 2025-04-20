'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { accountsByIdQuery, Permissions, QueryKeys } from '@persofin/api';
import { useParams } from 'next/navigation';
import { DashboardTitle } from '@persofin/dashboard';
import { UpdateAccountModal } from './UpdateAccountModal';
import DeleteAccountModal from '../delete/DeleteAccountModal';
import { WithPermission } from '@persofin/component-utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@persofin/shadcn';
import { formatIBANString } from '@persofin/utils';

const Page = () => {
  const { id } = useParams<{ id: string }>();

  const { data: account } = useQuery({
    queryKey: [QueryKeys.ACCOUNTS_DETAIL, id],
    queryFn: accountsByIdQuery(id),
  });

  if (!account) return null;
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className={'flex-col'}>
          <DashboardTitle>{`${account.name} - ${formatIBANString(
            account.iban
          )}`}</DashboardTitle>
          <p className={'text-sm text-muted-foreground'}>
            {account.description}
          </p>
        </div>
        <div className="flex space-x-2">
          <WithPermission permission={Permissions.UPDATE_ACCOUNTS}>
            <UpdateAccountModal account={account} />
          </WithPermission>
          <WithPermission permission={Permissions.DELETE_ACCOUNTS}>
            <DeleteAccountModal account={account} />
          </WithPermission>
        </div>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Your most recent transactions for this account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="py-6 text-center text-gray-500">
            <p>No transactions available yet</p>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <div className="text-sm text-gray-500">
            Transactions will appear here once they are processed
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
