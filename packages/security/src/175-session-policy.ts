export interface SessionPolicy{idleMinutes:number;absoluteHours:number;maxConcurrent:number;}
export function validateSessionPolicy(p:SessionPolicy):void{if(p.idleMinutes<1||p.absoluteHours<1||p.maxConcurrent<1)throw new Error('INVALID_SESSION_POLICY');}
