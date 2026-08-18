export type CircuitState='closed'|'open'|'half-open';
export interface Circuit{failures:number;threshold:number;state:CircuitState}
export function recordFailure(c:Circuit):Circuit{const failures=c.failures+1;return{...c,failures,state:failures>=c.threshold?'open':c.state}}
