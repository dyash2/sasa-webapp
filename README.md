# SASA Web

SASA Web is a modern e-commerce website focused on delivering a seamless online shopping experience. Built using **Next.js 16** and **Node.js 20.19.5**, it offers a feature-rich platform with a beautiful and intuitive UI/UX.

## Features

- **User Authentication:** Secure login and signup using **Clerk**.
- **Add to Cart:** Easily add products to your cart and manage them.
- **Cart Persistence:** Cart items are saved in **local storage**, ensuring they remain even after refreshing or closing the browser.
- **Login & Logout:** Smooth authentication flow with proper session handling.
- **Responsive UI/UX:** Clean and attractive design optimized for all devices.
- **Structured Project:** Well-organized folder structure for maintainability and scalability.
- **Modern Tech Stack:** Built with the latest versions of **Next.js** and **Node.js**.

## Tech Stack

- **Frontend:** Next.js 16, React, Tailwind CSS
- **Backend:** Node.js 20.19.5
- **Authentication:** Clerk
- **State Management:** Local storage for cart management

## Project Structure

```

sasa-web/
├── src/
│   ├── app/                 # Next.js pages and layouts
│   │   ├── blog/            # Blog-related pages
│   │   ├── cart/            # Cart pages
│   │   ├── product/         # Product pages
│   │   ├── components/      # Page-specific or small reusable components
│   │   ├── layout.tsx       # Main layout
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global CSS
│   │   ├── styles/          # Additional CSS/Tailwind files
│   │   └── utils/           # Utility functions
│   └── public/              # Static assets
│       ├── apple-touch-icon.png
│       ├── favicon.svg
│       ├── favicon-96x96.png
│       ├── favicon.ico
│       ├── site.webmanifest
│       ├── web-app-manifest-192x192.png
│       └── web-app-manifest-512x512.png
├── .gitignore
├── package.json
└── README.md


````

## Getting Started

`````
1. Clone the repository:
   ```bash
   git clone https://github.com/dyash2/sasa-webapp.git
````

2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the development server:

   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the project.

