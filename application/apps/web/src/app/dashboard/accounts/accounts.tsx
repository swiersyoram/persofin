'use client';
import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@persofin/shadcn';
import { accountsQuery, QueryKeys } from '@persofin/api';
import { AccountCard } from '@persofin/dashboard';

const Accounts = () => {
  const { data: accounts, ...props } = useQuery({
    queryKey: [QueryKeys.Accounts],
    queryFn: accountsQuery,
  });

  const queryClient = useQueryClient();

  return (
    <div>
      <h1>Accounts</h1>
      {accounts && <pre>{JSON.stringify(accounts)}</pre>}
      {accounts?.map((account: { name: string; id: string }) => (
        <AccountCard name={account.name} key={account.id} />
      ))}

      <Button onClick={() => queryClient.invalidateQueries()}>
        invalidate
      </Button>
    </div>
  );
};

export default Accounts;
