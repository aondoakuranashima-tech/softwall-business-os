import { createHash, randomBytes } from 'node:crypto';

export function hashIdentifier(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

export function generateToken(bytes = 32): string {
  if (!Number.isInteger(bytes) || bytes < 16) throw new Error('TOKEN_ENTROPY_TOO_LOW');
  return randomBytes(bytes).toString('base64url');
}

export function redactSecret(value: string | undefined): string | undefined {
  if (!value) return value;
  if (value.length <= 8) return '[REDACTED]';
  return `${value.slice(0, 4)}…${value.slice(-4)}`;
}
