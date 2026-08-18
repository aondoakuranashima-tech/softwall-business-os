export interface RepositoryStandard { requiredFiles:string[]; requiredChecks:string[]; protectedBranches:string[]; }
export function validateRepositoryStandard(s:RepositoryStandard):void { if(!s.requiredFiles.length||!s.requiredChecks.length||!s.protectedBranches.length) throw new Error('INCOMPLETE_REPOSITORY_STANDARD'); }
