export interface ExtractedField { name:string; value:string; confidence:number; }
export interface ExtractionResult { documentId:string; fields:ExtractedField[]; }
export function validateExtraction(result:ExtractionResult):void { if(!result.documentId||result.fields.some(f=>!f.name||f.confidence<0||f.confidence>1)) throw new Error('INVALID_EXTRACTION'); }
