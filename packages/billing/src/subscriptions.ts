export type SubscriptionStatus = 'trialing' | 'active' | 'past_due' | 'cancelled';
export interface Subscription { id: string; organizationId: string; planId: string; seats: number; status: SubscriptionStatus; currentPeriodEnd: string; }
export function activateSubscription(subscription: Subscription): Subscription { if (subscription.seats < 1) throw new Error('INVALID_SEATS'); return { ...subscription, status: 'active' }; }
export function cancelSubscription(subscription: Subscription): Subscription { return { ...subscription, status: 'cancelled' }; }
