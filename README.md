
# Obba Korean BBQ – Restaurant Website

A modern, visually rich, and fully responsive restaurant website for Obba Korean BBQ, built with Next.js, React, and Tailwind CSS. This project demonstrates advanced UI/UX, accessibility, and real-world business logic for a premium dining experience.

## Features

- **Hero Section with Video Background:** Immersive landing experience with a high-quality looping video and animated text.
- **Dynamic Menu & Main Dishes:** Interactive, visually appealing menu with concise dish descriptions and hover effects.
- **Booking System:** Custom reservation form with date picker, guest and time selection, and validation.
- **Location & Hours:** Responsive map integration and a clear, modern weekly hours grid.
- **Testimonials:** Customer reviews carousel for social proof.
- **Internationalization Ready:** Locale support for future multi-language expansion.
- **Mobile-First & Accessible:** Fully responsive, keyboard navigable, and accessible color contrast.
- **Modern UI Components:** Built with Tailwind CSS, Framer Motion, Lucide icons, and Radix UI primitives.
- **SEO & Performance:** Optimized for fast load times and search engine visibility.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Lucide React](https://lucide.dev/) (icons)
- [Radix UI](https://www.radix-ui.com/) (accessible UI primitives)
- [react-datepicker](https://reactdatepicker.com/) (date picker)
- [date-fns](https://date-fns.org/) (date utilities)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Run the development server:**
	```bash
	npm run dev
	```

3. **Open your browser:**
	Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `app/components/` – All UI components (Hero, BookingSection, MenuSection, etc.)
- `app/lib/` – Utility and i18n logic
- `public/` – Static assets (images, video)
- `app/hooks/` – Custom React hooks
- `app/locales/` – Localization files

## Customization

- **Menu & Dishes:** Edit `app/components/MainDishes.tsx` and `MenuSection.tsx`.
- **Opening Hours:** Edit `app/components/LocationSection.tsx`.
- **Testimonials:** Edit `app/components/Testimonials.tsx`.
- **Branding & Content:** Update images and video in `public/`.

## Deployment

Deploy easily to [Vercel](https://vercel.com/) or any platform supporting Next.js.

---

This project is a showcase of modern React/Next.js development, advanced UI, and real-world business logic.  
Built and maintained by [Graeme Byrne](https://graemebyrne.com).

---
