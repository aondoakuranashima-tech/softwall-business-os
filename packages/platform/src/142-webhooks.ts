export interface Webhook{ id:string;eventType:string;url:string;secretRef:string;active:boolean }
export function validateWebhook(w:Webhook):void{if(!w.id||!w.eventType||!w.url||!w.secretRef)throw new Error('INVALID_WEBHOOK')}
