export interface LegalHold { id:string; organizationId:string; documentIds:string[]; reason:string; active:boolean; createdAt:string; }
export function isProtected(documentId:string, holds:LegalHold[]):boolean { return holds.some(h=>h.active&&h.documentIds.includes(documentId)); }
