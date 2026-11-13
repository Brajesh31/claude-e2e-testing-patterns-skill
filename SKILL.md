---
name: e2e-testing-patterns
description: Designs reliable end-to-end test suites with stable selectors, realistic fixtures, deterministic setup, and actionable failure diagnostics.
---

# E2E Testing Patterns

Use this skill to design, implement, and debug end-to-end tests for browser or application workflows.

## Workflow
1. Identify the critical user journeys and the risk each journey covers.
2. Inspect the existing test runner, conventions, fixtures, and CI environment.
3. Define deterministic test data and isolated setup/teardown.
4. Prefer accessible role/name selectors and user-visible behavior.
5. Cover success, validation, authorization, error, and recovery paths.
6. Capture useful traces, screenshots, console output, and network context on failure.
7. Run focused tests locally, then the full relevant suite in CI.

## Reliability rules
- Avoid fixed sleeps; wait for observable conditions.
- Do not couple tests to fragile CSS classes or DOM structure.
- Avoid shared mutable test accounts and order-dependent suites.
- Stub only external dependencies whose behavior is not under test.
- Keep test assertions focused on user-observable outcomes.
- Quarantine flaky tests only with an owner and a removal plan.

See `references/reliability-patterns.md`, `templates/test-plan.md`, and `examples/checkout.spec.example.ts`.
