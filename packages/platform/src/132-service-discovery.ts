export interface Service{ name:string;url:string;healthy:boolean;weight:number }
export function discover(services:Service[],name:string):Service[]{return services.filter(s=>s.name===name&&s.healthy).sort((a,b)=>b.weight-a.weight)}
