export interface NotificationTemplate{id:string;category:string;channel:string;body:string;version:number;active:boolean;}
export function renderTemplate(t:NotificationTemplate,vars:Record<string,string>):string{if(!t.active)throw new Error('TEMPLATE_INACTIVE');return t.body.replace(/\{\{(\w+)\}\}/g,(_,k)=>vars[k]??'');}
