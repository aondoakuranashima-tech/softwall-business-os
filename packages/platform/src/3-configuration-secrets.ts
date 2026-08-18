export interface ConfigSecret { key:string; value:string; secret:boolean; required:boolean; }
export function requireSecret(items:ConfigSecret[],key:string):string { const x=items.find(i=>i.key===key); if(!x||!x.value) throw new Error(`MISSING_CONFIG:${key}`); return x.value; }
