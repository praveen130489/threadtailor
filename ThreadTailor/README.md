# Thread & Tailor — PRD Handoff

## Stack
- Static prototype (HTML/CSS/JS) for storefront IA and CRO patterns
- Node/Express API scaffold in `services/api`
- Ready to upgrade to Next.js or headless CMS

## IA & Navigation
- Header: Home, Products, Promotional Offers, Featured, Celebrity Collections, Blog, Help, My Account
- Footer: Shop, Help, Account

## Pages
- Home: Promise+Proof hero, categories, social proof tiers, UGC, celebrity feature
- Category: `/products/index.html`
- PDP: `/products/product.html`
- Cart: `/cart/index.html`
- Checkout: `/checkout/index.html`
- Account: `/auth/login.html`, `/auth/signup.html`
- Help/FAQs: `/faqs/index.html`
- Membership: `/membership/index.html`
- Blog: `/blogs/index.html`
- Featured, Celebrity, Offers

## CRO Elements
- Free-shipping progress bar (sticky)
- Limited-time banner with countdown
- Price anchoring with 3-pack, Most Popular
- Urgency cues (viewers, low stock)
- Social proof layering and filters
- Mobile sticky checkout CTA

## SEO
- Product and FAQ schema
- Clean URLs and meta descriptions
- Image optimization with WebP/AVIF placeholders

## Analytics
- dataLayer hooks for: product_click, add_to_cart, begin_checkout, purchase
- Session recording hooks placeholder

## AI Try-On
- Camera overlay modal prototype in `/js/tryon.js`
- Upgrade path: MediaPipe or third-party SDK

## Membership
- Free vs Premium tiers (copy and IA)
- API placeholder for membership check

## Performance Targets
- Lazy-load UGC images
- Preloads; progressive enhancement

## 90-Day CRO Roadmap (abridged)
- Weeks 1–2: Establish baseline analytics, heatmaps, funnel, QA
- Weeks 3–6: A/B test hero copy/CTAs, shipping messaging, progress bar variants
- Weeks 7–10: PDP image order, price anchoring variants, try-on prompts, review density
- Weeks 11–13: Checkout field minimization, EDD variants, payment button labels
- Continuous: Offer banners, UGC prompts, referral incentives

## Dev Notes
- Run API: `cd services/api && npm run dev`
- Serve static: use any static server (e.g., `npx serve .`)