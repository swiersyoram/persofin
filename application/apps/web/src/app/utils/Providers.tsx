'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getQueryClient } from './QueryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </UserProvider>
  );
}
