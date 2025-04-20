'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { accountsByIdQuery, QueryKeys } from '@persofin/api';
import { useParams } from 'next/navigation';
import { DashboardTitle } from '@persofin/dashboard';

const Page = () => {
  const { id } = useParams<{ id: string }>();

  const { data: account } = useQuery({
    queryKey: [QueryKeys.Accounts, id],
    queryFn: accountsByIdQuery(id),
  });

  if (!account) return null;
  return (
    <div>
      <DashboardTitle>{account.name}</DashboardTitle>
      detail page for id
      {id}
    </div>
  );
};

export default Page;
