export interface RevenueEntry{amountMinor:number;currency:string;recognizedAt:string;refundedMinor:number}
export function netRevenue(entries:RevenueEntry[]):number{return entries.reduce((s,e)=>s+e.amountMinor-e.refundedMinor,0);}
