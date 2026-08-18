export interface SharedPackage { name:string; version:string; exports:string[]; }
export function validateSharedPackage(p:SharedPackage):void { if(!p.name||!p.version||!p.exports.length) throw new Error('INVALID_SHARED_PACKAGE'); }
