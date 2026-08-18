import type { CapabilityId } from './index';

export type CapabilityState = 'planned' | 'in_progress' | 'implemented' | 'verified';

export interface CapabilityRecord {
  id: CapabilityId;
  state: CapabilityState;
  domain: string;
}

export function isComplete(capability: CapabilityRecord): boolean {
  return capability.state === 'verified';
}

export function transitionCapability(capability: CapabilityRecord, next: CapabilityState): CapabilityRecord {
  return {...capability, state: next};
}
