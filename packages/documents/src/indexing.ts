export interface IndexedDocument { documentId:string; terms:string[]; indexedAt:string; }
export function tokenize(text:string):string[] { return [...new Set(text.toLowerCase().split(/\s+/).map(s=>s.replace(/[^a-z0-9]/g,'')).filter(Boolean))]; }
export function createIndex(documentId:string,text:string):IndexedDocument { if(!documentId) throw new Error('INVALID_DOCUMENT_ID'); return {documentId,terms:tokenize(text),indexedAt:new Date().toISOString()}; }
