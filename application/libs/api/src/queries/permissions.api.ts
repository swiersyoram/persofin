import { ApiRoutes } from '@persofin/utils';
import { baseQueryFunction } from './baseQueryFunctions';

export const permissionsQuery = baseQueryFunction<any>(ApiRoutes.permissions);
