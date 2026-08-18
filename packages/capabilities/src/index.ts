export const capabilityCatalog = [
  'repository-standards','shared-packages','configuration','secrets','api-gateway','service-discovery','feature-flags','environment-management',
  'identity','authentication','password-auth','passkeys','mfa','device-management','sessions','organizations','multi-tenancy','rbac','abac','policy-engine','sso','saml','scim','pam','zero-trust',
  'encryption','key-management','waf','api-security','rate-limiting','threat-detection','fraud-detection','risk-engine','security-audit','vulnerability-management','dependency-security','incident-response','disaster-recovery','backup-restore',
  'billing','stripe','paystack','flutterwave','merchant-of-record','subscriptions','per-user-billing','usage-billing','entitlements','pricing','invoices','refunds','credits','reconciliation','tax','multi-currency','regional-payments','billing-analytics',
  'ai-core','ai-gateway','model-routing','agents','agent-permissions','tools','rag','vector-search','ai-memory','prompt-management','prompt-versioning','evaluations','ai-safety','guardrails','human-approval','ai-metering','ai-audit','ai-observability',
  'documents','file-storage','object-storage','malware-scanning','ocr','classification','extraction','indexing','search','knowledge-bases','retention','secure-deletion','esignature',
  'notifications','email','sms','push','in-app-notifications','notification-templates','notification-preferences','communication-audit',
  'event-bus','event-schemas','event-versioning','queues','workers','webhooks','webhook-verification','idempotency','integrations','connectors','workflow-automation','scheduled-jobs','retries','dead-letter-queues',
  'postgresql','prisma','redis-valkey','storage-architecture','search-infrastructure','analytics-warehouse','data-pipelines','migrations','data-residency','regional-isolation','data-retention',
  'logging','metrics','tracing','audit-events','security-monitoring','billing-monitoring','ai-monitoring','business-analytics','alerting','slo-monitoring','incident-management',
  'ci-cd','automated-testing','unit-testing','integration-testing','e2e-testing','infrastructure-as-code','containers','deployment','staging','production','rollback','dependency-management','secret-scanning','sast','dast','container-scanning','supply-chain-security','release-management',
  'enterprise-organizations','multi-workspace','custom-roles','approval-workflows','audit-exports','customer-managed-keys','dedicated-environments','data-export','sla','enterprise-support','compliance',
  'nigeria-ndpc','gdpr','uk-gdpr','us-privacy','canada-privacy','australia-privacy','mena-compliance','apac-compliance','regional-tax','ai-governance','regulatory-reporting','compliance-evidence',
  'unified-analytics','cross-product-search','customer-360','business-intelligence','ai-insights','forecasting','recommendations','anomaly-detection','unified-account','unified-dashboard','product-launcher','cross-product-navigation','global-search','help-center','support','status-center','customer-feedback','onboarding',
] as const;

export type CapabilityId = typeof capabilityCatalog[number];
export const CAPABILITY_COUNT = capabilityCatalog.length;
