export interface BillingProvider { id:string; countries:string[]; currencies:string[]; priority:number; enabled:boolean; }
export function selectProvider(providers:BillingProvider[],country:string,currency:string):BillingProvider|undefined{return providers.filter(p=>p.enabled&&p.countries.includes(country)&&p.currencies.includes(currency)).sort((a,b)=>a.priority-b.priority)[0];}
