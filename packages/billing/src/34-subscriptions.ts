export type SubscriptionStatus='trialing'|'active'|'past_due'|'paused'|'canceled';
export interface Subscription{id:string;organizationId:string;planId:string;status:SubscriptionStatus;currentPeriodEnd:string}
export function subscriptionAccess(s:Subscription,now=Date.now()):boolean{return(s.status==='trialing'||s.status==='active')&&Date.parse(s.currentPeriodEnd)>now;}
