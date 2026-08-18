# Softwall Platform Implementation Roadmap

## Phase 0 — Repository standards
- Establish branch/PR policy, CODEOWNERS, security reporting, conventional commits, semantic versioning, and CI gates.
- Establish shared TypeScript/API contracts and package conventions.

## Phase 1 — Identity and Organizations
- Identity service
- Passkeys/WebAuthn
- Password + recovery
- MFA
- Device/session management
- Organization/workspace service
- Invitations and membership lifecycle
- Tenant context propagation

## Phase 2 — RBAC/ABAC and Security
- Roles and permissions
- Policy engine
- Resource authorization
- Device trust
- Security event pipeline
- Audit service
- Secrets/KMS integration
- Rate limiting/WAF integration
- Incident response hooks

## Phase 3 — Billing
- Billing domain model
- Plans/prices
- Subscriptions
- Entitlements
- Seat/usage metering
- Provider adapters
- Stripe/Paystack/Flutterwave integrations
- Optional merchant-of-record adapters
- Secure webhook ingestion
- Invoices/refunds/credits
- Tax/jurisdiction integration

## Phase 4 — AI Core
- Model gateway
- Provider routing/fallback
- Agent runtime
- Tool registry
- Permission and approval checks
- Usage metering
- Evaluation/safety framework
- AI audit events

## Phase 5 — Documents
- Upload service
- Malware scanning
- Encryption
- Object storage
- OCR/extraction pipeline
- Metadata
- Search/indexing
- Retention and deletion policies

## Phase 6 — Notifications
- Notification preferences
- Email/SMS/push adapters
- Templates
- Delivery/retry system
- Security/billing notification policies

## Phase 7 — Events
- Event contracts
- Topic/queue topology
- Idempotency
- Retry/dead-letter handling
- Correlation IDs
- Cross-product integration contracts

## Phase 8 — Observability
- Structured logs
- Metrics
- Distributed tracing
- Audit dashboards
- Security monitoring
- AI/billing telemetry
- Alerting
- Sensitive-data redaction

## Phase 9 — Product integration

Integrate the shared platform into each of the 25 product repositories without moving their domain databases into a central monolith.

## Definition of done

A platform component is production-ready only when it has automated tests, authorization tests, tenant-isolation tests, failure/retry behavior, observability, documentation, secure configuration, migration strategy, and deployment verification.
