export interface ReconciliationItem{internalId:string;providerId:string;internalAmountMinor:number;providerAmountMinor:number}
export function reconcile(items:ReconciliationItem[]):ReconciliationItem[]{return items.filter(i=>i.internalAmountMinor!==i.providerAmountMinor);}
