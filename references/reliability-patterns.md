# Reliable E2E Testing Patterns

## Selectors
Prefer accessible roles and labels. Use stable test IDs only when a meaningful accessible selector is unavailable. Avoid positional selectors when a semantic locator exists.

## Synchronization
Wait for the expected state: navigation, visible content, enabled controls, or a completed network response. Fixed delays create slow and flaky tests.

## Isolation
Each test should own its data and clean up after itself. Parallel tests must not mutate the same account, cart, or record.

## Assertions
Assert meaningful user outcomes, not implementation details. Check both the visible result and critical persisted state when appropriate.

## Failure diagnostics
Collect trace, screenshot, console errors, failed requests, and test data identifiers. Redact credentials and personal data from artifacts.
