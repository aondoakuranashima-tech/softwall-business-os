import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

export interface PasswordRecord { userId: string; salt: string; hash: string; }
export function hashPassword(password: string): PasswordRecord {
  if (password.length < 12) throw new Error('PASSWORD_TOO_SHORT');
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return { userId: '', salt: salt.toString('base64url'), hash: hash.toString('base64url') };
}
export function verifyPassword(password: string, record: PasswordRecord): boolean {
  const expected = Buffer.from(record.hash, 'base64url');
  const actual = scryptSync(password, Buffer.from(record.salt, 'base64url'), 64);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
export function fingerprintCredential(value: string): string { return createHash('sha256').update(value).digest('hex'); }
