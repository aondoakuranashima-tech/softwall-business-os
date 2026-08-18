import { capabilityCatalog, type CapabilityId } from './index';
import { capabilityDomains } from './domains';
import type { CapabilityState, CapabilityRecord } from './lifecycle';

const domainByCapability = new Map<CapabilityId, string>();
for (const [domain, ids] of Object.entries(capabilityDomains)) {
  for (const id of ids as CapabilityId[]) domainByCapability.set(id, domain);
}

export const capabilityRegistry: CapabilityRecord[] = capabilityCatalog.map((id) => ({
  id: id as CapabilityId,
  domain: domainByCapability.get(id as CapabilityId) ?? 'unassigned',
  state: 'planned' as CapabilityState,
}));

export function getCapability(id: CapabilityId): CapabilityRecord | undefined {
  return capabilityRegistry.find((capability) => capability.id === id);
}

export function getCapabilitiesByDomain(domain: string): CapabilityRecord[] {
  return capabilityRegistry.filter((capability) => capability.domain === domain);
}

export function countByState(state: CapabilityState): number {
  return capabilityRegistry.filter((capability) => capability.state === state).length;
}
