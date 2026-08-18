export interface DocumentTemplate { id:string; organizationId:string; name:string; body:string; version:number; active:boolean; }
export function renderTemplate(template:DocumentTemplate, values:Record<string,string>):string { if(!template.active) throw new Error('TEMPLATE_INACTIVE'); return template.body.replace(/\{\{(\w+)\}\}/g,(_,key)=>values[key]??''); }
