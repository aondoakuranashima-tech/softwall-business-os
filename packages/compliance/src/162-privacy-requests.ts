export type PrivacyRequestType='access'|'export'|'delete'|'rectify';
export interface PrivacyRequest{id:string;userId:string;type:PrivacyRequestType;status:'pending'|'processing'|'completed'|'rejected';createdAt:string;}
