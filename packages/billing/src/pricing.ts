export interface Price { id: string; productId: string; currency: string; amount: number; interval: 'month' | 'year'; active: boolean; }
export function validatePrice(price: Price): void { if (!price.id || !price.productId || !price.currency || price.amount < 0 || !Number.isInteger(price.amount)) throw new Error('INVALID_PRICE'); }
