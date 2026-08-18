export interface ExportItem{resource:string;id:string;data:unknown}
export function buildExport(items:ExportItem[]):string{return JSON.stringify({version:1,exportedAt:new Date().toISOString(),items});}
