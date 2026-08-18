export interface TaxRule { country: string; rate: number; inclusive: boolean; }
export function calculateTax(subtotal: number, rule: TaxRule): number { if (subtotal < 0 || rule.rate < 0 || rule.rate > 1) throw new Error('INVALID_TAX_RULE'); return subtotal * rule.rate; }
