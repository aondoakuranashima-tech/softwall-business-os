export interface Region{code:string;name:string;enabled:boolean}
export function availableRegions(regions:Region[]):Region[]{return regions.filter(r=>r.enabled)}
