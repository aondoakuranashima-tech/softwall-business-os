export interface Memory{ id:string;tenantId:string;userId?:string;content:string;createdAt:string;expiresAt?:string }
export function activeMemories(memories:Memory[],now=Date.now()):Memory[]{return memories.filter(m=>!m.expiresAt||Date.parse(m.expiresAt)>now)}
