export interface AlertRule{name:string;metric:string;threshold:number;operator:'gt'|'gte'|'lt'|'lte';enabled:boolean}
export function evaluateAlert(r:AlertRule,value:number):boolean{if(!r.enabled)return false;return r.operator==='gt'?value>r.threshold:r.operator==='gte'?value>=r.threshold:r.operator==='lt'?value<r.threshold:value<=r.threshold}
