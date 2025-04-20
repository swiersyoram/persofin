import { useUserPermissions } from '@persofin/hooks';
import { PropsWithChildren, ReactNode } from 'react';
import { Permissions } from '@persofin/api';

interface WithPermissionProps {
  permission: Permissions;
  fallback?: ReactNode;
}

export function WithPermission({
  permission,
  fallback = null,
  children,
}: PropsWithChildren<WithPermissionProps>) {
  const { hasPermission } = useUserPermissions();

  return hasPermission(permission) ? children : fallback;
}
