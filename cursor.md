# Portfolio Site — Cursor Blueprint

## Stack
- **Framework:** Next.js 14 (App Router) — stable, AI-friendly, widely supported
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript (optional, can use plain JS)
- **Hosting:** Vercel (free tier)
- **Forms:** Resend (free tier, 100 emails/day) for contact form
- **Bot Protection:** Cloudflare Turnstile (free, CAPTCHA alternative — no charges ever)

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx               # Main single-page portfolio
│   └── api/
│       └── contact/
│           └── route.ts       # Contact form API route
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx           # Project cards with screenshot + live link
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── screenshots/           # Drop your project screenshots here
├── .env.local                 # Never commit this
├── .env.example               # Safe to commit, shows required keys
├── .gitignore
└── cursor.md                  # This file
```

---

## Pages / Sections (Single Page Layout)

### 1. Hero
- Your name, big and clear
- One-liner: e.g. "Full-Stack Developer — Next.js, React, Tailwind"
- CTA buttons: "View My Work" (scrolls down) + "Contact Me"

### 2. Projects
- Card grid (2 columns on desktop, 1 on mobile)
- Each card has:
  - Screenshot image (from `/public/screenshots/`)
  - Project name
  - Short 1-line description
  - Live site link (opens in new tab)
- No backend needed — just edit a `projects.ts` data file to add/remove projects

### 3. About
- Short paragraph about yourself
- Skills list: Next.js, React, Tailwind, Vercel, JavaScript, etc.
- Keep it human, not corporate

### 4. Contact
- Simple form: Name, Email, Message
- Protected by Cloudflare Turnstile (stops bots, free forever, no usage charges)
- Sends email via Resend API (free tier: 100 emails/day, 3,000/month)
- API route handles submission server-side

### 5. Footer
- Your name + year
- Optional: GitHub link, LinkedIn link

---

## .env.local (never commit this file)

```
RESEND_API_KEY=your_resend_api_key_here
TURNSTILE_SECRET_KEY=your_cloudflare_turnstile_secret_here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_cloudflare_turnstile_site_key_here
```

## .env.example (safe to commit — no real values)

```
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
```

---

## Bot / Spam Protection Plan

| Threat | Solution | Cost |
|---|---|---|
| Contact form spam | Cloudflare Turnstile | Free forever |
| API abuse | Rate limiting via Vercel Edge middleware | Free |
| Email floods | Resend free tier caps at 100/day naturally | Free |

**Never expose:**
- `RESEND_API_KEY` — server-side only, never use in client components
- `TURNSTILE_SECRET_KEY` — server-side only
- Only `NEXT_PUBLIC_TURNSTILE_SITE_KEY` goes in the browser (that's safe by design)

---

## Rate Limiting (simple, no extra services)

Add a basic rate limiter in `/app/api/contact/route.ts` using an in-memory map to limit submissions per IP to ~3 per hour. No Redis, no paid services needed for a portfolio site.

---

## .gitignore — make sure these are included

```
.env.local
.env*.local
node_modules/
.next/
```

---

## Setup Steps (in order)

1. `npx create-next-app@14 my-portfolio` — choose App Router, Tailwind yes
2. Create `.env.local` and add your keys (never commit)
3. Sign up at **resend.com** — free, get API key, verify your domain or use their test domain to start
4. Sign up at **cloudflare.com** → Turnstile → create a widget → get site key + secret key
5. Drop your project screenshots in `/public/screenshots/`
6. Edit `projects.ts` with your project names, descriptions, and Vercel URLs
7. `vercel deploy` — done

---

## What You're NOT Using (and why)

- ❌ No database — not needed, nothing to get hacked or charged for
- ❌ No auth — not needed for a portfolio
- ❌ No paid analytics — use Vercel's built-in analytics (free)
- ❌ No image optimization service — Next.js handles it natively
- ❌ No Redis — overkill for a portfolio, in-memory rate limiting is fine
- ❌ No paid form services — Resend free tier is more than enough

---

## Versions to Use

```json
{
  "next": "14.2.x",
  "react": "18.x",
  "tailwindcss": "3.x",
  "typescript": "5.x",
  "resend": "3.x",
  "@marsidev/react-turnstile": "1.x"
}
```

---

## Quick Customization Checklist

- [ ] Swap your name in `Hero.tsx`
- [ ] Update your one-liner / tagline
- [ ] Add projects to `projects.ts` data file
- [ ] Drop screenshots in `/public/screenshots/`
- [ ] Update About section with your real bio and skills
- [ ] Add your social links in Footer
- [ ] Set up `.env.local` with real keys
- [ ] Deploy to Vercel
