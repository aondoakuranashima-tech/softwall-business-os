export interface BillingMetric { name: string; value: number; currency?: string; period: string; }
export function summarizeBilling(metrics: BillingMetric[]): Record<string, number> { return metrics.reduce<Record<string, number>>((out, metric) => { out[metric.name] = (out[metric.name] ?? 0) + metric.value; return out; }, {}); }
