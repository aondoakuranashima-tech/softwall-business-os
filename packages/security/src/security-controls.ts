import { createHash, randomBytes } from 'node:crypto';

export interface EncryptionEnvelope { algorithm: 'AES-256-GCM'; ciphertext: string; iv: string; tag: string; keyId: string; }
export interface ApiRequest { key: string; ip: string; path: string; method: string; }
export interface ThreatSignal { source: string; score: number; reason: string; }
export interface RiskDecision { allow: boolean; score: number; reasons: string[]; }

export function fingerprint(value: string): string { return createHash('sha256').update(value).digest('hex'); }
export function generateNonce(bytes = 32): string { return randomBytes(bytes).toString('base64url'); }
export function rateLimitKey(request: ApiRequest): string { return `${fingerprint(request.key)}:${request.ip}:${request.method}:${request.path}`; }
export function evaluateRisk(signals: ThreatSignal[], threshold = 70): RiskDecision {
  const score = Math.min(100, signals.reduce((total, signal) => total + Math.max(0, Math.min(100, signal.score)), 0));
  return { allow: score < threshold, score, reasons: signals.map((signal) => signal.reason) };
}
export function validateThreatSignal(signal: ThreatSignal): void {
  if (!signal.source || !signal.reason || signal.score < 0 || signal.score > 100) throw new Error('INVALID_THREAT_SIGNAL');
}
