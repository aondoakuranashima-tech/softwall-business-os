export interface Locale{code:string;currency:string;rtl:boolean;enabled:boolean}
export function resolveLocale(locales:Locale[],requested:string,fallback:string):Locale|undefined{return locales.find(l=>l.enabled&&l.code===requested)||locales.find(l=>l.enabled&&l.code===fallback)}
