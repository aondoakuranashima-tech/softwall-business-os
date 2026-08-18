export interface Refund { id: string; paymentId: string; amount: number; currency: string; reason?: string; status: 'requested' | 'processed' | 'failed'; }
export function validateRefund(refund: Refund, originalAmount: number): void { if (!refund.paymentId || refund.amount <= 0 || refund.amount > originalAmount) throw new Error('INVALID_REFUND'); }
