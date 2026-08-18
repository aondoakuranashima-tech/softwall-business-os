export type HealthStatus='healthy'|'degraded'|'unhealthy';
export interface HealthCheck{name:string;status:HealthStatus;latencyMs:number;message?:string}
export function overallHealth(checks:HealthCheck[]):HealthStatus{if(checks.some(c=>c.status==='unhealthy'))return'unhealthy';if(checks.some(c=>c.status==='degraded'))return'degraded';return'healthy'}
