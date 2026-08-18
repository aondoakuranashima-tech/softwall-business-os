export interface PaymentMethod{type:string;countries:string[];currencies:string[];enabled:boolean}
export function methodAvailable(m:PaymentMethod,country:string,currency:string):boolean{return m.enabled&&m.countries.includes(country)&&m.currencies.includes(currency);}
