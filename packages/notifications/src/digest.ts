export interface DigestItem{id:string;userId:string;category:string;createdAt:string;payload:unknown;}
export function groupDigest(items:DigestItem[]):Map<string,DigestItem[]>{const out=new Map<string,DigestItem[]>();for(const i of items){const a=out.get(i.userId)??[];a.push(i);out.set(i.userId,a);}return out;}
