export interface UsageRecord { organizationId: string; metric: string; quantity: number; unitPrice: number; currency: string; }
export function calculateUsageCharge(record: UsageRecord): number { if (!record.metric || record.quantity < 0 || record.unitPrice < 0) throw new Error('INVALID_USAGE_RECORD'); return record.quantity * record.unitPrice; }
