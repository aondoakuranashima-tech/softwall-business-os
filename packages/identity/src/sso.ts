export interface SsoConnection { id: string; organizationId: string; provider: 'oidc' | 'saml'; issuer?: string; entityId?: string; enabled: boolean; }
export interface ScimToken { id: string; organizationId: string; tokenHash: string; expiresAt?: string; active: boolean; }
export interface PrivilegedSession { userId: string; organizationId: string; elevatedUntil: string; reason: string; }

export function isPrivilegedSessionActive(session: PrivilegedSession, now = Date.now()): boolean {
  return Date.parse(session.elevatedUntil) > now;
}
