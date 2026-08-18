export interface DocumentTag { id:string; organizationId:string; name:string; }
export function normalizeTagName(name:string):string { const value=name.trim().toLowerCase(); if(!value) throw new Error('INVALID_TAG'); return value; }
