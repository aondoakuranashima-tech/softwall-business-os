export interface AuditLog{id:string;actorId:string;action:string;resource:string;timestamp:string;metadata?:Record<string,unknown>}
export function audit(input:Omit<AuditLog,'timestamp'>):AuditLog{return{...input,timestamp:new Date().toISOString()}}
