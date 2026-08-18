export interface PaymentIntent { id:string; amountMinor:number; currency:string; status:'requires_payment'|'processing'|'succeeded'|'failed'; provider?:string; }
export function paymentReady(i:PaymentIntent):boolean{return i.amountMinor>0&&!!i.currency&&i.status==='requires_payment';}
