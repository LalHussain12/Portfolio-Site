# WordPress Portfolio Website

## Overview

This is a full-stack WordPress developer portfolio website built with modern web technologies. The application features a React frontend with TypeScript, a Node.js/Express backend, and PostgreSQL database integration using Drizzle ORM. The site showcases projects, testimonials, blog posts, and includes a contact form for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture:
- **UI Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design system
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds
- **Theme Support**: Light/dark mode switching with context-based theme provider

### Backend Architecture
The backend uses a RESTful API architecture:
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the stack
- **API Design**: RESTful endpoints for CRUD operations
- **Middleware**: Custom logging and error handling middleware
- **Development**: Hot reload support with Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database interactions
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL
- **Fallback**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
The application defines four main entities:
- **Projects**: Portfolio projects with title, description, images, technologies, and featured status
- **Testimonials**: Client testimonials with ratings and featured status
- **Blog Posts**: Blog content with publishing status and tags
- **Contact Messages**: Messages from the contact form

### Frontend Components
- **Layout Components**: Header with navigation and Footer
- **Section Components**: Hero, About, Services, Portfolio, Testimonials, Blog, Contact
- **UI Components**: Comprehensive shadcn/ui component library
- **Form Handling**: React Hook Form with Zod validation

### Backend Services
- **Storage Interface**: Abstract storage interface with both database and in-memory implementations
- **API Routes**: RESTful endpoints for all data operations
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

1. **Client Requests**: Frontend makes HTTP requests to backend API endpoints
2. **API Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: API returns JSON responses with proper error handling
5. **Frontend Updates**: TanStack Query manages caching and UI updates

## External Dependencies

### Core Technologies
- **React & TypeScript**: Frontend framework and type system
- **Express.js**: Backend web framework
- **Drizzle ORM**: Database toolkit and ORM
- **TanStack Query**: Server state management
- **Zod**: Schema validation library

### UI Libraries
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Database & Infrastructure
- **PostgreSQL**: Primary database
- **Neon Database**: Serverless PostgreSQL provider
- **Vite**: Build tool and development server

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to static files
- **Backend**: esbuild bundles Node.js server code
- **Database**: Drizzle migrations handle schema changes

### Environment Configuration
- **Development**: Local development with hot reload and Vite dev server
- **Production**: Compiled JavaScript served by Express with static file serving
- **Database**: Environment-based database URL configuration

### File Structure
- **Client**: All frontend code in `/client` directory
- **Server**: Backend code in `/server` directory  
- **Shared**: Common types and schemas in `/shared` directory
- **Build Output**: Compiled files in `/dist` directory

The architecture follows modern full-stack patterns with clear separation of concerns, type safety throughout, and scalable component organization.