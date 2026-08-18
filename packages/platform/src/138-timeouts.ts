export interface TimeoutPolicy{connectMs:number;requestMs:number}
export function validateTimeouts(p:TimeoutPolicy):void{if(p.connectMs<1||p.requestMs<1)throw new Error('INVALID_TIMEOUT')}
