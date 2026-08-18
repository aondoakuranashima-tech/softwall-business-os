export interface ProcessingActivity{ id:string;organizationId:string;purpose:string;dataCategories:string[];retentionDays:number;processors:string[]; }
export function validateProcessingActivity(a:ProcessingActivity):void{if(!a.organizationId||!a.purpose||a.retentionDays<0)throw new Error('INVALID_PROCESSING_ACTIVITY');}
