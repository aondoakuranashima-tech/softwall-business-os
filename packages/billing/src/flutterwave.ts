export interface FlutterwaveCheckoutInput { txRef: string; amount: number; currency: string; redirectUrl: string; customerEmail: string; }
export function buildFlutterwaveCheckout(input: FlutterwaveCheckoutInput) { if (!input.txRef || input.amount < 1 || !input.customerEmail) throw new Error('INVALID_FLUTTERWAVE_CHECKOUT'); return { provider: 'flutterwave' as const, ...input }; }
