export interface SignatureRequest { id:string; documentId:string; signerId:string; status:'pending'|'signed'|'declined'; requestedAt:string; signedAt?:string; }
export function sign(request:SignatureRequest):SignatureRequest { if(request.status!=='pending') throw new Error('SIGNATURE_CLOSED'); return {...request,status:'signed',signedAt:new Date().toISOString()}; }
