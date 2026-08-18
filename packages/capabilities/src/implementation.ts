import type { CapabilityId } from './index';
import { capabilityRegistry } from './registry';
import type { CapabilityState } from './lifecycle';

export interface CapabilityImplementation {
  id: CapabilityId;
  state: CapabilityState;
  implementedAt?: string;
  verification?: string;
}

const records = new Map<CapabilityId, CapabilityImplementation>();
for (const capability of capabilityRegistry) {
  records.set(capability.id, { id: capability.id, state: capability.state });
}

export function setCapabilityState(id: CapabilityId, state: CapabilityState, verification?: string) {
  const current = records.get(id);
  if (!current) throw new Error(`Unknown capability: ${id}`);
  records.set(id, {
    ...current,
    state,
    implementedAt: state === 'implemented' || state === 'verified' ? new Date().toISOString() : current.implementedAt,
    verification,
  });
}

export function getImplementation(id: CapabilityId): CapabilityImplementation | undefined {
  return records.get(id);
}

export function implementationSummary() {
  const values = [...records.values()];
  return {
    total: values.length,
    planned: values.filter((x) => x.state === 'planned').length,
    inProgress: values.filter((x) => x.state === 'in_progress').length,
    implemented: values.filter((x) => x.state === 'implemented').length,
    verified: values.filter((x) => x.state === 'verified').length,
  };
}
