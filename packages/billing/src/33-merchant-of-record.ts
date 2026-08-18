export interface MerchantRecord{provider:string;countries:string[];currencies:string[];active:boolean}
export function supportsMerchant(p:MerchantRecord,country:string,currency:string):boolean{return p.active&&p.countries.includes(country)&&p.currencies.includes(currency);}
