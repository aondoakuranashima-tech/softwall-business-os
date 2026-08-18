export interface RetentionPolicy { id:string; organizationId:string; retentionDays:number; enabled:boolean; }
export function retentionExpiry(createdAt:string, policy:RetentionPolicy):string { if(policy.retentionDays<1) throw new Error('INVALID_RETENTION'); return new Date(Date.parse(createdAt)+policy.retentionDays*86400000).toISOString(); }
