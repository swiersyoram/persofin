'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@persofin/shadcn';
import { accountsQuery, QueryKeys } from '@persofin/api';
import { AccountCard, DashboardTitle } from '@persofin/dashboard';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Link from 'next/link';
import { ApplicationRoutes } from '@persofin/utils';

const Accounts = () => {
  const { data: accounts, ...props } = useQuery({
    queryKey: [QueryKeys.Accounts],
    queryFn: accountsQuery,
  });

  return (
    <div className={'w-full'}>
      <header className={'flex justify-between '}>
        <DashboardTitle>Accounts</DashboardTitle>
        <Link href={ApplicationRoutes.addAccount}>
          <Button className={'space-x-2'}>
            <AiOutlinePlusCircle fontSize={20} />
            <span>Add account</span>
          </Button>
        </Link>
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
