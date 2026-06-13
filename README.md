# Dr. Sade Iriah - Personal Brand Website

A luxury, editorial personal brand website for Dr. Sade Iriah, a neuroscientist and performance consultant.

**Domain:** sadeiriah.com

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom design system)
- **CMS:** Sanity
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Testing:** Playwright (E2E)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript check
npm run test:e2e   # Run Playwright tests
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── performance-library/ # Library page
│   └── contact/           # Contact page
├── components/
│   ├── ui/                # Design system components
│   ├── site/              # Header, Footer, Nav
│   ├── sections/          # Page sections
│   └── forms/             # Form components
├── lib/
│   ├── sanity/            # Sanity client & queries
│   └── validations/       # Zod schemas
├── sanity/
│   └── schemas/           # CMS schemas
├── public/
│   ├── images/            # Production images
│   └── textures/          # Grain overlay
└── tests/e2e/             # Playwright tests
```

## Sanity CMS Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Add project ID to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### Running Sanity Studio

The studio is in the `/studio` folder as a standalone app:

```bash
cd studio
cp .env.example .env
# Add your project ID to .env
npm install
npm run dev
```

This opens the studio at http://localhost:3333

### Deploying Studio

You can deploy the studio to Sanity's hosting:

```bash
cd studio
npm run deploy
```

Or deploy to Vercel as a separate project

### Editing Content

The CMS supports:
- **Site Settings:** Logo, email, social links, SEO
- **Home Page:** Hero, sections, CTAs
- **About Page:** Bio, credentials, philosophy
- **Performance Library:** Books, publications, articles, frameworks
- **Services:** Consulting offerings
- **Contact Page:** Form settings, inquiry types
- **Events:** Speaking & workshops (future)

### Adding Library Items

1. Log into Sanity Studio
2. Navigate to "Library Item (Book/Resource)"
3. Click "Create"
4. Fill in title, author, description, category
5. Upload cover image
6. Set featured flag for homepage display
7. Publish

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Connect Domain

1. Add `sadeiriah.com` in Vercel dashboard
2. Update DNS records as instructed
3. SSL auto-provisioned

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Espresso | `#3B2F2F` | Primary dark |
| Beige | `#F5EDE4` | Light background |
| Cream | `#FBF7F2` | Secondary background |
| Gold | `#C6A76E` | Accent, CTAs |
| Deep Gold | `#A8894F` | Headers, hover |

### Typography

- **Headings:** Cormorant Garamond (serif)
- **Body:** Inter (sans-serif)

### Components

Custom luxury components:
- `Button` - primary, secondary, ghost, text variants
- `Card` - light, dark, outlined, library, service variants
- `Section` - cream, beige, espresso variants with optional grain
- `EditorialHeading` - responsive serif headings
- `SectionLabel` - gold uppercase labels

## Reference Materials

The `/reference` folder contains:
- Design inspiration (do not expose publicly)
- Client content files
- Extracted instructions

**Important:** This folder is gitignored and should never be deployed.

## License

Private. All rights reserved.
