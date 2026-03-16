# Abdul Rehman — Portfolio

Personal portfolio website for Abdul Rehman Shoukat, AI Engineer & Published Researcher.

**Live sections:** Hero · About · Experience · Skills · Projects · Publications · Education · Contact

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js (App Router) | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| react-icons | 5 |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   └── page.tsx          # Page entry — assembles all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Publications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts      # All content lives here
└── types/
    └── index.ts          # TypeScript interfaces

public/
├── profile.png           # Profile photo (transparent background)
└── Abdul Rehman CV.pdf   # Downloadable CV
```

## Updating Content

All portfolio data (bio, experience, skills, projects, publications, certifications) is in a single file:

```
src/data/portfolio.ts
```

Edit that file to update any section — no component changes needed.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

Optimized for deployment on [Vercel](https://vercel.com). Push to GitHub and import the repo in Vercel — zero config required for Next.js 14.

---

Built by Abdul Rehman Shoukat · [LinkedIn](https://www.linkedin.com/in/abdulrehmanshoukat) · [GitHub](https://github.com/mani5100)
