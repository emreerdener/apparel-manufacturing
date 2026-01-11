# Apparel Manufacturing Redesign

A modern e-commerce product page redesign for **Apparel Manufacturing**, built with **Next.js 14 (App Router)** and **Mantine v7**.

This project modernizes the original shopping experience with a clean, responsive UI, interactive product configuration (color/image switching), and a scalable, domain-driven architecture.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [Mantine v7](https://mantine.dev/)
- **Styling:** CSS Modules & PostCSS (Mantine Preset)
- **Language:** TypeScript
- **Icons:** Tabler Icons

## 📂 Project Structure

This project uses a **Feature-Based Architecture** to keep logic organized by domain rather than file type.

```text
src/
├── app/                    # Next.js App Router (Routes only)
│   ├── (shop)/pd/          # Product Details Page Route
│   └── page.tsx            # Homepage
├── features/               # Core Business Logic
│   ├── product/            # Product Domain (Gallery, Configurator, Types)
│   ├── cart/               # Cart Domain
│   └── navigation/         # Header, Footer, Menus
└── lib/                    # Global Utilities (Theme, Constants)
```
