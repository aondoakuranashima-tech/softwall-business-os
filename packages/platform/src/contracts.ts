export interface TenantContext { organizationId: string; userId: string; roles: string[]; permissions: string[]; }
export interface AuditEvent { id: string; organizationId: string; actorId: string; action: string; resource: string; resourceId?: string; occurredAt: string; metadata?: Record<string, unknown>; }
export interface DomainEvent<T = unknown> { id: string; type: string; version: number; occurredAt: string; organizationId?: string; payload: T; }
export interface BillingProvider { createCustomer(input: { organizationId: string; email: string }): Promise<{ id: string }>; createCheckout(input: { customerId: string; priceId: string; successUrl: string; cancelUrl: string }): Promise<{ url: string }>; }
export interface Notification { id: string; organizationId: string; channel: 'email' | 'sms' | 'push' | 'in_app'; recipient: string; template: string; data: Record<string, unknown>; }
export interface AiRequest { organizationId: string; userId: string; model: string; prompt: string; tools?: string[]; }
export interface DocumentRecord { id: string; organizationId: string; name: string; contentType: string; storageKey: string; checksum: string; }
