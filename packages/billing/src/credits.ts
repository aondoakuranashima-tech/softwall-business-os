export interface CreditLedgerEntry { organizationId: string; amount: number; reason: string; createdAt: string; }
export function applyCredits(balance: number, entries: CreditLedgerEntry[]): number { const next = balance + entries.reduce((sum, e) => sum + e.amount, 0); if (next < 0) throw new Error('INSUFFICIENT_CREDITS'); return next; }
