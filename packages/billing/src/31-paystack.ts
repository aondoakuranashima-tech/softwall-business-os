export interface PaystackConfig{secretRef:string;webhookSecretRef:string;enabled:boolean}
export function paystackReady(c:PaystackConfig):boolean{return c.enabled&&!!c.secretRef&&!!c.webhookSecretRef;}
