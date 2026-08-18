# Softwall Business Suite — Capability Implementation Contract

The Business Suite is the central platform for shared capabilities consumed by Softwall products.

## Implementation rule

A capability is marked complete only after its implementation is present in source/configuration and can be verified. Documentation alone does not make a capability complete.

## Platform domains

- Repository and shared-package standards
- Configuration and secrets
- Identity, organizations and authorization
- Security and compliance
- Unified billing and entitlements
- AI core and governance
- Documents and knowledge
- Notifications and communications
- Events, queues and workflows
- Data and storage
- Observability and reliability
- CI/CD and supply-chain security
- Enterprise administration
- Analytics and cross-product experience

## Product boundary

The 25 Softwall repositories consume platform capabilities; they do not independently reimplement the shared platform. Product-specific business logic remains in each product repository.

## Verification state

The capability matrix remains the source of truth. Current verified baseline: repository standards are complete; shared packages, configuration management and secrets management have implementation started and remain in progress until verified end-to-end.
