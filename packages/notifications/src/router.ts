import type {NotificationChannel} from './preferences';
export interface Route{category:string;channels:NotificationChannel[];priority:number;}
export function route(routes:Route[],category:string):NotificationChannel[]{const r=routes.filter(x=>x.category===category).sort((a,b)=>a.priority-b.priority)[0];return r?.channels??[];}
