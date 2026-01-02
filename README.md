# Lihat.site - Web Developer Showcase

Showcase portfolio website built with **Astro** and **Tailwind CSS v4**.

## ✨ Features

- **Astro 5** - Static Site Generator with blazing fast performance
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Centralized Data Management** - Edit all content from a single file
- **Responsive Design** - Looks great on all device sizes
- **Dark Theme** - Elegant dark theme with dotted background pattern
- **Smooth Animations** - Beautiful hover effects and transitions
- **Component-Based** - Clean, reusable Astro components

## 📁 Project Structure

```
/
├── public/
│   └── Asset-bg-wave.webp    # Hero background image
├── src/
│   ├── components/
│   │   ├── Footer.astro      # Footer component
│   │   ├── Hero.astro        # Hero section component
│   │   ├── Navbar.astro      # Navigation bar
│   │   ├── ProjectCard.astro # Individual project card
│   │   └── ProjectGrid.astro # Grid layout for projects
│   ├── data/
│   │   ├── site.ts           # General configuration (navbar, hero, footer, SEO)
│   │   └── projects.ts       # List of all projects
│   ├── layouts/
│   │   └── Layout.astro      # Base layout
│   ├── pages/
│   │   └── index.astro       # Home page
│   └── styles/
│       └── global.css        # Global styles with Tailwind
├── astro.config.mjs          # Astro configuration
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### 🎯 Centralized Data Management

**ALL WEBSITE CONTENT IS MANAGED FROM A SINGLE FILE:**

Edit **`src/data/site.ts`** to change:

| Section | Config Object | What can be changed |
|---------|---------------|----------------------|
| SEO & Metadata | `siteConfig` | Title, description, author, URL |
| Navbar | `navbarConfig` | Logo text, CTA button text & link |
| Hero | `heroConfig` | Badge, title, description |
| Projects | `projects[]` | Semua project cards |
| Footer | `footerConfig` | Copyright, social links |
| Colors | `themeColors` | Referensi warna tema |

### Example: Adding a New Project

```typescript
// src/data/site.ts

export const projects: Project[] = [
  {
    title: "Project Baru Anda",
    category: "Development",
    image: "https://example.com/image.jpg",
    link: "/projects/new-project",
    description: "Deskripsi singkat project"
  },
  // ... project lainnya
];
```

### Example: Changing Navbar

```typescript
// src/data/site.ts

export const navbarConfig = {
  logo: {
    text: "nama",
    accent: ".",
    suffix: "dev",
  },
  cta: {
    text: "HUBUNGI SAYA",
    link: "/contact",
  },
};
```

### Styling

Global styles and theme customization are in `src/styles/global.css`. The theme uses CSS variables:

- `--color-bg-main`: Background main color (#060606)
- `--color-text-primary`: Primary text color (#ffffff)
- `--color-text-secondary`: Secondary text color (#dadada)
- `--color-accent`: Accent color (#75f991)

## 📄 License

MIT License - feel free to use this template for your portfolio!

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
