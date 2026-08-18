export interface DocumentChunk{id:string;tenantId:string;text:string;embedding:number[]}
export function cosineSimilarity(a:number[],b:number[]):number{if(a.length!==b.length||!a.length)return 0;let dot=0,aa=0,bb=0;for(let i=0;i<a.length;i++){const av=a[i]??0;const bv=b[i]??0;dot+=av*bv;aa+=av*av;bb+=bv*bv}return aa&&bb?dot/(Math.sqrt(aa)*Math.sqrt(bb)):0}
export function retrieve(chunks:DocumentChunk[],queryEmbedding:number[],limit=5):DocumentChunk[]{return chunks.slice().sort((a,b)=>cosineSimilarity(b.embedding,queryEmbedding)-cosineSimilarity(a.embedding,queryEmbedding)).slice(0,limit)}
