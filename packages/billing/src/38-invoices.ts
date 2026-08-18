export interface Invoice{ id:string;organizationId:string;amountMinor:number;currency:string;status:'draft'|'open'|'paid'|'void';dueAt:string }
export function invoiceValid(i:Invoice):boolean{return i.amountMinor>=0&&!!i.currency&&!!i.organizationId;}
