# Yun Wu Portfolio

```
╦ ╦╦ ╦╔╗╔  ╦ ╦╦ ╦  ╔═╗╔═╗╦═╗╔╦╗╔═╗╔═╗╦  ╦╔═╗
╚╦╝║ ║║║║  ║║║║ ║  ╠═╝║ ║╠╦╝ ║ ╠╣ ║ ║║  ║║ ║
 ╩ ╚═╝╝╚╝  ╚╩╝╚═╝  ╩  ╚═╝╩╚═ ╩ ╚  ╚═╝╩═╝╩╚═╝
```

<div align="center">

Personal portfolio website for Yun Wu, a visual designer and photographer based in Seattle, WA.

[Live Demo](https://dokaniasourav.github.io/yun-wu-portfolio/) • [Report Bug](https://github.com/dokaniasourav/yun-wu-portfolio/issues) • [Request Feature](https://github.com/dokaniasourav/yun-wu-portfolio/issues)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About

This is a personal portfolio website showcasing Yun Wu's work in visual design and photography. The site includes a photography gallery, an about page with brand partnerships, and project documentation sections.

---

## Features

### Navigation System
```
┌─────────────────────────────────────┐
│   HOME                              │
│   ├── Design                        │
│   └── Photography                   │
│   ABOUT                             │
│   PROJECT FLOW                      │
└─────────────────────────────────────┘
```
- Browser-based routing with clean URLs
- Collapsible submenu system
- Mobile hamburger menu overlay
- Smooth page transitions

### Splash Screen
- Typewriter effect: "Hi Yun 专注于视觉叙事、创意影像和艺术表达"
- Scroll or swipe to enter the site
- Shows once per browser session

### Photography Gallery
- Two columns that scroll in opposite directions
- Pauses on hover
- 18 portrait images with overlay details

### Design
- **Color**: Coral (#ff6b6b)
- **Fonts**: Inter, Playfair Display, JetBrains Mono
- **Layout**: Centered content with consistent spacing
- Works on desktop and mobile

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or higher)
  ```bash
  node --version
  ```
  Download: https://nodejs.org/

- **npm** (comes with Node.js)
  ```bash
  npm --version
  ```

- **Git**
  ```bash
  git --version
  ```
  Download: https://git-scm.com/

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dokaniasourav/yun-wu-portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd yun-wu-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   Navigate to: http://localhost:3000
   ```

---

## Usage

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:3000 |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |

### Environment Variables

No environment variables required! The project uses CDN for Tailwind CSS and external image sources.

---

## Project Structure

```
yun-wu-portfolio/
│
├── index.html              # Entry point with Tailwind CDN
├── index.tsx               # React root rendering
├── App.tsx                 # Main app with routing & scroll logic
├── types.ts                # TypeScript type definitions
├── styles.ts               # Centralized design system
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript compiler settings
├── playwright.config.ts    # E2E test configuration
├── package.json            # Dependencies and scripts
│
├── components/
│   ├── Splash.tsx          # Animated splash screen
│   ├── MainContent.tsx     # Main layout container
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # Biography & services
│   ├── ProjectFlow.tsx     # Case studies (placeholder)
│   ├── Photography.tsx     # Gallery with infinite scroll
│   ├── Design.tsx          # Design portfolio (placeholder)
│   ├── Typewriter.tsx      # Typing animation component
│   └── WaveDecoration.tsx  # Decorative wave SVG
│
├── public/
│   └── images/
│       ├── about-page-yun.jpg
│       └── brand-logo/     # 9 brand partner logos
│
└── tests/
    └── example.spec.ts     # Playwright test examples
```

---

## Technology Stack

### Core Technologies
- React
- TypeScript
- Vite
- Tailwind CSS

### Dependencies
- react-router-dom - Client-side routing
- lucide-react - Icon library
- @playwright/test - E2E testing

### Development Tools
- @vitejs/plugin-react - React plugin for Vite
- TypeScript - Static type checking
- ESLint - Code linting

---

## Deployment

### Deploy to GitHub Pages

This project is pre-configured for GitHub Pages deployment.

#### Automatic Deployment

1. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

2. **Update base path** (if needed)
   ```typescript
   // vite.config.ts
   base: process.env.GITHUB_ACTIONS ? '/your-repo-name/' : './',
   ```

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. **Monitor deployment**
   - Go to **Actions** tab
   - Watch the "Build and Deploy" workflow
   - Site will be live at: `https://username.github.io/repo-name/`

#### Manual Deployment

Trigger deployment manually from the **Actions** tab by clicking "Run workflow".

### Deploy to Other Platforms

<details>
<summary>Vercel</summary>

```bash
npm install -g vercel
vercel
```
</details>

<details>
<summary>Netlify</summary>

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```
</details>

---

## Contact

**Yun Wu** - Visual Designer & Photographer

- Email: [Yunwustudio@gmail.com](mailto:Yunwustudio@gmail.com)
- Phone: +1 425-837-2524
- Instagram: [@yun__wu](https://instagram.com/yun__wu)
- LinkedIn: [yun-w-0532b5190](https://linkedin.com/in/yun-w-0532b5190)

**Project Link**: [https://github.com/dokaniasourav/yun-wu-portfolio](https://github.com/dokaniasourav/yun-wu-portfolio)

---

<div align="center">

Made with ❤️ in Seattle, WA

**2025 Yun Wu** • Built with React & TypeScript

</div>
