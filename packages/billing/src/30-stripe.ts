export interface StripeConfig{secretRef:string;webhookSecretRef:string;enabled:boolean}
export function stripeReady(c:StripeConfig):boolean{return c.enabled&&!!c.secretRef&&!!c.webhookSecretRef;}
