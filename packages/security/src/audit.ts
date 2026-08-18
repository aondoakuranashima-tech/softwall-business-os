export type AuditSeverity = 'info' | 'warning' | 'critical';

export interface AuditEvent {
  id: string;
  tenantId: string;
  actorId: string;
  action: string;
  resource: string;
  severity: AuditSeverity;
  occurredAt: string;
  metadata?: Record<string, unknown>;
}

export function createAuditEvent(input: Omit<AuditEvent, 'id' | 'occurredAt'>): AuditEvent {
  return {...input, id: crypto.randomUUID(), occurredAt: new Date().toISOString()};
}

export function isValidAuditEvent(event: AuditEvent): boolean {
  return Boolean(event.id && event.tenantId && event.actorId && event.action && event.resource && event.occurredAt);
}
