# Tomatoes Store

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000" alt="react" />
    <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logo=vite&logoColor=FFD62E&color=000000" alt="vite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&color=000000" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-React_Router-black?style=for-the-badge&logo=reactrouter&logoColor=CA4245&color=000000" alt="reactrouter" />
  </div>
  <h3 align="center">Tomatoes Store</h3>
  <p align="center">
    Grocery e-commerce frontend with a customer storefront and seller area, built for fast UI iteration and clean component architecture.
  </p>
</div>

## <a name="introduction">Introduction</a>

Tomatoes Store is a modern React + Vite frontend for a grocery shopping experience. It includes a home landing page, product browsing by category, cart flow, order history, and a basic seller dashboard. The UI uses Tailwind CSS, local demo data, and reusable components to model a real-world e-commerce flow.

## Engineering Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router
- React Hot Toast

## Features

👉 **Landing Experience**: Hero banners, categories, best sellers, and promotional sections.

👉 **Product Discovery**: Category filtering, product cards, and detail pages.

👉 **Cart Flow**: Add-to-cart, address form, and checkout-ready pages.

👉 **Order History**: My Orders page with status details.

👉 **Seller Area**: Seller login, product list, add product, and orders views.

👉 **Responsive UI**: Layouts optimized for desktop and mobile.

## Installation

Install dependencies:

```bash
npm ci
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Demo Data

Demo products, categories, and orders are defined in `src/assets/assets.js`. You can edit those objects to change content without a backend.

## Deployment

GitHub Pages workflow lives at `.github/workflows/pages.yml`. If deploying under a repo subpath, set `base` in `vite.config.js` to match the repo name.

## Author

Ali Hussein  
Frontend Web Developer  
GitHub: https://github.com/codex404556  
Portfolio: https://alihussein-dev.vercel.app/  
LinkedIn: https://linkedin.com/in/error-best-381303331
