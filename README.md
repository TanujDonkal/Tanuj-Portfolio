# Tanuj Kumar Portfolio

Personal portfolio website for Tanuj Kumar, built with a Next.js frontend and an Express/TypeScript backend. The site highlights profile information, experience, education, skills, selected projects, and a contact form.

## Tech Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Backend: Express, TypeScript
- Database: Supabase
- Deployment targets: Vercel for the frontend, Render for the backend

## Project Structure

```text
frontend/  Next.js portfolio website
backend/   Express API for portfolio data and contact submissions
```

## Local Development

Install all dependencies:

```bash
npm run install:all
```

Run frontend and backend together:

```bash
npm run dev
```

Run each app separately:

```bash
npm run dev:frontend
npm run dev:backend
```

## Environment Variables

Create `backend/.env` from `backend/.env.example` and add your Supabase credentials when the database is ready.

The frontend reads `NEXT_PUBLIC_API_URL`, which should point to the backend API URL.

## Build

```bash
npm run build:frontend
npm run build:backend
```
