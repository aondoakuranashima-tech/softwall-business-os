export interface FlutterwaveConfig{secretRef:string;webhookSecretRef:string;enabled:boolean}
export function flutterwaveReady(c:FlutterwaveConfig):boolean{return c.enabled&&!!c.secretRef&&!!c.webhookSecretRef;}
