export interface Delivery{ id:string;notificationId:string;channel:string;status:'queued'|'sent'|'failed';attempts:number;}
export function canRetry(d:Delivery,max=5):boolean{return d.status==='failed'&&d.attempts<max;}
