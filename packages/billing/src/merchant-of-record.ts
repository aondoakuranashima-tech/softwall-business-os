export interface MerchantOfRecordCheckout { provider: 'merchant_of_record'; productId: string; customerId: string; quantity: number; successUrl: string; }
export function buildMerchantOfRecordCheckout(input: MerchantOfRecordCheckout): MerchantOfRecordCheckout { if (!input.productId || !input.customerId || input.quantity < 1) throw new Error('INVALID_MOR_CHECKOUT'); return input; }
