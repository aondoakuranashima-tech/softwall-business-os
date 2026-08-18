export interface Payment{ id:string;invoiceId:string;amountMinor:number;type:'payment'|'refund'|'credit';status:'pending'|'succeeded'|'failed' }
export function paymentAmount(p:Payment):number{return p.type==='payment'?p.amountMinor:-p.amountMinor;}
