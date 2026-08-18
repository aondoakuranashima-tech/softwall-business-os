export interface CreditNote { id:string; invoiceId:string; amountMinor:number; reason:string; status:'draft'|'issued'|'applied'; }
export function issueCredit(n:CreditNote):CreditNote{if(n.amountMinor<=0||!n.reason)throw new Error('INVALID_CREDIT_NOTE');return {...n,status:'issued'};}
