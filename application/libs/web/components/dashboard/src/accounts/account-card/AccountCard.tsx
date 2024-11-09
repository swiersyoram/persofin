import React from 'react';
import { Card } from '@persofin/shadcn';

interface Props {
  name: string;
}

export const AccountCard = ({ name }: Props) => {
  return (
    <Card>
      <div>
        <h1>Account: {name}</h1>
      </div>
    </Card>
  );
};
