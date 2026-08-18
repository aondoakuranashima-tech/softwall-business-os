export interface EventEnvelope<T = unknown> { id: string; type: string; version: number; occurredAt: string; correlationId?: string; organizationId?: string; payload: T; }

export function createEvent<T>(type: string, payload: T, options: { organizationId?: string; correlationId?: string; version?: number } = {}): EventEnvelope<T> {
  return { id: crypto.randomUUID(), type, version: options.version ?? 1, occurredAt: new Date().toISOString(), ...options, payload };
}
