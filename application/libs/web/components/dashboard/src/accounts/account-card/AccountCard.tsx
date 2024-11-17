import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@persofin/shadcn';
import { Account } from '@persofin/types';

interface Props {
  account: Account;
}

export const AccountCard = ({ account: { name, description } }: Props) => {
  return (
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
          <span>NL91 ABNA 0417 1643 00</span>
        </div>
      </CardContent>
    </Card>
  );
};
