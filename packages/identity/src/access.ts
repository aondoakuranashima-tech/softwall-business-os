export interface PasskeyCredential { id: string; userId: string; publicKey: string; counter: number; transports?: string[]; }
export interface MfaFactor { id: string; userId: string; type: 'totp' | 'webauthn' | 'recovery'; enabled: boolean; verifiedAt?: string; }
export interface Device { id: string; userId: string; name: string; fingerprint: string; trusted: boolean; lastSeenAt: string; }
export interface Session { id: string; userId: string; deviceId: string; createdAt: string; expiresAt: string; revokedAt?: string; }
export interface Organization { id: string; name: string; ownerId: string; createdAt: string; }

export function isSessionActive(session: Session, now = Date.now()): boolean {
  return !session.revokedAt && Date.parse(session.expiresAt) > now;
}

export function revokeSession(session: Session): Session { return { ...session, revokedAt: new Date().toISOString() }; }

export function createOrganization(id: string, name: string, ownerId: string): Organization {
  if (!name.trim() || !ownerId) throw new Error('INVALID_ORGANIZATION');
  return { id, name: name.trim(), ownerId, createdAt: new Date().toISOString() };
}
