export const PLATFORM_CONTRACT_VERSION = '2026-08-18.v1';

export type TenantContext = {
  organizationId: string;
  actorId?: string;
  requestId: string;
};

export type PlatformEvent<T extends string = string, P = unknown> = {
  id: string;
  type: T;
  version: string;
  occurredAt: string;
  tenant: TenantContext;
  payload: P;
};

export type EntitlementCheck = {
  organizationId: string;
  key: string;
};

export type EntitlementResult = {
  allowed: boolean;
  key: string;
  reason?: string;
};

export function createPlatformEvent<T extends string, P>(
  type: T,
  tenant: TenantContext,
  payload: P,
  id = crypto.randomUUID(),
): PlatformEvent<T, P> {
  return {
    id,
    type,
    version: PLATFORM_CONTRACT_VERSION,
    occurredAt: new Date().toISOString(),
    tenant,
    payload,
  };
}
