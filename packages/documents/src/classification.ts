export interface Classification { documentId:string; label:string; confidence:number; }
export function validateClassification(value:Classification):void { if(!value.documentId||!value.label||value.confidence<0||value.confidence>1) throw new Error('INVALID_CLASSIFICATION'); }
