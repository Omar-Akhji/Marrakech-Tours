# Travel Marrakech

A travel website for Marrakech tours and destinations, built with Astro, Tailwind CSS, and Vue.

## 🚀 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vue](https://vuejs.org/) - Interactive components
- [GSAP](https://gsap.com/) - Animations

## 📁 Project Structure

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/       # Navbar, Footer, Sliders, etc.
│   ├── data/             # Site content and configuration
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages (index, tours, blog, contact, destinations)
│   ├── scripts/          # Client-side scripts
│   └── styles/           # Global styles
└── package.json
```

## 📄 Pages

- **Home** - Hero, featured tours, destinations, testimonials
- **Tours** - Tour listings with detail pages
- **Destinations** - Destination listings
- **Blog** - Blog posts with individual post pages
- **Contact** - Contact form

## 🧞 Commands

| Command          | Action                               |
| :--------------- | :----------------------------------- |
| `bun install`    | Install dependencies                 |
| `bun dev`        | Start dev server at `localhost:4321` |
| `bun build`      | Build for production to `./dist/`    |
| `bun preview`    | Preview build locally                |
| `bun format`     | Format code with Prettier            |
| `bun lint`       | Lint with ESLint                     |
| `bun type-check` | Run Astro type checking              |
