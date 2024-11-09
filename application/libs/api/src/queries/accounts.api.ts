import { ApiRoutes } from '@persofin/utils';

const baseQueryFunction = async (endpoint: string) =>
  await fetch(endpoint).then((res) => res.json());

export const accountsQuery = () => baseQueryFunction(ApiRoutes.accounts);
