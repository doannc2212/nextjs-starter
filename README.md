# Next.js Starter Project

This is a starter project for Next.js, a React framework for building server-side rendered applications.

## Introduction

This project aims to provide a solid foundation for building scalable and maintainable Next.js applications. It includes configurations for TypeScript, ESLint, testing, and more. Whether you're starting a new project or looking to improve an existing one, this starter project can help you get up and running quickly.

## Getting Started

### Prerequisites

Make sure you have **[Bun](https://bun.sh/docs/installation)** installed on your machine.

### Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/doannc2212/nextjs-starter.git
   cd nextjs-starter
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `apps/` - Contains the main applications of the monorepo.
- `packages/` - Contains shared packages and libraries used by the applications.

## Features

There's list of thing that i'm going to implement:

- [x] Monorepo
- [x] Linter config (commitlint and eslint)
- [x] Typescript config
- [x] Testing
- [ ] Intl
- [x] Observability
- [x] Formatter
- [ ] Feature Flag (both LaunchDarkly and PostHog)
- [ ] Analytics
- [ ] SEO
- [ ] Design System
