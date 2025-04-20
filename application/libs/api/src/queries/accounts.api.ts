import { ApiRoutes } from '@persofin/utils';
import { Account } from '@persofin/types';
import {baseDeleteFunction, baseMutationFunction, baseQueryFunction, baseUpdateFunction} from "./baseQueryFunctions";



export const accountsQuery = baseQueryFunction<Array<Account>>(
  ApiRoutes.accounts
);

export const accountsByIdQuery = (id: string) =>
  baseQueryFunction<Account>(ApiRoutes.accounts + `/${id}`);

export const addAccountMutation = baseMutationFunction<Account>(
  ApiRoutes.accounts
);

export const updateAccountMutation = (account: Account) =>
  baseUpdateFunction<Account>(`${ApiRoutes.accounts}/${account.id}`)(account);

export const deleteAccountMutation = (id: string) =>
  baseDeleteFunction(`${ApiRoutes.accounts}/${id}`);
