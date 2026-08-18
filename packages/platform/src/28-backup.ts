export interface BackupPolicy{retentionDays:number;frequencyMinutes:number;encrypted:boolean}
export function validateBackup(p:BackupPolicy):void{if(p.retentionDays<1||p.frequencyMinutes<1||!p.encrypted)throw new Error('INVALID_BACKUP_POLICY');}
