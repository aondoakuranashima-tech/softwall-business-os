export function assertTenantAccess(context: { organizationId: string }, organizationId: string): void {
  if (!context.organizationId || context.organizationId !== organizationId) throw new Error('TENANT_ACCESS_DENIED');
}

export function assertPermission(permissions: string[], required: string): void {
  if (!permissions.includes(required) && !permissions.includes('*')) throw new Error('PERMISSION_DENIED');
}

export function assertRole(roles: string[], required: string): void {
  if (!roles.includes(required)) throw new Error('ROLE_REQUIRED');
}
