export interface Membership { userId: string; organizationId: string; roles: string[]; active: boolean; }
export interface Workspace { id: string; organizationId: string; name: string; createdAt: string; }

export class MembershipStore {
  private readonly memberships = new Map<string, Membership>();
  upsert(membership: Membership): void { this.memberships.set(`${membership.userId}:${membership.organizationId}`, membership); }
  get(userId: string, organizationId: string): Membership | undefined { return this.memberships.get(`${userId}:${organizationId}`); }
  canAccess(userId: string, organizationId: string): boolean { return this.get(userId, organizationId)?.active === true; }
}

export function createWorkspace(id: string, organizationId: string, name: string): Workspace {
  if (!id || !organizationId || !name.trim()) throw new Error('INVALID_WORKSPACE');
  return { id, organizationId, name: name.trim(), createdAt: new Date().toISOString() };
}
