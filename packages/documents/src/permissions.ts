export type DocumentPermission='read'|'write'|'share'|'delete';
export interface DocumentAcl { documentId:string; subjectId:string; permissions:DocumentPermission[]; }
export function hasDocumentPermission(acl:DocumentAcl, permission:DocumentPermission):boolean { return acl.permissions.includes(permission); }
