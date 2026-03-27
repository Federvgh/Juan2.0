# Implementation Plan — Juan Pablo Tazzioli Portfolio (Juan2.0)

## Overview

Fully static Next.js portfolio (App Router, `output: "export"`) for an industrial designer specializing in automotive premium. Three pages (Work, About, Contact), 9 projects with block-based content, custom i18n with path-based routing, monochromatic design with Inter font, Framer Motion animations.

Deploy target: AWS Amplify (juanpablotazzioli.com). No CMS, no forms, no dark mode, no Vercel.

---

## Phase 0: Project Initialization (S — ~1h)
**Dependencies:** None  
**Goal:** Bootable Next.js project with all tooling configured

### Files to create

```
package.json
pnpm-workspace.yaml          (if needed — probably not for single project)
tsconfig.json
next.config.ts
tailwind.config.ts
postcss.config.mjs
src/app/globals.css
src/app/layout.tsx            (minimal root — redirects to /en/work)
public/.gitkeep
```

### Steps

1. **Initialize Next.js project:**
   ```
   pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
   ```
   Then strip all boilerplate content.

2. **Configure `next.config.ts`:**
   - `output: "export"`
   - `images: { unoptimized: false }` (will be handled by next-export-optimize-images)
   - `trailingSlash: true` (AWS Amplify compatibility)

3. **Install core dependencies:**
   ```
   pnpm add framer-motion
   pnpm add -D next-export-optimize-images sharp
   ```

4. **Configure Inter font (local):**
   - Copy `InterVariable.woff2` and `InterVariable-Italic.woff2` from `PAGINA 2026 JUAN/04-FONTS/Inter-4.1/web/` to `src/fonts/`
   - Register with `next/font/local` in root layout

5. **Configure Tailwind:**
   - Extend theme with design tokens from `.claude/rules/design-system.md`:
     - `colors.background: '#FFFFFF'`
     - `colors.foreground: '#000000'`
     - `colors.muted: '#B0B0B0'`
     - `colors.border: '#E5E5E5'`
     - `colors.link: '#0000EE'`
   - Font family: `inter: ['var(--font-inter)']`

6. **Configure `next-export-optimize-images`:**
   - Add to `next.config.ts` via `withExportImages` wrapper
   - Configure for AVIF + WebP output
   - Set responsive sizes: `[640, 750, 828, 1080, 1200, 1920]`

7. **Set up globals.css:**
   - Tailwind directives
   - Reset base styles
   - Font-face if needed (or rely on next/font)

8. **Update `.gitignore`:**
   - Add `PAGINA 2026 JUAN/` (large source assets, not for git)
   - Keep existing ignores

### Verification
- `pnpm dev` starts without errors
- `pnpm build` completes (static export in `out/`)
- Inter font loads in browser
- Tailwind classes apply correctly

---

## Phase 1: i18n Infrastructure + Root Redirect (S — ~1.5h)
**Dependencies:** Phase 0  
**Goal:** Path-based locale routing works, type-safe translation system in place

### Files to create

```
src/lib/i18n/config.ts          — locale definitions, default locale
src/lib/i18n/dictionaries.ts    — type for dictionary, loader function
src/lib/i18n/en.ts              — English translations (all page content)
src/lib/i18n/get-dictionary.ts  — helper to load dictionary by locale
src/middleware.ts                — redirect / → /en/work (NOTE: middleware doesn't work with static export; use a different approach)
src/app/page.tsx                — root page that does client-side redirect to /en/work OR use meta refresh
src/app/[locale]/layout.tsx     — locale-aware layout wrapper
```

### Architecture Decisions

- **No middleware** (incompatible with `output: "export"`). Root `/` uses a simple `page.tsx` with `<meta http-equiv="refresh" content="0;url=/en/work">` plus a JS redirect fallback.
- **generateStaticParams** in each `[locale]` route returns `[{ locale: 'en' }]` (ES/IT added later by adding to the array).
- **Dictionary type** is a single TypeScript interface. All translations are compile-time checked.
- **Dictionary structure:**
  ```ts
  interface Dictionary {
    nav: { work: string; about: string; contact: string }
    work: { pageTitle: string; projects: Record<ProjectSlug, ProjectTranslation> }
    about: { title: string; bio: string; experience: ExperienceEntry[]; education: ...; ... }
    contact: { title: string; intro: string; email: string; ... }
    seo: { ... }
  }
  ```

### Verification
- Navigating to `/` redirects to `/en/work`
- `/en/work` renders (even if empty)
- TypeScript catches missing translation keys
- `pnpm build` generates `/en/work/index.html`, `/en/about/index.html`, etc.

---

## Phase 2: Data Model + Project Definitions (S — ~1.5h)
**Dependencies:** Phase 1  
**Goal:** All 9 projects defined with type-safe block system, images organized

### Files to create

```
src/lib/data/types.ts           — Project, Block, and related types
src/lib/data/projects.ts        — array of all 9 project definitions
src/lib/data/navigation.ts      — site navigation structure
```

### Type System

```ts
// Block discriminated union
type Block =
  | { _type: 'image-full'; _key: string; src: string; alt: string; caption?: string }
  | { _type: 'image-pair'; _key: string; left: { src: string; alt: string }; right: { src: string; alt: string }; caption?: string }
  | { _type: 'video'; _key: string; src: string; poster?: string; caption?: string }
  | { _type: 'text'; _key: string; titleKey?: string; bodyKey: string }

// Project definition
interface Project {
  slug: string
  order: number
  thumbnail: string
  titleKey: string          // references i18n key
  subtitleKey: string       // references i18n key
  descriptionKey: string
  contributionKey: string
  year: string
  blocks: Block[]
  video?: string            // optional video path
}
```

### Image Organization

Copy project thumbnails from source to:
```
public/images/work/thumbnails/01-bow.jpg
public/images/work/thumbnails/02-bugatti.jpg
... (09 files, named by project slug)

public/images/work/speaker/hero.jpg
public/images/work/speaker/01.jpg
... (per-project directories for detail images)

public/images/about/profile.jpg
public/images/about/in-process.jpg

public/videos/bugatti.mp4
public/videos/speaker.mp4
public/videos/beyonca.mp4
public/videos/pagani.mp4
```

### 9 Projects (from mockup)

| # | Slug | Title | Subtitle |
|---|------|-------|----------|
| 1 | bow-nautical | BOW Nautical Timepiece Concept | Luxury nautical-inspired mechanical watch |
| 2 | bugatti-steering | Bugatti Millenium Steering Wheel | Luxury steering wheel concept |
| 3 | chopard-beyonca | Chopard Clock for BeyonCa | Luxury interior timepiece |
| 4 | beyonca-steering | BeyonCa Steering Wheel | Premium EV interior interface |
| 5 | speaker | Speaker Concept | Bang & Olufsen x Swarovski |
| 6 | pagani-steering | Pagani Steering Wheel Concept | High-power luxury interface |
| 7 | levc-insignia | LEVC Brand Insignia Redesign | Production-ready exterior emblem |
| 8 | beyonca-knob | BeyonCa Control Knob | Premium input interface |
| 9 | signage | Modular Urban Signage System | Modular-system urban/commercial concept |

Speaker project gets fully populated blocks first. Others get thumbnail + minimal data, populated incrementally.

### Verification
- `import { projects } from '@/lib/data/projects'` compiles
- Each project has a valid slug, thumbnail reference, and at least one block
- TypeScript exhaustiveness check: adding a new `_type` to Block causes compile error if not handled

---

## Phase 3: Core Layout + Navigation (M — ~3h)
**Dependencies:** Phase 1, Phase 2  
**Goal:** Header, hamburger menu overlay, page shell, all navigation working

### Files to create

```
src/components/layout/Header.tsx          — fixed header with name + section label
src/components/layout/HamburgerButton.tsx — animated hamburger ↔ X morphing
src/components/layout/MenuOverlay.tsx     — fullscreen menu with stagger animation
src/components/layout/LanguageSelector.tsx — EN / ES / IT switcher
src/components/layout/PageTransition.tsx  — AnimatePresence cross-fade wrapper
src/app/[locale]/layout.tsx              — update with Header + PageTransition
src/app/[locale]/template.tsx            — for page transitions (AnimatePresence needs template)
src/lib/hooks/useReducedMotion.ts        — wraps Framer's useReducedMotion
```

### Header Behavior (from mockup analysis)

- **Fixed position**, white background, full width
- **Left:** "JUAN PABLO TAZZIOLI" (bold, uppercase, 14px, link to `/{locale}/work`)
- **Below name:** Current section name in gray (#B0B0B0, smaller text)
- **Right:** Language selector ("EN / ES / IT"), then hamburger icon
- **On Work page:** section shows "Work"
- **On project detail:** section shows project title or "Work"

### Menu Overlay (from mockup)

- **White fullscreen overlay** (z-50)
- **Header persists** but hamburger becomes X
- **Center:** Three items stacked vertically:
  - "Work" / "About" / "Contact"
  - Font size: ~48-56px
  - Current/hover page: black, bold
  - Other pages: #B0B0B0, regular weight
  - **Hover effect:** font-weight transition (400 → 700) + color transition (gray → black), 300ms
- **Stagger animation:** items enter with 100ms delay between them
- **X closes overlay**, returns to current page
- **Language selector visible** in overlay header (same position as normal header)

### Hamburger → X Animation

- Three horizontal lines morph to X
- Middle line fades out
- Top/bottom lines rotate ±45deg
- Duration: 300ms, tween easing

### Page Transitions

- Use `template.tsx` pattern (re-mounts on navigation)
- Framer Motion AnimatePresence with mode="wait"
- Enter: opacity 0→1, y 8→0, duration 300ms
- Exit: opacity 1→0, duration 200ms

### Verification
- Header renders on all pages with correct name and section
- Hamburger opens overlay with smooth animation
- Menu items have hover effect (weight + color transition)
- Clicking menu item navigates and closes overlay
- Language selector shows EN / ES / IT (only EN functional)
- Page transitions animate on navigation
- Mobile: same layout (hamburger always visible, not just mobile)
- Reduced motion: animations disabled

---

## Phase 4: Work Page — Project Grid (M — ~2.5h)
**Dependencies:** Phase 2, Phase 3  
**Goal:** Landing page with 9-project responsive grid

### Files to create

```
src/app/[locale]/work/page.tsx           — Work grid page
src/components/work/ProjectGrid.tsx      — responsive grid container
src/components/work/ProjectCard.tsx      — individual card with hover effect
src/components/ui/OptimizedImage.tsx     — wrapper for next/image with blur placeholder
```

### Grid Layout (from mockup)

- **3 columns** desktop (configurable via prop/constant to 2)
- **2 columns** tablet (md breakpoint)
- **1 column** mobile
- **Gap:** ~24px (gap-6)
- **Max-width:** full page width with horizontal padding (px-6 lg:px-12)
- **No max-width constraint** on the grid itself (images edge-to-edge within padding)

### Project Card (from mockup)

- **Image:** aspect-ratio ~4:3 or natural, object-cover, rounded-none (sharp corners)
- **Below image:** Title (semi-bold, 14-16px, black) + Subtitle (regular, 12-14px, gray)
- **No borders, no shadows at rest**
- **Hover:** scale(1.02) on the entire card, duration 400ms, ease
- **layoutId** on image for shared element transition to project detail page

### Image Optimization

- Thumbnails served through `next-export-optimize-images`
- Blur placeholder generated at build time
- Responsive srcset for different viewport widths

### Verification
- Grid shows all 9 projects in correct order
- 3/2/1 column layout at desktop/tablet/mobile
- Hover animation smooth (scale 1.02, 400ms)
- Images load with blur-up effect
- Clicking card navigates to `/en/work/[slug]`
- `generateStaticParams` generates all locale+slug combinations
- `pnpm build` output includes all 9 project pages

---

## Phase 5: Project Detail Page — Block Renderer (L — ~4h)
**Dependencies:** Phase 4  
**Goal:** Speaker project fully rendered with all block types working

### Files to create

```
src/app/[locale]/work/[slug]/page.tsx       — project detail page
src/components/project/BlockRenderer.tsx     — maps block _type to component
src/components/project/ImageFullBlock.tsx    — full-width image block
src/components/project/ImagePairBlock.tsx    — side-by-side images
src/components/project/VideoBlock.tsx        — autoplay video with IntersectionObserver
src/components/project/TextBlock.tsx         — text section (title + body)
src/components/project/ProjectHero.tsx       — hero section with title + subtitle + description
src/components/project/SwaroskiLogo.tsx      — (Speaker specific — Swarovski collaboration logo if needed)
```

### Project Detail Layout (from Speaker mockup)

1. **Project title area:**
   - Title large (but not enormous — proportional)
   - Subtitle / collaboration line below
   - Description paragraph
   - "My contribution" section

2. **Block sequence:** rendered in order from project's `blocks` array

3. **Block types:**

   **image-full:** Full-bleed or max-width image, optional caption below
   
   **image-pair:** Two images side by side (50/50), stacks to vertical on mobile, optional caption
   
   **video:** HTML5 video element
   - Autoplay when in viewport (IntersectionObserver, threshold 0.5)
   - Pause when out of viewport
   - Muted, loop, playsInline
   - No visible controls (premium feel)
   - Black background for the video container
   - Poster image optional
   
   **text:** Section with optional title + body text
   - Used for "Process" description, additional context

4. **Bottom of page:** Optional — link to next project or back to grid

### Block Renderer Pattern

```ts
function BlockRenderer({ block }: { block: Block }) {
  switch (block._type) {
    case 'image-full': return <ImageFullBlock {...block} />
    case 'image-pair': return <ImagePairBlock {...block} />
    case 'video': return <VideoBlock {...block} />
    case 'text': return <TextBlock {...block} />
    default: {
      const _exhaustive: never = block
      return null
    }
  }
}
```

### Scroll Reveal Animations

- Each block enters with: opacity 0→1, y 20→0, duration 500ms
- Stagger between consecutive blocks: 100ms
- `viewport={{ once: true, margin: "-100px" }}`
- Respect useReducedMotion

### layoutId Transition (thumbnail → hero)

- ProjectCard image has `layoutId={`project-${slug}`}`
- ProjectHero image has matching `layoutId`
- Framer Motion auto-animates the shared element transition
- **Note:** This requires careful testing with static export — may need fallback to simple fade if layoutId doesn't work well with page transitions

### Verification
- Speaker project renders all blocks in correct order
- Image-full displays full width
- Image-pair shows side by side on desktop, stacked on mobile
- Video autoplays when scrolled into view, pauses when out
- Video has no visible controls
- Text blocks render with correct typography
- Scroll reveal animations work
- Other 8 projects render at minimum their hero/title (even if blocks are sparse)
- `pnpm build` generates all 9 project detail pages

---

## Phase 6: About Page (M — ~2.5h)
**Dependencies:** Phase 3  
**Goal:** Full CV page matching mockup design

### Files to create

```
src/app/[locale]/about/page.tsx
src/components/about/ProfileSection.tsx    — photo + bio (2-col layout)
src/components/about/ExperienceSection.tsx — work experience timeline
src/components/about/EducationSection.tsx  — education list
src/components/about/LanguagesSection.tsx  — languages list
src/components/about/FocusSection.tsx      — focus areas
src/components/about/InProcessSection.tsx  — current work photo + text
```

### Layout (from mockup)

1. **Top section (2 columns on desktop, stacked on mobile):**
   - Left: B&W profile photo (square or portrait crop)
   - Right: Bio headline ("Industrial Designer focused on premium interiors, automotive detail and functional innovation.") + longer bio paragraph

2. **Selected Experience:**
   - Section title left-aligned in gray, content right-aligned (2-col layout)
   - Each entry: Company — Role, dates below in smaller text, description
   - Entries separated by subtle spacing (no timeline dots or lines)

3. **Education:**
   - Same 2-col layout (label left, content right)
   - Degree — Institution, year

4. **Languages:**
   - Spanish — Native
   - English — Fluent (or similar)

5. **Focus:**
   - List of focus areas/skills

6. **In Process:**
   - Full-width or large image of Juan working
   - Brief text about current pursuits

### Sections use scroll-reveal animation (fade-in + stagger)

### Verification
- Profile photo + bio render correctly
- Experience section shows all entries with correct formatting
- Education, Languages, Focus sections present
- In Process image loads
- Responsive: 2-col → 1-col on mobile
- All text comes from i18n dictionary (EN)

---

## Phase 7: Contact Page (S — ~1h)
**Dependencies:** Phase 3  
**Goal:** Simple contact info page matching mockup

### Files to create

```
src/app/[locale]/contact/page.tsx
src/components/contact/ContactInfo.tsx
```

### Layout (from mockup)

- Centered content, generous whitespace
- "Contact" title
- Intro paragraph: "I am open to new opportunities, freelance collaborations and design-related conversations across automotive, product and premium interior design."
- **Email:** label + mailto link (juanpablotazzioli@gmail.com) in link color (#0000EE)
- **LinkedIn:** label + link
- **Location:** Valencia, Spain
- **PDF Portfolio:** download link

### Verification
- Page renders with all contact info
- Email link opens mailto
- LinkedIn link opens in new tab
- PDF download link works (placeholder OK if PDF not yet available)
- Layout is centered and minimal

---

## Phase 8: SEO + Metadata + Analytics (M — ~2h)
**Dependencies:** Phases 4-7  
**Goal:** Complete SEO setup, structured data, analytics scripts

### Files to create/modify

```
src/app/[locale]/layout.tsx      — update with global metadata
src/app/[locale]/work/page.tsx   — add page-specific metadata
src/app/[locale]/work/[slug]/page.tsx — add per-project metadata + structured data
src/app/[locale]/about/page.tsx  — add metadata
src/app/[locale]/contact/page.tsx — add metadata
src/lib/seo/metadata.ts         — helper functions for generating metadata
src/lib/seo/structured-data.ts  — Person schema + CreativeWork schema generators
src/components/analytics/GoogleAnalytics.tsx  — GA4 script (loaded after hydration)
src/components/analytics/MicrosoftClarity.tsx — Clarity script
src/app/sitemap.ts               — sitemap generator (or static file)
src/app/robots.ts                — robots.txt generator (or static file)
public/robots.txt                — static robots.txt (if not using generator)
public/sitemap.xml               — generated at build time
```

### Structured Data

- **Person schema** (global): name, jobTitle, url, sameAs (LinkedIn), image
- **CreativeWork** (per project): name, description, image, creator, dateCreated

### Open Graph

- Per-page og:title, og:description, og:image
- og:type: website (work), article (project detail), profile (about)

### hreflang

- Add hreflang link tags for future ES/IT support
- `<link rel="alternate" hreflang="en" href="https://juanpablotazzioli.com/en/work/" />`

### Analytics

- GA4 and Clarity loaded via `<Script strategy="afterInteractive" />`
- Tracking IDs from environment variables (not hardcoded)
- Google Search Console verification via meta tag or DNS

### Verification
- View page source: structured data JSON-LD present
- OG tags render correctly (test with opengraph.xyz or similar)
- robots.txt accessible at /robots.txt
- sitemap.xml lists all pages with correct URLs
- GA4 loads in production build (check network tab)
- Lighthouse SEO score 90+

---

## Phase 9: Video Compression + Asset Pipeline (S — ~1.5h)
**Dependencies:** Phase 5 (videos need to be placed for VideoBlock)  
**Goal:** All videos compressed and ready for production

### Steps

1. **Compress videos with ffmpeg:**
   ```bash
   # For each video:
   ffmpeg -i "input.mp4" -c:v libx264 -crf 28 -preset slow \
     -c:a aac -b:a 128k -movflags +faststart \
     -vf "scale=1920:-2" -maxrate 5M -bufsize 10M \
     "output.mp4"
   ```
   Target: each video under 30MB

2. **Videos to compress:**
   - `bugatti con sonido.mp4` (150MB → target ~20MB)
   - `speaker final.mp4` (65MB → target ~15MB)
   - `video beyonca.mp4` (42MB → target ~12MB)
   - `video pagani.mp4` (67MB → target ~15MB)

3. **Place compressed videos** in `public/videos/`

4. **Generate poster frames** from each video (first meaningful frame)

### Verification
- All videos under 30MB
- Videos play smoothly in VideoBlock component
- Poster images show before video loads
- No audio (muted attribute, but also consider stripping audio track in compression)

---

## Phase 10: Polish + Animations + Performance (M — ~3h)
**Dependencies:** All previous phases  
**Goal:** Production-ready quality, all animations tuned, responsive verified

### Tasks

1. **Animation audit:**
   - Verify all scroll-reveal animations fire correctly
   - Verify page transitions feel smooth
   - Test layoutId transition (grid → detail)
   - Verify useReducedMotion disables all motion
   - Check animation performance (no layout thrash, only composite properties)

2. **Responsive audit:**
   - Test at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px, 1440px, 1920px
   - Verify grid columns: 1/2/3 at correct breakpoints
   - Verify menu overlay works on all sizes
   - Verify image sizing and aspect ratios

3. **Performance optimization:**
   - Verify image optimization output (AVIF + WebP generated)
   - Check bundle size (`pnpm build` output)
   - Verify no large dependencies sneaked in
   - Lazy load below-fold images (should be automatic with next/image)
   - Verify font loading (no FOUT/FOIT with local Inter)

4. **Accessibility:**
   - All images have alt text
   - Menu overlay has focus trap
   - Hamburger button has aria-label
   - Skip-to-content link
   - Color contrast (black on white = fine, gray on white = verify)
   - Keyboard navigation works for menu

5. **Cross-browser:**
   - Chrome, Safari, Firefox
   - iOS Safari (especially video autoplay — requires muted + playsInline)

### Verification
- Lighthouse: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+
- No console errors
- All pages render without hydration mismatches
- Videos autoplay on iOS Safari

---

## Phase 11: Build + Deploy to AWS Amplify (S — ~1.5h)
**Dependencies:** Phase 10  
**Goal:** Site live at juanpablotazzioli.com

### Steps

1. **Final build check:**
   ```bash
   pnpm build
   ```
   Verify `out/` directory structure has all expected files.

2. **AWS Amplify configuration:**
   - `amplify.yml` build spec:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - corepack enable
             - pnpm install --frozen-lockfile
         build:
           commands:
             - pnpm build
       artifacts:
         baseDirectory: out
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
           - .next/cache/**/*
     ```
   - Environment variables: GA4_ID, CLARITY_ID (via Amplify console)

3. **Custom domain setup:**
   - juanpablotazzioli.com already on Route 53
   - Configure Amplify custom domain
   - SSL certificate (auto-provisioned by Amplify)

4. **Redirects for SPA-like behavior:**
   - Configure custom headers/redirects for trailing slash consistency
   - Root `/` → `/en/work/` redirect (via Amplify redirect rules if meta-refresh isn't enough)

5. **Create `amplify.yml`** in project root

### Verification
- Site accessible at juanpablotazzioli.com
- HTTPS working
- All pages load correctly
- Images serve optimized formats
- Videos play
- Analytics tracking fires
- No mixed content warnings

---

## Dependency Graph

```
Phase 0 (Init)
    │
    ├── Phase 1 (i18n) ──┐
    │                      │
    └── Phase 2 (Data) ───┤
                           │
                     Phase 3 (Layout/Nav)
                           │
              ┌────────────┼────────────┐
              │            │            │
        Phase 4        Phase 6      Phase 7
       (Work Grid)    (About)     (Contact)
              │
        Phase 5
    (Project Detail)
              │
        Phase 9
      (Video Compress)
              │
              └────────────┼────────────┘
                           │
                     Phase 8 (SEO)
                           │
                     Phase 10 (Polish)
                           │
                     Phase 11 (Deploy)
```

### Parallelization Opportunities

- **Phase 1 + Phase 2** can run in parallel (no dependency on each other)
- **Phase 4 + Phase 6 + Phase 7** can all run in parallel (all depend on Phase 3, none on each other)
- **Phase 9** (video compression) can run in parallel with Phase 6, 7, 8 (independent task)
- **Phase 8** (SEO) can start once any page exists but is best done after all pages exist

---

## Complete File Tree

```
Juan2.0/
├── amplify.yml
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── images/
│   │   ├── work/
│   │   │   ├── thumbnails/
│   │   │   │   ├── bow-nautical.jpg
│   │   │   │   ├── bugatti-steering.jpg
│   │   │   │   ├── chopard-beyonca.jpg
│   │   │   │   ├── beyonca-steering.jpg
│   │   │   │   ├── speaker.jpg
│   │   │   │   ├── pagani-steering.jpg
│   │   │   │   ├── levc-insignia.jpg
│   │   │   │   ├── beyonca-knob.jpg
│   │   │   │   └── signage.jpg
│   │   │   ├── speaker/        (detail images)
│   │   │   ├── bugatti-steering/
│   │   │   └── ... (other project directories)
│   │   └── about/
│   │       ├── profile.jpg
│   │       └── in-process.jpg
│   └── videos/
│       ├── bugatti.mp4
│       ├── speaker.mp4
│       ├── beyonca.mp4
│       └── pagani.mp4
├── src/
│   ├── fonts/
│   │   ├── InterVariable.woff2
│   │   └── InterVariable-Italic.woff2
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx              (root — html/body, font class)
│   │   ├── page.tsx                (redirect to /en/work)
│   │   └── [locale]/
│   │       ├── layout.tsx          (locale context, Header, metadata)
│   │       ├── template.tsx        (page transition wrapper)
│   │       ├── work/
│   │       │   ├── page.tsx        (project grid)
│   │       │   └── [slug]/
│   │       │       └── page.tsx    (project detail)
│   │       ├── about/
│   │       │   └── page.tsx
│   │       └── contact/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── HamburgerButton.tsx
│   │   │   ├── MenuOverlay.tsx
│   │   │   ├── LanguageSelector.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── work/
│   │   │   ├── ProjectGrid.tsx
│   │   │   └── ProjectCard.tsx
│   │   ├── project/
│   │   │   ├── BlockRenderer.tsx
│   │   │   ├── ImageFullBlock.tsx
│   │   │   ├── ImagePairBlock.tsx
│   │   │   ├── VideoBlock.tsx
│   │   │   ├── TextBlock.tsx
│   │   │   └── ProjectHero.tsx
│   │   ├── about/
│   │   │   ├── ProfileSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── LanguagesSection.tsx
│   │   │   ├── FocusSection.tsx
│   │   │   └── InProcessSection.tsx
│   │   ├── contact/
│   │   │   └── ContactInfo.tsx
│   │   ├── ui/
│   │   │   └── OptimizedImage.tsx
│   │   └── analytics/
│   │       ├── GoogleAnalytics.tsx
│   │       └── MicrosoftClarity.tsx
│   └── lib/
│       ├── i18n/
│       │   ├── config.ts
│       │   ├── dictionaries.ts
│       │   ├── en.ts
│       │   └── get-dictionary.ts
│       ├── data/
│       │   ├── types.ts
│       │   ├── projects.ts
│       │   └── navigation.ts
│       ├── seo/
│       │   ├── metadata.ts
│       │   └── structured-data.ts
│       └── hooks/
│           └── useReducedMotion.ts
```

---

## Size Summary

| Phase | Size | Est. Hours | Can Parallel With |
|-------|------|------------|-------------------|
| 0. Init | S | 1h | — |
| 1. i18n | S | 1.5h | Phase 2 |
| 2. Data Model | S | 1.5h | Phase 1 |
| 3. Layout/Nav | M | 3h | — |
| 4. Work Grid | M | 2.5h | Phase 6, 7 |
| 5. Project Detail | L | 4h | — |
| 6. About | M | 2.5h | Phase 4, 7 |
| 7. Contact | S | 1h | Phase 4, 6 |
| 8. SEO | M | 2h | Phase 9 |
| 9. Video Compress | S | 1.5h | Phase 6, 7, 8 |
| 10. Polish | M | 3h | — |
| 11. Deploy | S | 1.5h | — |
| **Total** | | **~25h** | |

**Critical path:** 0 → 1 → 3 → 4 → 5 → 10 → 11 (~16h)

With parallelization, realistic calendar time: **~18-20h** of focused work.

---

## Risk Areas + Mitigations

1. **`next-export-optimize-images` compatibility with latest Next.js:**  
   Mitigation: Test in Phase 0. Fallback: use `next-image-export-optimizer` (requires component wrapper) or unoptimized images with manual Sharp script.

2. **layoutId transitions with static export:**  
   Mitigation: Test early in Phase 5. Fallback: simple cross-fade instead of shared element.

3. **Video autoplay on iOS Safari:**  
   Mitigation: Must have `muted`, `playsInline`, `autoPlay` attributes. Test on real device.

4. **Large video files on AWS Amplify:**  
   Mitigation: Compress aggressively in Phase 9. Consider CloudFront CDN if load times are too slow.

5. **i18n with static export — no middleware:**  
   Mitigation: Use meta-refresh + JS redirect from root. Amplify redirect rules as backup.
