export interface StripeCheckoutInput { customerId: string; priceId: string; successUrl: string; cancelUrl: string; }
export interface StripeCheckoutResult { provider: 'stripe'; customerId: string; priceId: string; successUrl: string; cancelUrl: string; }
export function buildStripeCheckout(input: StripeCheckoutInput): StripeCheckoutResult { if (!input.customerId || !input.priceId) throw new Error('INVALID_STRIPE_CHECKOUT'); return { provider: 'stripe', ...input }; }
