export interface BillingAccount{organizationId:string;currency:string;provider:string;active:boolean}
export function billingReady(a:BillingAccount):boolean{return !!a.organizationId&&!!a.currency&&!!a.provider&&a.active;}
