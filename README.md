# Professional Website - Jack George

> GIS Engineer & Azure Cloud Architect Portfolio

---

## Recent Major Changes (2026)

- RSS Industry Radar: Curated tech news page with category/source filters, streaming loading, and HTML-cleaned summaries.
  - 13-feed list, grouped by GIS, Security, Tech Blog, Tech News, Cloud.
  - Progressive loading via SSE (items appear as feeds resolve).
  - Source balancing in "All" view (no single feed dominates).
  - 3-month cutoff for freshness.
- Pomodoro Timer: Minimal, token-styled timer page (Work/Break, sound cues, responsive, no header nav link).
- Header: Language toggle and Pomodoro link removed for a more focused, professional look.
- UI/UX: All spacing, colors, and typography use the design token system. Mobile and desktop layouts refined for focus and clarity.
- Code: Strict TypeScript, shared server utils, i18n, and improved HTML parsing for RSS feeds.

---

## Project Overview

**Purpose**: Professional portfolio and credibility hub for recruiters, clients, and technical peers.

**Tech Stack**:
- **Framework**: Nuxt.js 4 (Static Site Generation)
- **Styling**: Token-based CSS design system
- **Hosting**: Azure Static Web Apps (planned)
- **CI/CD**: GitHub Actions (planned)

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
