export interface AiAuditEvent { id:string; organizationId:string; userId:string; action:string; model?:string; occurredAt:string; metadata?:Record<string,unknown>; }
export function createAiAuditEvent(input:Omit<AiAuditEvent,'id'|'occurredAt'>):AiAuditEvent { return {...input,id:crypto.randomUUID(),occurredAt:new Date().toISOString()}; }
