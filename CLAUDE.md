# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Next.js 13+ (App Router), TypeScript, and Tailwind CSS. The site is deployed on Vercel and features MDX-based blog posts with custom components.

## Development Commands

**Package Manager**: This project uses `pnpm` (not npm or yarn).

```bash
pnpm dev          # Start development server on localhost:3000
pnpm build        # Build production bundle
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

### Blog Post System

Posts are stored as MDX files in `/contents` directory with frontmatter metadata:

```
contents/
  ├── post-slug-1.mdx
  └── post-slug-2.mdx
```

**Post Frontmatter Structure** (app/db/blogs.ts:4-11):
```yaml
---
title: "Post Title"
publishedAt: "2024-01-03"  # ISO date format
summary: "Brief description"
lang: "en" or "zh-tw"
image: "/path/to/image.jpg"  # Optional
imageAlt: "Alt text"  # Optional
---
```

**Post Loading Flow**:
1. `getPosts()` (app/db/blogs.ts:64) reads all MDX files from `/contents`
2. `parseFormat()` extracts frontmatter and content
3. Slug is derived from filename (e.g., `my-post.mdx` → slug: `my-post`)
4. Posts are rendered at `/posts/[slug]` using dynamic routing

### MDX Rendering

Posts are rendered using `next-mdx-remote` with custom components (app/components/mdx.tsx):

**Custom MDX Components**:
- Custom headings (h1-h6) with auto-generated anchor links and slugified IDs
- Code blocks with syntax highlighting via `sugar-high`
- Links: internal (`/`), anchor (`#`), or external (with target="_blank")
- Images wrapped in links for click-to-expand
- Custom `Table`, `Divider`, `Reference` components

### Path Aliases (tsconfig.json:22-26)

```
@/*           → ./app/*
@components/* → ./app/components/*
@db/*         → ./app/db/*
```

Use these aliases consistently in imports.

### Database & Analytics

**View Tracking**: Uses Vercel Postgres to track post views
- `increaseView()` (app/db/mutations.ts) increments view count per post
- Only runs in production (app/posts/[slug]/view.tsx:4)
- Post ID format: `${slug}_${publishedAt}`

**Third-party Analytics**:
- Google Analytics (GA4 ID: G-3Q86STLNWS)
- Vercel Speed Insights

Both configured in app/layout.tsx.

### Styling

- **Tailwind CSS**: Utility-first styling
- **Custom Fonts**: Rubik and Inter fonts configured in app/fonts.ts
- **clsx**: Used for conditional className composition
- **Global styles**: app/globals.css

### Component Patterns

The site follows these patterns:
- Server Components by default (Next.js 13 App Router)
- Client Components marked with `'use client'` only when needed
- Metadata exported from page components for SEO
- Consistent layout with Header component across pages

## Key Files

- `app/db/blogs.ts` - Blog post loading and parsing logic
- `app/components/mdx.tsx` - MDX component configuration and custom renderers
- `app/posts/[slug]/page.tsx` - Individual post page template
- `contents/*.mdx` - Blog post source files
- `app/layout.tsx` - Root layout with metadata and analytics

## Adding New Blog Posts

1. Create a new `.mdx` file in `/contents` directory
2. Add frontmatter with required fields (title, publishedAt, summary, lang)
3. Write content below frontmatter using MDX syntax
4. The post will be automatically available at `/posts/[filename]`

## Deployment

The site is configured for Vercel deployment with:
- Automatic builds on push
- Environment variables expected for production (Vercel Postgres)
- Node version specified in `.nvmrc`
