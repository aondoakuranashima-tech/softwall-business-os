# @softwall/contracts

Versioned API and event contract package for the Softwall platform.

## Rules

- Contracts are backward-compatible by default.
- Events carry a unique ID, version, timestamp, tenant/organization context, correlation ID, and producer metadata.
- Never place secrets or unnecessary personal data in contracts or events.
- Breaking changes require an explicit version change and migration plan.
