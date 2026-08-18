export interface SecurityAuditEvent{id:string;actorId:string;action:string;resource:string;occurredAt:string;metadata?:Record<string,unknown>}
export function createSecurityAuditEvent(input:Omit<SecurityAuditEvent,'id'|'occurredAt'>):SecurityAuditEvent{return{...input,id:crypto.randomUUID(),occurredAt:new Date().toISOString()};}
