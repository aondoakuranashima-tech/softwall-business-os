export interface StoredFile { key:string; size:number; mimeType:string; checksum:string; }
export function validateFile(file:StoredFile):void { if(!file.key||file.size<0||!file.mimeType||!file.checksum) throw new Error('INVALID_FILE'); }
