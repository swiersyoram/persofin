'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { accountsQuery, QueryKeys } from '@persofin/api';
import { AccountCard, DashboardTitle } from '@persofin/dashboard';
import { CreateAccountModal } from './create/CreateAccountModal';

const Accounts = () => {
  const { data: accounts } = useQuery({
    queryKey: [QueryKeys.ACCOUNTS],
    queryFn: accountsQuery,
  });

  return (
    <div className={'w-full'}>
      <header className={'flex justify-between '}>
        <DashboardTitle>Accounts</DashboardTitle>
        <CreateAccountModal />
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
