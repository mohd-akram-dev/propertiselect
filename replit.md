# PropertySelect Academy - Real Estate Investment Platform

## Overview

PropertySelect Academy is a modern web application designed for Dubai real estate investment education and consultation services. The platform provides comprehensive training, expert guidance, and consultation booking for investors looking to succeed in Dubai's dynamic real estate market. Built with a full-stack TypeScript architecture, it features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite integration in development mode

### Database Strategy
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Validation**: Zod schemas derived from database schema for runtime validation

## Key Components

### User Interface Components
- **Navigation**: Sticky header with smooth scroll navigation
- **Hero Section**: Video Sales Letter (VSL) integration with call-to-action
- **Academy Solution**: Value proposition presentation with service highlights
- **Testimonials**: Rotating testimonial carousel with client success stories
- **Team Showcase**: Professional team member profiles and expertise areas
- **Consultation Form**: Multi-field form with validation for booking consultations
- **Footer**: Contact information and additional navigation links

### Core Features
- **Consultation Booking**: Complete form submission system with validation
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation
- **Performance**: Optimized images and lazy loading
- **SEO**: Semantic HTML structure and meta tag optimization

### Data Models
- **Consultations**: Client inquiry system with personal information, investment goals, budget range, and custom messages
- **Form Validation**: Real-time validation with error messaging
- **Data Persistence**: PostgreSQL storage with backup and recovery capabilities

## Data Flow

1. **Client Interaction**: Users navigate through landing page sections via smooth scrolling
2. **Consultation Submission**: Form data validated client-side with Zod schemas
3. **API Processing**: Express server validates and processes consultation requests
4. **Database Storage**: Drizzle ORM handles data persistence to PostgreSQL
5. **Response Handling**: Success/error feedback via toast notifications
6. **Admin Access**: Backend API endpoints for retrieving consultation data

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **drizzle-orm**: Type-safe database ORM with PostgreSQL support
- **wouter**: Lightweight routing library for React applications

### Development Tools
- **TypeScript**: Static type checking across frontend and backend
- **Vite**: Fast build tool with hot module replacement
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **ESBuild**: Fast bundling for production server builds

### Database Integration
- **Drizzle Kit**: Migration management and schema synchronization
- **connect-pg-simple**: PostgreSQL session store for Express
- **Zod**: Runtime type validation and schema definition

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with Express.js integration
- **Type Checking**: Continuous TypeScript compilation checking
- **Database**: Local PostgreSQL instance with environment-based configuration

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: PostgreSQL with connection pooling and environment variables
- **Static Assets**: Served through Express with proper caching headers

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Management**: Secure session configuration for production

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
- July 07, 2025. Complete design overhaul with brand colors (#215175, #359D9E, white) - minimalistic, modern design
- July 07, 2025. Replaced consultation form with Calendly integration button
- July 07, 2025. Updated testimonials with real estate-focused names and achievements, changed category badges from yellow to green
- July 07, 2025. Added "+10 more experienced professionals" text to team section
- July 07, 2025. Changed risk section background from yellow to subtle red border with light background
- July 07, 2025. Adjusted card heights in Academy section for visual balance
- July 22, 2025. Fixed mobile testimonial stars positioning issue - removed overlap with text content
- July 22, 2025. Removed PIN protection entirely - website now loads directly without password barrier
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```