export type SecurityDecision = 'allow' | 'deny';

export interface SecurityRequest {
  authenticated: boolean;
  tenantId?: string;
  userId?: string;
  action: string;
  resource: string;
}

export interface SecurityPolicy {
  requireAuthentication: boolean;
  allowedActions: readonly string[];
}

export function evaluateSecurity(request: SecurityRequest, policy: SecurityPolicy): SecurityDecision {
  if (policy.requireAuthentication && !request.authenticated) return 'deny';
  if (!request.tenantId || !request.userId) return 'deny';
  return policy.allowedActions.includes(request.action) ? 'allow' : 'deny';
}
