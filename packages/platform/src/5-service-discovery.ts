export interface ServiceRecord{name:string;url:string;healthy:boolean;weight:number}
export function discoverService(records:ServiceRecord[],name:string):ServiceRecord|undefined{return records.filter(r=>r.name===name&&r.healthy).sort((a,b)=>b.weight-a.weight)[0];}
