export interface CurrencyRule { currency: string; minorUnit: number; enabled: boolean; }
export function normalizeMoney(amount: number, rule: CurrencyRule): number { if (!Number.isFinite(amount) || amount < 0) throw new Error('INVALID_AMOUNT'); return Math.round(amount * 10 ** rule.minorUnit); }
