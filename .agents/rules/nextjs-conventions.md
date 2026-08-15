---
name: nextjs-conventions
trigger: always_on
---

# Next.js & UI Conventions

1. **Turbopack & App Router**:
   - Use standard Next.js 16 App Router routing in `app/[lang]/`.
   - Use Next.js `<Image />` component with proper `alt` attributes and aspect ratios where appropriate.
   - Use Next.js `<Link />` for client-side navigation, ensuring `href` includes `/${lang}` prefix.

2. **Tailwind CSS v4**:
   - Use existing Tailwind v4 utilities.
   - Ensure responsive classes (`sm:`, `md:`, `lg:`, `xl:`).

3. **Performance & Clean Code**:
   - Prefer Server Components where state/hooks are not needed.
   - Keep components modular and reusable in `app/components/`.
