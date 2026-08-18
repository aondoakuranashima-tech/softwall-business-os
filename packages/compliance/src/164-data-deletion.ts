export interface DeletionPolicy{legalHold:boolean;retentionExpired:boolean;}
export function canDelete(p:DeletionPolicy):boolean{return p.retentionExpired&&!p.legalHold;}
