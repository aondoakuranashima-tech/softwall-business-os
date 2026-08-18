export interface OcrResult { documentId:string; text:string; language?:string; confidence:number; }
export function validateOcr(result:OcrResult):void { if(!result.documentId||result.confidence<0||result.confidence>1) throw new Error('INVALID_OCR'); }
