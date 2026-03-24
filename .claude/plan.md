# Plan: Upcoming Courses Page + CTAs + Logo Grid

## 1. Create `/src/pages/courses.astro` — Upcoming Virtual Courses page
- Course listings pulled from a JSON data file
- Each course card shows: title, date/time, format, duration, price, description, who it's for, what's covered, instructor, spots remaining
- "Enroll Now" button per course linking to a Stripe Checkout URL
- Add "Courses" to the nav (under Training dropdown alongside General AI, Microsoft, Providers)

## 2. Create `/content/pages/courses.json` — Course data file
- Array of course objects with all the detailed fields
- Each course has a `stripeUrl` field for the Stripe Checkout link
- Start with placeholder/example courses you can edit
- Past courses auto-hide (or show as "Completed") based on date

## 3. Update CTAs on each training page (General AI, Microsoft, Provider)
- Replace the single "Book a Discovery Call" CTA section with dual CTAs:
  - **"Enroll in a Course →"** → links to `/courses`
  - **"Bring Us On Site →"** → links to the Outlook booking page
- Apply to: `general-ai-training.astro`, `microsoft-ai-training.astro`, `ambient-ai-training.astro`

## 4. Finish logo grid on homepage
- Replace text-based "Trusted Partners" section with logo image grid
- Use renamed logos from `public/images/logos/`
- Responsive grid layout

## 5. Add nav link
- Add "Courses" to the Training dropdown in `BaseLayout.astro`

## Files to create:
- `src/pages/courses.astro`
- `content/pages/courses.json`

## Files to modify:
- `src/layouts/BaseLayout.astro` (nav dropdown)
- `src/pages/general-ai-training.astro` (dual CTAs)
- `src/pages/microsoft-ai-training.astro` (dual CTAs)
- `src/pages/ambient-ai-training.astro` (dual CTAs)
- `src/pages/index.astro` (logo grid)
