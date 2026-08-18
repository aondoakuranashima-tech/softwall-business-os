export interface RegionalPaymentMethod { provider: string; countryCodes: string[]; currencyCodes: string[]; enabled: boolean; }
export function supportsRegion(method: RegionalPaymentMethod, country: string, currency: string): boolean { return method.enabled && method.countryCodes.includes(country) && method.currencyCodes.includes(currency); }
