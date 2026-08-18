export interface FeatureFlag { key: string; enabled: boolean; environments?: string[]; organizations?: string[]; rolloutPercentage?: number; }

export class FeatureFlagStore {
  private readonly flags = new Map<string, FeatureFlag>();
  set(flag: FeatureFlag): void { if (flag.rolloutPercentage !== undefined && (flag.rolloutPercentage < 0 || flag.rolloutPercentage > 100)) throw new Error('INVALID_ROLLOUT'); this.flags.set(flag.key, flag); }
  isEnabled(key: string, context: { environment: string; organizationId?: string; stableId?: string }): boolean {
    const flag = this.flags.get(key); if (!flag || !flag.enabled) return false;
    if (flag.environments && !flag.environments.includes(context.environment)) return false;
    if (flag.organizations && (!context.organizationId || !flag.organizations.includes(context.organizationId))) return false;
    if (flag.rolloutPercentage === undefined || flag.rolloutPercentage >= 100) return true;
    if (!context.stableId) return false;
    let hash = 0; for (const c of `${key}:${context.stableId}`) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
    return (hash % 100) < flag.rolloutPercentage;
  }
}
