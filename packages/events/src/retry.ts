export function retryDelay(attempt:number,baseMs=500,maxMs=30000):number{return Math.min(maxMs,baseMs*2**Math.max(0,attempt-1));}
