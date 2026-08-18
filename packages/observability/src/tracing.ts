export interface TraceSpan{traceId:string;spanId:string;name:string;startTime:number;endTime?:number;attributes?:Record<string,string>;}
export function finishSpan(span:TraceSpan):TraceSpan{return{...span,endTime:Date.now()};}
