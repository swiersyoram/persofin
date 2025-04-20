import React, { PropsWithChildren } from 'react';

export const DashboardTitle = ({ children }: PropsWithChildren) => (
  <div>
    <h1 className={'text-2xl font-bold text-black'}>{children}</h1>
  </div>
);
