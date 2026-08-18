# Softwall Master Platform Architecture

## Mission

Softwall is a family of independently deployable SaaS products built on a common platform foundation. The platform centralizes identity, organization/tenant context, authorization, security, billing, AI governance, document processing, notifications, events, and observability.

## 1. Repository standards

Every repository follows the same engineering contract:

- `main` is protected and production-ready.
- Feature work uses short-lived branches and pull requests.
- Conventional commits and semantic versioning are preferred.
- No secrets, credentials, private keys, customer data, `.env` files, or provider tokens are committed.
- CI must run formatting/linting, type checks, unit tests, integration tests, security/dependency/secret scans, and build verification.
- API contracts are versioned.
- Database migrations are reviewed and reversible where practical.
- Ownership, CODEOWNERS, contribution rules, security reporting, and architecture decision records are maintained.
- Product repositories remain private unless a deliberate open-source decision is made.

## 2. Monorepo/shared packages where appropriate

Use a dedicated platform repository structure for reusable code rather than duplicating security-sensitive logic in every product.

Recommended packages:

- `@softwall/config` — validated runtime configuration.
- `@softwall/contracts` — API/event schemas.
- `@softwall/auth` — identity client/server primitives.
- `@softwall/authorization` — RBAC/ABAC policy evaluation.
- `@softwall/security` — security headers, cryptographic helpers, audit primitives.
- `@softwall/billing` — billing client and entitlement contracts.
- `@softwall/ai` — governed model/tool interfaces.
- `@softwall/documents` — document service client.
- `@softwall/notifications` — notification service client.
- `@softwall/observability` — telemetry conventions.
- `@softwall/ui` — shared design system where web clients can safely share it.

Shared packages must not become a backdoor for direct cross-product database access. Products communicate through authenticated APIs/events.

## 3. Identity

Softwall Identity is the central authentication authority.

Supported methods:

- Passwords with strong hashing and secure recovery.
- Passkeys/WebAuthn.
- Platform biometrics through the device/OS security boundary (Face ID, Touch ID, Android biometrics, Windows Hello).
- MFA.
- Enterprise SSO using appropriate standards.
- Device/session management.

Biometric templates are never stored by Softwall. The device/OS performs biometric verification and Softwall receives a cryptographic authentication assertion/result.

Sensitive operations use step-up authentication and risk evaluation.

## 4. Organizations

The tenancy model is:

`User -> Organization -> Workspace/Product -> Resource`

Every request receives an authenticated tenant context server-side. Product data is isolated by organization/tenant. Cross-product access is explicit and policy-controlled.

Organization services manage:

- Memberships
- Invitations
- Workspaces
- Teams
- Organization settings
- Domains
- Security settings
- Data residency preferences
- Billing relationship
- Lifecycle states

## 5. RBAC/ABAC

Use RBAC for coarse roles and ABAC for contextual authorization.

RBAC examples:

- Owner
- Admin
- Manager
- Employee
- Viewer
- Auditor
- Billing Admin
- Security Admin

ABAC evaluates identity, organization, role, resource, action, device trust, risk, location where legally/operationally appropriate, time, security tier, policy, and transaction limits.

Authorization is enforced server-side and at the data boundary. Frontend visibility is never treated as authorization.

## 6. Security

Security is a shared platform capability and mandatory baseline for every product.

Core controls:

- Zero-trust service communication.
- Encryption in transit and at rest.
- Central secret management and key management.
- Hardware-backed credentials where supported.
- Device trust and session controls.
- WAF/API protection and rate limiting.
- Tenant isolation.
- Audit logs.
- Threat/risk detection.
- Security event monitoring.
- Vulnerability/dependency/secret scanning.
- Secure SDLC.
- Incident response and disaster recovery.
- AI guardrails and tool authorization.

Optional advanced capabilities include cryptographic transaction signing, customer-managed keys, HSM-backed controls, tamper-evident audit proofs, and carefully governed blockchain anchoring. Sensitive customer data and biometric data are not stored on-chain.

## 7. Billing

Softwall Billing is the single billing architecture for the product family.

### Billing core

- Products
- Plans/prices
- Subscriptions
- Subscription items
- Seats
- Usage meters
- Usage records
- Entitlements
- Add-ons
- Trials
- Credits
- Invoices
- Payments
- Refunds
- Tax metadata
- Provider mappings
- Webhook events

### Payment abstraction

Use a provider-neutral payment router with integrations such as Stripe, Paystack, and Flutterwave, with Paddle/Lemon Squeezy or other merchant-of-record options where commercially and legally appropriate.

Softwall Billing remains the source of truth for subscription state and entitlements; providers are payment rails and external transaction systems.

Webhook processing must verify signatures, enforce replay protection and idempotency, validate events, update billing state transactionally, and emit an auditable billing event.

### Pricing model

Support monthly/annual subscriptions, per-seat pricing, usage-based pricing, AI/API metering, add-ons, overages, bundles, enterprise contracts, trials, credits, and multi-currency pricing.

Plan entitlements control features/limits. Security tiers are a separate policy dimension and never remove the mandatory security baseline.

### Global readiness

Billing must be jurisdiction-aware for customer country, currency, tax rules, payment method, provider availability, and merchant-of-record requirements. Tax calculations must not be hard-coded into product code.

## 8. AI Core

AI is centralized as a governed platform rather than independently implemented by every product.

Components:

- Model gateway/provider abstraction.
- Model routing and fallback.
- Prompt/version management.
- Agent runtime.
- Tool registry.
- Memory/context controls.
- Retrieval and knowledge interfaces.
- AI usage metering.
- Evaluation framework.
- Safety/guardrail layer.
- Human approval workflows.
- AI audit trail.

AI agents receive explicit identities, scopes, tools, budgets, rate limits, data boundaries, and approval requirements. They never receive unrestricted database credentials.

High-impact actions must pass authorization/policy evaluation and can require human approval and step-up authentication.

## 9. Documents

The shared document platform handles:

`Upload -> malware scan -> encryption -> object storage -> processing/OCR -> classification/extraction -> indexing -> retrieval/AI`

It supports documents such as contracts, invoices, receipts, payslips, compliance evidence, construction documents, and business records while enforcing tenant boundaries, retention rules, access controls, and auditability.

Raw files live in object storage; transactional metadata lives in PostgreSQL; search/index data lives in a dedicated search layer.

## 10. Notifications

Central notification service with provider abstraction for:

- Email
- SMS
- Push
- In-app notifications
- Security alerts
- Billing notifications
- Workflow notifications

Notifications are event-driven, tenant-aware, preference-aware, rate-limited, retryable, and auditable. Sensitive content must follow data-minimization rules.

## 11. Events

Use an event-driven backbone for cross-service integration.

Canonical event families include:

- `UserCreated`
- `OrganizationCreated`
- `SubscriptionCreated`
- `PaymentSucceeded`
- `PaymentFailed`
- `InvoiceCreated`
- `DocumentUploaded`
- `SecurityThreatDetected`
- `AIActionRequested`
- `AIActionApproved`
- `ProductResourceCreated`

Events must have versioned schemas, unique IDs, timestamps, tenant context, producer metadata, correlation IDs, and idempotent consumers.

Use queues/topics for asynchronous work and dead-letter handling for failures. Do not make every service synchronously dependent on every other service.

## 12. Observability

Every service emits standardized:

- Logs
- Metrics
- Traces
- Audit events
- Security events
- Business events
- AI events

Observability must support correlation from user request to API call, service execution, database operation, event, AI tool call, billing action, and notification.

Sensitive data must be redacted from telemetry. Logs are immutable/auditable according to retention policy and access is tightly controlled.

## Platform request flow

`Client -> CDN/WAF -> API Gateway -> Identity -> Tenant Context -> RBAC/ABAC -> Security Policy -> Product/Platform Service -> Database/Queue/Object Storage -> Event -> Audit/Observability`

## Data architecture

Use service-owned PostgreSQL databases/schemas for transactional data, Redis/Valkey for cache/session/queue workloads, object storage for files, a dedicated search layer for retrieval, and a separate analytics warehouse for large-scale analytical workloads.

No public access to production databases. Cross-product data access happens through approved APIs/events, not shared unrestricted database credentials.

## Deployment architecture

Each service is independently deployable. CI/CD should progress through:

`Pull Request -> CI -> Security scans -> Build -> Staging -> Automated verification -> Production`

Production deployments must be observable and reversible.

## Product integration contract

Every Softwall product consumes the shared platform for identity, organization context, authorization, security, billing/entitlements, AI governance, documents where needed, notifications, events, and observability. Product repositories own their domain logic and data.

## Non-negotiable principles

1. Security before convenience.
2. Server-side authorization before UI authorization.
3. Tenant isolation by default.
4. Platform APIs/events instead of database coupling.
5. Billing provider abstraction.
6. AI agents operate with least privilege.
7. No sensitive data in telemetry without explicit justification.
8. No biometric templates stored by Softwall.
9. No secrets in source control.
10. Every critical action is auditable.
