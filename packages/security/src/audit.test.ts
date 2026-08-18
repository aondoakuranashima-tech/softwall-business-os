import {describe, expect, it} from 'vitest';
import {createAuditEvent, isValidAuditEvent} from './audit';

describe('audit events', () => {
  it('creates a valid immutable event shape', () => {
    const event = createAuditEvent({tenantId:'t1', actorId:'u1', action:'billing.read', resource:'invoice:1', severity:'info'});
    expect(event.id).toBeTypeOf('string');
    expect(event.occurredAt).toBeTypeOf('string');
    expect(isValidAuditEvent(event)).toBe(true);
  });

  it('rejects incomplete audit records', () => {
    expect(isValidAuditEvent({...createAuditEvent({tenantId:'t1', actorId:'u1', action:'read', resource:'x', severity:'info'}), actorId:''})).toBe(false);
  });
});
