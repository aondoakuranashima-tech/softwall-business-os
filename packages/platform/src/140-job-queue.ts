export interface Job<T=unknown>{id:string;type:string;payload:T;attempts:number;status:'queued'|'running'|'done'|'failed'}
export function nextJob<T>(jobs:Job<T>[]):Job<T>|undefined{return jobs.find(j=>j.status==='queued')}
