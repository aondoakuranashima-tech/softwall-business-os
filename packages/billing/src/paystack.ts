export interface PaystackCheckoutInput { email: string; amount: number; currency: string; reference: string; callbackUrl: string; }
export function buildPaystackCheckout(input: PaystackCheckoutInput) { if (!input.email || input.amount < 1 || !input.reference) throw new Error('INVALID_PAYSTACK_CHECKOUT'); return { provider: 'paystack' as const, ...input }; }
