Good — I've captured both references. Here's your complete mega prompt:

---

## 🏠 PARMAR PROPERTIES — MEGA PROMPT FOR STITCH

---

### a. PROJECT OVERVIEW

**Client:** Parmar Properties — a Mumbai-based luxury real estate brokerage firm specialising in South Mumbai residential inventory (Byculla, Parel, Lalbaug, Prabhadevi, NM Joshi Marg).

**Goal:** Build a full-featured, production-ready real estate inventory management website — functionally modelled on 99acres.com — that allows users to browse, search, filter, and enquire about properties, and allows admins to manage listings.

**Pages Required:**
1. Homepage (hero search, featured listings, developer spotlights, stats, why-choose-us, contact strip)
2. Property Listings Page (grid + list view toggle, filters sidebar)
3. Single Property Detail Page (image gallery, specs, map, EMI calculator, contact agent)
4. Developer/Builder Profile Page
5. About Us Page
6. Contact Us Page
7. Login / Register Pages
8. Add Property (Admin Listing Form)
9. User Dashboard (My Listings, Enquiries, Saved Properties)

**Core Features:**
- Advanced property search bar (location, type, budget, BHK) — persistent in header
- Property cards with price in ₹ Cr, BHK, sq ft, badge (Featured / For Sale / New)
- Verified badge system on listings
- Photo gallery with YouTube video embed support
- EMI calculator widget
- WhatsApp enquiry CTA button
- Developer/builder spotlight carousel
- Filter sidebar: property type, price range slider, BHK, possession status, amenities
- Breadcrumb navigation on all inner pages
- Mobile-responsive with bottom nav bar on mobile

---

### b. VISUAL LANGUAGE (from design references)

**Color Tokens — Parmar Properties brand palette:**

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#C8972B` | Gold/amber — CTAs, active states, badges, accents |
| `--primary-dark` | `#A07820` | Hover states on buttons |
| `--primary-light` | `#F5E6C0` | Tinted backgrounds, tag fills |
| `--surface-dark` | `#1A1A2E` | Dark navy — hero section, footer background |
| `--surface-mid` | `#16213E` | Navbar background |
| `--surface-card` | `#FFFFFF` | Property cards, modals |
| `--text-primary` | `#1C1C1C` | Body text |
| `--text-secondary` | `#666666` | Subtext, metadata |
| `--text-inverse` | `#FFFFFF` | Text on dark backgrounds |
| `--border` | `#E8E8E8` | Card borders, dividers |
| `--success` | `#2ECC71` | Verified badge, available status |
| `--bg-light` | `#F7F7F9` | Page background, alternating sections |

**Typography:**
- **Primary font:** `Poppins` (Google Fonts) — used for headings and UI
- **Secondary font:** `Inter` — used for body text, metadata, form labels
- **H1:** Poppins 700, 48px, line-height 1.2, color `--text-inverse` (on hero)
- **H2:** Poppins 600, 32px, color `--text-primary`
- **H3:** Poppins 600, 20px, color `--text-primary`
- **Body:** Inter 400, 15px, color `--text-secondary`
- **Price:** Poppins 700, 22px, color `--primary`
- **Badge/Tag:** Inter 600, 11px uppercase, letter-spacing 0.08em

**Layout Patterns (99acres-style):**
- Max content width: `1280px`, centered with `auto` margins
- Section vertical padding: `64px 0`
- Card border-radius: `12px`
- Navbar height: `64px` fixed, with box-shadow on scroll
- Sidebar filters: `280px` fixed width, sticky on desktop
- Property grid: 3 columns desktop → 2 tablet → 1 mobile
- Generous whitespace between sections; subtle `#F7F7F9` alternating section backgrounds

**Aesthetic Mood:** Clean, trustworthy, data-rich portal aesthetic (like 99acres) — NOT minimalist. Dense but organised. Gold accents on white/light-grey surfaces with a dark navy header/footer. Cards are slightly elevated with `box-shadow: 0 2px 12px rgba(0,0,0,0.08)`.

**Component Styles:**

*Buttons:*
- Primary CTA: `background: #C8972B`, `color: #fff`, `border-radius: 8px`, `padding: 12px 28px`, `font: Poppins 600 15px`, hover `background: #A07820`, transition 200ms
- Secondary/Ghost: `border: 2px solid #C8972B`, `color: #C8972B`, transparent bg, same radius
- Pill/Tag buttons: `background: #F5E6C0`, `color: #A07820`, `border-radius: 20px`, `padding: 6px 16px`, `font: Inter 600 12px`

*Cards:*
- `background: #fff`, `border-radius: 12px`, `box-shadow: 0 2px 16px rgba(0,0,0,0.07)`, `overflow: hidden`
- Image aspect ratio: 16:9
- "Featured" badge: positioned top-left, `background: #C8972B`, `color: #fff`, `font: Inter 700 11px uppercase`, `padding: 4px 10px`, `border-radius: 0 0 8px 0`

*Navbar:*
- Background: `#16213E`, height 64px, sticky top
- Logo left, nav links center, Login + Add Property CTA right
- Active nav link: `color: #C8972B`, underline 2px `#C8972B`
- On scroll: adds `box-shadow: 0 2px 20px rgba(0,0,0,0.2)`

*Search Bar (hero):*
- Full-width pill container, `background: #fff`, `border-radius: 50px`, `padding: 8px`, `box-shadow: 0 8px 40px rgba(0,0,0,0.18)`
- Contains: City dropdown | Property Type dropdown | Budget dropdown | BHK selector | 🔍 Search button in `#C8972B`
- Below bar: quick filter chips — "2 BHK", "Ready to Move", "New Projects", "Under ₹1 Cr"

*Filter Sidebar:*
- Background `#fff`, `border-radius: 12px`, border `1px solid #E8E8E8`
- Section headers: Poppins 600 14px, `#1C1C1C`, with expand/collapse chevron
- Price range: dual-handle slider in `#C8972B`
- Checkboxes custom-styled with `#C8972B` fill

---

### c. PAGE-BY-PAGE UI PLAN

**1. HOMEPAGE**

- **Sticky Navbar:** Dark navy (`#16213E`), Parmar Properties logo (left), nav links (Home, Properties, Developers, About, Contact), Login + "Post Property" gold CTA button (right)
- **Hero Section:** Full-viewport dark overlay over property image, headline `"Find Your Dream Home in Mumbai"` (Poppins 700 48px white), subline `"South Mumbai's Most Trusted Property Portal"` (Inter 400 18px `#F5E6C0`). Floating white pill search bar below with City / Type / Budget / BHK dropdowns + gold Search button.
- **Stats Bar:** 4-column strip in `#1A1A2E` — `500+ Properties`, `50+ Developers`, `1000+ Happy Families`, `10+ Years Experience` — Poppins 700 32px gold numbers, Inter 14px white labels.
- **Featured Properties Section:** Section heading left-aligned ("Featured Properties"), "View All →" link in gold right. 3-column card grid. Each card: image with badge, property name (H3), location with pin icon, beds/baths/sqft metadata row, price in gold, "Enquire Now" button.
- **Developer Spotlight:** Horizontal scrolling row of developer logo cards (Godrej, Lodha, Rustomjee, Oberoi, Prestige, Piramal) with property count. Background `#F7F7F9`.
- **Why Choose Us:** 2×2 icon grid (Wide Range, Trusted, Easy Financing, Local Expertise). Icon in `#C8972B` circle, H3 heading, 2-line body text.
- **Contact Strip:** Dark `#1A1A2E` full-width band — address, phone, email in 3 columns with icons, inline enquiry form (Name, Phone, Message + Send button).
- **Footer:** 4-column — Logo + tagline | Quick Links | Property Types | Contact Info. Bottom bar with copyright.

**2. PROPERTY LISTINGS PAGE**

- Breadcrumb: Home > Residential Properties
- Left sidebar (280px): Filters — Property Type (checkboxes), Price Range (slider ₹50L–₹50Cr), BHK (toggle pills: 1/2/3/4/5+), Carpet Area, Possession Status, Amenities (checkboxes), Developer (multi-select)
- Right content area: Sort bar (Sort by: Relevance / Price Low-High / Newest), Grid/List toggle icons, result count ("Showing 24 of 86 properties")
- Property grid: 3-col cards with all metadata; List view: horizontal card with larger image left, details right
- Pagination: numbered pages with prev/next, `#C8972B` active page

**3. SINGLE PROPERTY PAGE**

- Photo gallery: full-width hero image, thumbnail strip below, YouTube video embed button overlaid
- Property title, location, price (large Poppins 700 gold), "Verified" badge
- Sticky right sidebar: Contact Agent card (agent photo, name, WhatsApp button, call button, enquiry form)
- Details tabs: Overview | Amenities | Location Map | Similar Properties
- Specs grid: Carpet Area, Floor, Total Floors, Possession, Status, RERA ID
- EMI Calculator widget: loan amount pre-filled from price, interest rate slider, tenure slider → monthly EMI output in gold

**4. USER DASHBOARD**

- Left sidebar nav: My Profile | My Listings | Saved Properties | Enquiries Received | Change Password | Logout
- My Listings table: property thumbnail, name, status toggle (Active/Inactive), views count, enquiries count, Edit / Delete actions
- Enquiries table: sender name, property, date, message preview, Reply button

**5. ADD PROPERTY FORM**

- Multi-step wizard: Step 1 Basic Info → Step 2 Property Details → Step 3 Photos & Video → Step 4 Pricing → Step 5 Review
- Progress bar in `#C8972B` at top
- Clean form layout: full-width text inputs, styled dropdowns, drag-and-drop image upload zone

---

### d. COMPONENT SPECS

**Color tokens** (CSS variables, defined in `:root`):
```css
--primary: #C8972B;
--primary-dark: #A07820;
--primary-light: #F5E6C0;
--navy: #1A1A2E;
--navy-mid: #16213E;
--white: #FFFFFF;
--bg: #F7F7F9;
--text: #1C1C1C;
--text-muted: #666666;
--border: #E8E8E8;
--success: #2ECC71;
--shadow-card: 0 2px 16px rgba(0,0,0,0.07);
--shadow-hero: 0 8px 40px rgba(0,0,0,0.18);
--radius-card: 12px;
--radius-btn: 8px;
--radius-pill: 50px;
```

**Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px

**Icon library:** Lucide Icons (property pin, bed, bath, ruler, phone, whatsapp, heart, share)

**Animations:**
- Card hover: `transform: translateY(-4px)`, `box-shadow` deepens, 200ms ease
- Button hover: background darkens 15%, 150ms ease
- Navbar: `backdrop-filter: blur(12px)` + shadow on scroll
- Page transitions: fade-in 300ms on route change
- Skeleton loaders on card grids while data loads

---

### e. BUILD INSTRUCTIONS FOR STITCH

1. **Bootstrap the project** as a React + Tailwind CSS SPA with React Router v6 for page navigation. Use Poppins and Inter from Google Fonts in the HTML head.

2. **Define all CSS custom properties** from the color token table above in `index.css` under `:root`. Map Tailwind config to use these tokens (`primary`, `navy`, `bg-light` etc.).

3. **Build the Navbar component first** — sticky, dark navy background, logo left, nav links center with gold active state, Login + "Post Property" gold CTA right. Hamburger menu on mobile.

4. **Build the Hero section** — full-viewport background (use a high-quality Mumbai skyline/property image), dark overlay `rgba(26,26,46,0.65)`, white headline + subline, then the floating white pill search bar with 4 dropdowns (City, Property Type, Budget, BHK) and a gold Search button. Below the bar: quick chip filters in `--primary-light` background.

5. **Build the PropertyCard component** — reusable. Props: `image`, `badge`, `title`, `location`, `beds`, `baths`, `area`, `price`, `isFeatured`. Include heart (save) icon top-right, featured badge top-left, gold price, metadata row with Lucide icons.

6. **Build the Featured Properties section** — 3-column responsive grid using PropertyCard. Include section heading + "View All" link.

7. **Build the Stats bar** — dark navy strip with 4 animated counter numbers in gold.

8. **Build the Developer Spotlight section** — horizontally scrollable row of logo cards on `--bg` grey background.

9. **Build the Why Choose Us section** — 2×2 grid with gold icon circles, H3 headings, body copy.

10. **Build the Contact/Footer strip** — dark navy, 3-column contact details + inline form.

11. **Build the Listings Page** — filter sidebar (collapsible on mobile as bottom drawer), sort bar, responsive property grid with list/grid toggle, pagination.

12. **Build the Property Detail Page** — image gallery with thumbnail strip, sticky enquiry sidebar, tabbed details (Overview / Amenities / Map / Similar), EMI calculator widget.

13. **Build Login and Register pages** — centered cards on `--bg` background, social login buttons, gold submit CTA.

14. **Build the Add Property multi-step form** — stepper progress bar at top in gold, form sections per step, review + submit final step.

15. **Build the User Dashboard** — left sidebar nav, main content area with My Listings table and Enquiries table.

16. **Ensure full mobile responsiveness:** sidebar becomes a filter drawer, 3-col grid collapses to 1-col, navbar becomes hamburger, bottom navigation bar on mobile (Home / Search / Add / Saved / Profile).

17. **Use mock JSON data** for all listings (6 featured properties pre-populated with Parmar Properties' real inventory: Monte South, Darshan Promesa, Ruparel Vivanza, Rustomjee Crown, Prestige Jasdan Classic, Bhoomi Simana) with their real prices in ₹ Cr, locations in South Mumbai, BHK configs, and sq ft areas.

---

Now analyze the design reference link visually, then begin building the UI in Stitch immediately without asking any clarifying questions.