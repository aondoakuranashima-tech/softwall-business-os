export interface Memory { id:string; organizationId:string; userId:string; key:string; value:string; createdAt:string; }
export function createMemory(input: Omit<Memory,'createdAt'>): Memory { if(!input.organizationId||!input.userId||!input.key) throw new Error('INVALID_MEMORY'); return {...input,createdAt:new Date().toISOString()}; }
