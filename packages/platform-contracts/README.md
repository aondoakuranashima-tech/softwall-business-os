# @softwall/platform-contracts

Canonical shared contract package for the Softwall Business Suite.

## Contract

Version: `2026-08-18.v1`

Products consume this package through their package workspace or approved published artifact. The package owns cross-product contracts only; product-domain models remain product-owned.

## Shared boundaries

- `TenantContext` — organization, actor and request correlation context.
- `PlatformEvent` — versioned, tenant-scoped event envelope.
- `EntitlementCheck` / `EntitlementResult` — billing capability boundary.
- `createPlatformEvent()` — canonical event construction.

Products must not directly query another product's database or bypass platform authorization.
