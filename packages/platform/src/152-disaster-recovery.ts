export interface RecoveryTarget { rtoMinutes:number; rpoMinutes:number; }
export function validateRecoveryTarget(t:RecoveryTarget):void { if(t.rtoMinutes<0||t.rpoMinutes<0) throw new Error('INVALID_RECOVERY_TARGET'); }
