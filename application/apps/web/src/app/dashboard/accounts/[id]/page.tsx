'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { accountsByIdQuery, Permissions, QueryKeys } from '@persofin/api';
import { useParams } from 'next/navigation';
import { DashboardTitle } from '@persofin/dashboard';
import { UpdateAccountModal } from './UpdateAccountModal';
import DeleteAccountModal from '../delete/DeleteAccountModal';
import { WithPermission } from '@persofin/component-utils';

const Page = () => {
  const { id } = useParams<{ id: string }>();

  const { data: account } = useQuery({
    queryKey: [QueryKeys.ACCOUNTS_DETAIL, id],
    queryFn: accountsByIdQuery(id),
  });

  if (!account) return null;
  return (
    <div>
      <div className="flex justify-between items-center">
        <DashboardTitle>{account.name}</DashboardTitle>
        <div className="flex space-x-2">
          <WithPermission permission={Permissions.UPDATE_ACCOUNTS}>
            <UpdateAccountModal account={account} />
          </WithPermission>
          <WithPermission permission={Permissions.DELETE_ACCOUNTS}>
            <DeleteAccountModal account={account} />
          </WithPermission>
        </div>
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
