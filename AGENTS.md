# sqemebi.ge (Schemes.ge) Project Guidelines & Instructions for Antigravity

This document outlines the architecture, tech stack, development workflow, and coding conventions for the `sqemebi.ge` project.

---

## 1. Project Overview & Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript (`strict: true`)
- **React**: React 19
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`, PostCSS)
- **Icons**: `lucide-react`
- **Internationalization (i18n)**: Multilingual routing (`/[lang]/...`) supporting 3 languages:
  - Georgian (`ka`) - Default
  - English (`en`)
  - Russian (`ru`)
- **Runtime & Package Manager**: Node.js v22+ / npm

---

## 2. Directory Structure

```
├── app/
│   ├── [lang]/              # Localized pages and layouts
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog list & [slug] dynamic articles
│   │   ├── contact/         # Contact page
│   │   ├── projects/        # Portfolio / projects showcase
│   │   ├── services/        # Services catalog
│   │   ├── layout.tsx       # Root localized layout (Header, Footer, Floating Contact)
│   │   └── page.tsx         # Home page
│   ├── components/          # Shared layout & UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingContact.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── Testimonials.tsx
│   │   └── PhotoCollage.tsx
│   ├── globals.css          # Global Tailwind CSS styles
│   ├── robots.ts            # SEO Robots config
│   └── sitemap.ts           # Dynamic sitemap generator
├── dictionaries/            # JSON translation files
│   ├── ka.json              # Georgian translations
│   ├── en.json              # English translations
│   └── ru.json              # Russian translations
├── lib/
│   ├── blogData.tsx         # Static blog posts & content data
│   ├── dictionary.ts        # Dynamic dictionary loader (`getDictionary(lang)`)
│   └── i18n.ts              # Supported locales & default locale configuration
├── middleware.ts            # Next.js middleware for language detection & rewrite
├── public/                  # Static assets (images, logos, icons)
├── package.json
└── tsconfig.json
```

---

## 3. Key Development Principles & Coding Standards

1. **Multilingual Consistency**:
   - Whenever adding new UI text, always add corresponding keys to all three dictionary files: `dictionaries/ka.json`, `dictionaries/en.json`, and `dictionaries/ru.json`.
   - Never hardcode user-facing text inside components if it should be localized.
   - Use `getDictionary(lang)` in Server Components or pass dictionary props to Client Components.

2. **Component Architecture**:
   - Use Server Components by default for better performance and SEO.
   - Mark components with `'use client'` only when they require interactivity, React hooks (`useState`, `useEffect`, `usePathname`), or browser events.

3. **Styling & Design Guidelines**:
   - Follow clean, modern, high-contrast visual design.
   - Ensure mobile responsiveness for all viewports (mobile, tablet, desktop).
   - Use Tailwind CSS utility classes.

4. **SEO & Metadata**:
   - Maintain complete `generateMetadata` exports on pages.
   - Ensure localized OpenGraph images, titles, and descriptions.

---

## 4. Useful Commands

- **Start Dev Server**: `npm run dev` (starts on `http://localhost:3000`)
- **Build Project**: `npm run build`
- **Lint Code**: `npm run lint`
