# Lihat.site - Web Developer Showcase

Showcase portfolio website built with **Astro** and **Tailwind CSS v4**.

![Preview](./preview.png)

## ✨ Features

- **Astro 5** - Static Site Generator with blazing fast performance
- **Tailwind CSS v4** - Modern utility-first CSS framework
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
│   │   └── projects.ts       # Project data
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

### Adding New Projects

Edit `src/data/projects.ts` to add or modify projects:

```typescript
export const projects: Project[] = [
  {
    title: "Your Project Name",
    category: "Development",
    image: "https://example.com/image.jpg",
    link: "/projects/your-project"
  },
  // ... more projects
];
```

### Styling

Global styles and Tailwind theme customization is in `src/styles/global.css`. The theme uses custom CSS variables:

- `--color-bg-main`: Main background color (#060606)
- `--color-text-primary`: Primary text color (#ffffff)
- `--color-text-secondary`: Secondary text color (#dadada)
- `--color-accent`: Accent color (#75f991)

## � License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
