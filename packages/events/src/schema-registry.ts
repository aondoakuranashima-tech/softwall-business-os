export interface EventSchema{name:string;version:number;required:string[];}
export function validateEvent(payload:Record<string,unknown>,schema:EventSchema):void{for(const key of schema.required)if(!(key in payload))throw new Error(`EVENT_FIELD_MISSING:${key}`);}
