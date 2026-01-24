# Saayr Landing Page

## Overview

Saayr is a Saudi-based rewards and engagement platform landing page built to capture waitlist signups. The application is a full-stack TypeScript project with a React frontend and Express backend, designed to communicate the brand's values around presence, community, and real-world interaction. The name "Saayr" means "come over" in Arabic, reflecting the platform's focus on check-ins, participation, and meaningful engagement that converts into XP, points, levels, and rewards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming, using a deep teal/forest green brand palette
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for scroll reveals and page transitions
- **Internationalization**: Custom language hook supporting English and Arabic (RTL support included)
- **Typography**: Outfit font for headings, DM Sans for body text, Almarai for Arabic

### Backend Architecture
- **Framework**: Express 5 running on Node.js with TypeScript
- **API Design**: Type-safe REST API with Zod validation, shared route contracts between client and server
- **Build System**: esbuild for server bundling, Vite for client bundling
- **Development**: Hot module replacement via Vite dev server proxied through Express

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains table definitions using drizzle-orm/pg-core
- **Migrations**: Drizzle Kit for schema migrations, output to `./migrations` directory
- **Current Schema**: Single `waitlist_entries` table with id, email, role (user/business), and createdAt fields

### API Structure
- **Route Contracts**: Defined in `shared/routes.ts` with Zod schemas for input/output validation
- **Current Endpoints**:
  - `POST /api/waitlist` - Creates waitlist entry, validates email, checks for duplicates
- **Error Handling**: Structured error responses with validation errors, conflict detection (409), and field-level error messages

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components including shadcn/ui
    hooks/        # Custom React hooks (language, waitlist, toast)
    pages/        # Route components
    lib/          # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared code between client/server
  schema.ts       # Drizzle schema definitions
  routes.ts       # API contract definitions
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store (available but not currently used)

### Frontend Libraries
- **@tanstack/react-query**: Async state management and caching
- **framer-motion**: Animation library for scroll reveals and transitions
- **react-hook-form**: Form state management with Zod resolver integration
- **wouter**: Lightweight React router
- **Radix UI**: Accessible component primitives (full suite installed)
- **Lucide React**: Icon library

### Build Tools
- **Vite**: Frontend dev server and bundler with React plugin
- **esbuild**: Fast server-side bundling for production
- **TypeScript**: Full type safety across the stack
- **Tailwind CSS**: Utility-first styling with custom theme configuration

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)