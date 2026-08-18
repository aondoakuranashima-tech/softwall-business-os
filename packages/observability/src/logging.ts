export interface LogEntry{level:'debug'|'info'|'warn'|'error';message:string;timestamp:string;organizationId?:string;traceId?:string;metadata?:Record<string,unknown>;}
export function createLog(level:LogEntry['level'],message:string,metadata?:Record<string,unknown>):LogEntry{return{level,message,timestamp:new Date().toISOString(),metadata};}
