# Softwall Business Suite Capability Runtime

This package is the central runtime registry for the 190 Business Suite capabilities.

Each capability has a stable ID and lifecycle state. Product applications consume these capabilities from the Business Suite rather than reimplementing platform concerns.

## Lifecycle

`planned` → `in_progress` → `implemented` → `verified`.

Only `verified` capabilities may be reported as complete in the metric matrix.

## Domains

Foundation, Identity, Authorization, Security, Billing, AI, Documents, Notifications, Events, Data, Observability, Delivery, Enterprise/Compliance, and Unified Experience.
