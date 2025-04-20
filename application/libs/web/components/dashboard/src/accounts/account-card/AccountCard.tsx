import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@persofin/shadcn';
import { Account } from '@persofin/types';
import Link from 'next/link';
import { formatIBANString } from '@persofin/utils';

interface Props {
  account: Account;
}

export const AccountCard = ({
  account: { name, description, id, iban },
}: Props) => {
  return (
    <Link href={`/dashboard/accounts/${id}/detail`}>
      <Card
        className={
          'w-80 h-40 flex flex-col border-0 hover:cursor-pointer hover:shadow-lg duration-300'
        }
      >
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className={'h-full'}>
          <CardDescription>{description}</CardDescription>
          <div className={'flex flex-col pt-3'}>
            <span>{formatIBANString(iban)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
