# Nexus QMS

## Overview
Nexus QMS is a React-based microservice for real-time task lifecycle tracking and operational bottleneck identification.

It enables structured task state transitions, live duration tracking, and workflow escalation for blocked processes.

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS v4
- React Hooks (`useState`, `useEffect`)

---

## Functional Specifications

### State Machine
Managed transitions between:
- Pending
- Processing
- Completed

Ensures predictable and controlled task lifecycle flow.

### Live Duration Tracking
- Precision timing using `Date.now()`
- Automated cleanup via `setInterval`
- Real-time duration visibility per task

### Stuck Protocol
A signaling mechanism that allows workers to:
- Flag blocked tasks
- Request supervisor intervention
- Improve operational transparency

### Architecture
- Unidirectional data flow
- State lifted to the parent container
- Modular and maintainable component structure

---

## Implementation Status

### Completed
- [x] Responsive 3-column layout
- [x] Dynamic task intake and priority assignment
- [x] Live duration timers

### In Progress
- [ ] Boolean "Stuck" state flagging

### Planned
- [ ] LocalStorage persistence
- [ ] Archive analytics

---

## Installation & Running Locally

```bash
git clone https://github.com/your repo/queue-management-react.git
cd queue-management-react
npm install
npm run dev
```

The app runs at:

```
http://localhost:5173
```
