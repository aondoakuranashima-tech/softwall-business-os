export interface DocumentVersion { id:string; documentId:string; version:number; storageKey:string; createdAt:string; }
export function nextVersion(versions:DocumentVersion[]):number { return versions.reduce((m,v)=>Math.max(m,v.version),0)+1; }
