export interface LedgerEntry { id:string; organizationId:string; type:'debit'|'credit'; amountMinor:number; currency:string; reference:string; createdAt:string; }
export function ledgerBalance(entries:LedgerEntry[]):number{return entries.reduce((sum,e)=>sum+(e.type==='credit'?e.amountMinor:-e.amountMinor),0);}
