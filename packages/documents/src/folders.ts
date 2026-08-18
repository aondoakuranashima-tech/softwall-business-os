export interface DocumentFolder { id:string; organizationId:string; parentId?:string; name:string; }
export function validateFolder(folder:DocumentFolder):void { if(!folder.id||!folder.organizationId||!folder.name.trim()) throw new Error('INVALID_FOLDER'); }
