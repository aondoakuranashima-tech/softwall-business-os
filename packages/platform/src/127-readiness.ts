import type {HealthCheck} from './126-health-checks';
export function isReady(checks:HealthCheck[]):boolean{return checks.length>0&&checks.every(c=>c.status!=='unhealthy')}
