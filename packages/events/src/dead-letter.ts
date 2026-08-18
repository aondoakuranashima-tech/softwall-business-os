export interface DeadLetterEvent{eventId:string;type:string;reason:string;failedAt:string;payload:unknown;}
export function createDeadLetter(e:{eventId:string;type:string;reason:string;payload:unknown}):DeadLetterEvent{return {...e,failedAt:new Date().toISOString()};}
