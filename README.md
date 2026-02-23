Nexus QMS
Overview
A React-based micro-service for real-time task lifecycle tracking and operational bottleneck identification.

Tech Stack
Core: React 18 / Vite

Styling: Tailwind CSS v4

Logic: React Hooks (useState, useEffect)

Functional Specifications
State Machine: Managed transitions between Pending, Processing, and Completed statuses.

Live Duration: Precision tracking using Date.now() with automated setInterval cleanup.

Stuck Protocol: A signaling mechanism allowing workers to flag tasks requiring supervisor intervention.

Architecture: Unidirectional data flow with state lifted to the parent container for modularity.

Implementation Status

[x] Responsive 3-column layout

[x] Dynamic task intake and priority assignment

[x] Live duration timers

[ ] In Progress: Boolean "Stuck" state flagging

[ ] Planned: LocalStorage persistence & Archive analytics
