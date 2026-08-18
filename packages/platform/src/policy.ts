export interface PolicyInput { subject: { id: string; roles: string[] }; action: string; resource: { type: string; ownerId?: string }; context?: Record<string, unknown>; }
export type PolicyDecision = 'allow' | 'deny';

export function evaluatePolicy(input: PolicyInput): PolicyDecision {
  if (!input.subject.id) return 'deny';
  if (input.subject.roles.includes('super_admin')) return 'allow';
  if (input.action === 'read' && input.resource.ownerId === input.subject.id) return 'allow';
  return 'deny';
}
