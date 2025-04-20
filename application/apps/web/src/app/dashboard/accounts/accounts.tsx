'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { accountsQuery, Permissions, QueryKeys } from '@persofin/api';
import { AccountCard, DashboardTitle } from '@persofin/dashboard';
import { CreateAccountModal } from './create/CreateAccountModal';
import { WithPermission } from '@persofin/component-utils';

const Accounts = () => {
  const { data: accounts } = useQuery({
    queryKey: [QueryKeys.ACCOUNTS],
    queryFn: accountsQuery,
  });

  return (
    <div className={'w-full'}>
      <header className={'flex justify-between '}>
        <DashboardTitle>Accounts</DashboardTitle>
        <WithPermission permission={Permissions.CREATE_ACCOUNTS}>
          <CreateAccountModal />
        </WithPermission>
      </header>
      <div className={'mt-5 flex gap-4 flex-wrap h-fit'}>
        {accounts?.map((account) => (
          <AccountCard account={account} key={account.id} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
