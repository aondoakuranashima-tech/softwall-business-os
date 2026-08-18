export type Currency = string;
export type BillingInterval = 'month' | 'year';
export type PaymentProvider = 'stripe' | 'paystack' | 'flutterwave' | 'merchant_of_record';

export interface Customer { id: string; organizationId: string; email: string; providerCustomerIds: Partial<Record<PaymentProvider, string>>; }
export interface Plan { id: string; name: string; currency: Currency; amount: number; interval: BillingInterval; active: boolean; }
export interface Subscription { id: string; organizationId: string; customerId: string; planId: string; provider: PaymentProvider; status: 'trialing' | 'active' | 'past_due' | 'cancelled'; seats: number; }
export interface CheckoutRequest { customerId: string; planId: string; provider: PaymentProvider; successUrl: string; cancelUrl: string; }

export interface BillingProviderAdapter {
  createCustomer(customer: Customer): Promise<string>;
  createCheckout(request: CheckoutRequest, plan: Plan): Promise<{ id: string; url: string }>;
}

export class BillingRegistry {
  private readonly providers = new Map<PaymentProvider, BillingProviderAdapter>();
  register(provider: PaymentProvider, adapter: BillingProviderAdapter): void { this.providers.set(provider, adapter); }
  get(provider: PaymentProvider): BillingProviderAdapter {
    const adapter = this.providers.get(provider);
    if (!adapter) throw new Error(`BILLING_PROVIDER_NOT_CONFIGURED:${provider}`);
    return adapter;
  }
}

export function validatePlan(plan: Plan): void {
  if (!plan.id || !plan.name || !plan.currency || plan.amount < 0 || !Number.isInteger(plan.amount)) throw new Error('INVALID_PLAN');
}
export function validateSeats(seats: number): void { if (!Number.isInteger(seats) || seats < 1) throw new Error('INVALID_SEATS'); }
