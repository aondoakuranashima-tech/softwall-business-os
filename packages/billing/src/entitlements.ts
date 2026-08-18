export interface Entitlement { key: string; limit?: number; enabled: boolean; }
export function hasEntitlement(entitlements: Entitlement[], key: string, usage = 0): boolean { const item = entitlements.find((e) => e.key === key); return Boolean(item?.enabled && (item.limit === undefined || usage < item.limit)); }
