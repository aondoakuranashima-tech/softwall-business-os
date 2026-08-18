export interface BillingAccount { organizationId: string; defaultProvider: string; currency: string; }
export function createBillingAccount(organizationId: string, defaultProvider: string, currency: string): BillingAccount { if (!organizationId || !defaultProvider || !currency) throw new Error('INVALID_BILLING_ACCOUNT'); return { organizationId, defaultProvider, currency }; }
