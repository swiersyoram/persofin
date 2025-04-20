import { useQuery } from '@tanstack/react-query';
import { permissionsQuery, QueryKeys } from '@persofin/api';

export function useUserPermissions() {
  const { data: permissions } = useQuery({
    queryKey: [QueryKeys.PERMISSIONS],
    queryFn: permissionsQuery,
  });

  return {
    permissions,
    hasPermission: (permission: string) => permissions?.includes(permission),
  };
}
