export interface AuditRecord { id: string; actorId: string; organizationId: string; action: string; resource: string; occurredAt: string; metadata?: Record<string, unknown>; }
export interface RecoveryPlan { id: string; rtoSeconds: number; rpoSeconds: number; backupRequired: boolean; restoreTested: boolean; }
export interface BackupRecord { id: string; createdAt: string; checksum: string; storageLocation: string; encrypted: boolean; verifiedAt?: string; }
export interface Vulnerability { id: string; severity: 'low' | 'medium' | 'high' | 'critical'; packageName?: string; status: 'open' | 'accepted' | 'resolved'; }

export function auditRecord(input: Omit<AuditRecord, 'id' | 'occurredAt'>): AuditRecord {
  return { ...input, id: crypto.randomUUID(), occurredAt: new Date().toISOString() };
}
export function canRestore(plan: RecoveryPlan): boolean { return plan.backupRequired && plan.restoreTested && plan.rtoSeconds > 0 && plan.rpoSeconds > 0; }
export function validateBackup(record: BackupRecord): void { if (!record.encrypted || !record.checksum || !record.storageLocation) throw new Error('INVALID_BACKUP'); }
export function blocksRelease(vulnerabilities: Vulnerability[]): boolean { return vulnerabilities.some((v) => v.status === 'open' && (v.severity === 'critical' || v.severity === 'high')); }
