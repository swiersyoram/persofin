import { ApiRoutes } from '@persofin/utils';
import { Account } from '@persofin/types';

const baseQueryFunction =
  <T>(endpoint: string) =>
  (): Promise<T> =>
    fetch(endpoint).then((res) => res.json());

const baseMutationFunction =
  <T>(endpoint: string) =>
  (data: T) => {
    return fetch(endpoint, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

const baseDeleteFunction = (endpoint: string) => {
  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const accountsQuery = baseQueryFunction<Array<Account>>(
  ApiRoutes.accounts
);

export const accountsByIdQuery = (id: string) =>
  baseQueryFunction<Account>(ApiRoutes.accounts + `/${id}`);

export const addAccountMutation = baseMutationFunction<Account>(
  ApiRoutes.accounts
);

export const deleteAccountMutation = (id: string) =>
  baseDeleteFunction(`${ApiRoutes.accounts}/${id}`);
