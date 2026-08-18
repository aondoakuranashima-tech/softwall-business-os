export interface DunningState { invoiceId:string; attempts:number; nextRetryAt:string; resolved:boolean; }
export function shouldRetry(d:DunningState,now=Date.now()):boolean{return !d.resolved&&d.attempts<8&&Date.parse(d.nextRetryAt)<=now;}
