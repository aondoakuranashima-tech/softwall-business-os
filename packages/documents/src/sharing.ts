export interface ShareGrant { documentId:string; granteeId:string; permission:'view'|'comment'|'edit'; expiresAt?:string; }
export function canShare(grant:ShareGrant, now=Date.now()):boolean { return Boolean(grant.documentId&&grant.granteeId&&(!grant.expiresAt||Date.parse(grant.expiresAt)>now)); }
