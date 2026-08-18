# Softwall Business Suite Architecture

## Core rule

Softwall Business Suite is the central platform. Shared capabilities are implemented once here and exposed to the 25 Softwall products through APIs and shared packages.

## Capability layers

1. Foundation — repository standards, monorepo, configuration, secrets.
2. Identity — accounts, authentication, sessions, organizations.
3. Authorization — RBAC, ABAC, policy evaluation and enterprise access.
4. Security — encryption, audit, threat detection, security controls.
5. Billing — provider adapters, subscriptions, usage, entitlements, tax and regional payment methods.
6. AI — model gateway, agents, tools, RAG, memory, governance and evaluations.
7. Content — documents, storage, OCR, indexing and knowledge.
8. Communications — email, SMS, push and in-app notifications.
9. Events — event contracts, queues, workers, webhooks and workflows.
10. Data — PostgreSQL/Prisma, cache, object storage, search and analytics.
11. Observability — logs, metrics, traces, alerts, SLOs and incident management.
12. Delivery — CI/CD, testing, deployment, rollback and supply-chain security.
13. Enterprise — compliance, residency, SLAs, dedicated environments and administration.
14. Experience — unified dashboard, search, analytics, onboarding and cross-product navigation.

Product repositories consume these layers instead of duplicating them.
