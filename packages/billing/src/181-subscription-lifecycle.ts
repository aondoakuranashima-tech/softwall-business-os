export type SubscriptionStatus='trialing'|'active'|'past_due'|'paused'|'canceled';
export function canAccess(status:SubscriptionStatus):boolean{return status==='trialing'||status==='active';}
