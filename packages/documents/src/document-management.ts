export interface Document { id:string; organizationId:string; name:string; mimeType:string; storageKey:string; createdAt:string; }
export function createDocument(input:Omit<Document,'createdAt'>):Document { if(!input.id||!input.organizationId||!input.name||!input.storageKey) throw new Error('INVALID_DOCUMENT'); return {...input,createdAt:new Date().toISOString()}; }
