# Felix Ibeamaka – AI Engineer Portfolio

A modern, single-page AI Engineer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.  
It showcases multi-agent systems, RAG pipelines, computer vision, and backend engineering projects, with a clean, Stripe/Vercel-inspired dark UI.

## Tech Stack

- **Framework**: Next.js (App Router), React, TypeScript  
- **Styling**: Tailwind CSS, custom design tokens  
- **Animations**: Framer Motion  
- **Images**: Next.js `Image` component, local assets in `public/images`  
- **Tooling**: ESLint, PostCSS, Autoprefixer

## Project Structure (Key Files)

- `app/layout.tsx` – Root layout, global metadata, font, and theming  
- `app/page.tsx` – Single-page layout that composes all sections  
- `app/globals.css` – Global styles and Tailwind layer utilities  
- `components/Navbar.tsx` – Sticky navigation with smooth in-page links  
- `components/Hero.tsx` – Hero section with summary and CTAs  
- `components/About.tsx` – About section  
- `components/Skills.tsx` – Categorised skills grid  
- `components/Projects.tsx` – Project cards and galleries  
- `components/Experience.tsx` – Experience timeline/cards  
- `components/Contact.tsx` – Direct contact and profile links  
- `public/images` – All images (profile, project screenshots, icons)

## Scripts

From the project root:

- `npm run dev` – Start local development server at `http://localhost:3000`  
- `npm run build` – Create production build (`.next` directory)  
- `npm start` – Run the production build locally  
- `npm run lint` – Run ESLint

## Running Locally

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the dev server**
   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000` in your browser.

## Image Guidelines

- Place all images under `public/images`.  
- Use descriptive filenames and consistent formats (WebP/PNG/JPEG).  
- Non-critical images are lazy-loaded via the Next.js `Image` component.  
- You can replace any project or profile image by keeping the same path and filename.

---

## Deployment to GitHub (Repository)

First, push this project to a GitHub repository (needed for both GitHub Pages and Render).

1. **Initialize git (if not already)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI Engineer portfolio"
   ```

2. **Create a repository on GitHub**
   - Go to GitHub and create a new repo (e.g. `ai-engineer-portfolio`).  
   - Do **not** add any starter files (no README/gitignore/licenses from GitHub side if you already have them locally).

3. **Add remote and push**
   ```bash
   git remote add origin https://github.com/<your-username>/ai-engineer-portfolio.git
   git branch -M main
   git push -u origin main
   ```

From now on you can push updates with:

```bash
git add .
git commit -m "Update portfolio"
git push
```

---

## Deployment Option 1 – Render (Recommended for this project)

Render can run the Next.js server directly, so no special static export is required.

### A. Prepare the project

Make sure the build and start scripts are correct (they already are in `package.json`):

```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

Push all changes to GitHub before creating the Render service.

### B. Create a Render Web Service

1. Log in to [Render](https://render.com/) and click **New → Web Service**.  
2. **Connect your GitHub account** if you haven’t already.  
3. Select your portfolio repository (`ai-engineer-portfolio`).  
4. Configure the service:
   - **Environment**: Node  
   - **Build Command**: `npm install && npm run build`  
   - **Start Command**: `npm start`  
   - **Region**: Closest to your users  
   - **Branch**: `main`
5. Click **Create Web Service** and wait for Render to build and deploy.

### C. After deployment

- Render will give you a URL like `https://your-service.onrender.com`.  
- Visit it to see your live portfolio.  
- Any time you push to the configured branch (e.g. `main`), Render can auto‑deploy the new version.

---

## Deployment Option 2 – GitHub Pages (Static Export)

GitHub Pages serves static files, so you need to **export** the Next.js app as static HTML.

### A. Configure Next.js for static export

1. Update `next.config.mjs`:

   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     reactStrictMode: true,
     eslint: {
       dirs: ['app', 'components']
     },
     output: 'export' // add this for static export
   };

   export default nextConfig;
   ```

2. Add an export script in `package.json`:

   ```jsonc
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint",
       "export": "next build && next export"
     }
   }
   ```

3. Run the export locally:

   ```bash
   npm run export
   ```

   This generates an `out` directory with static files.

### B. Deploy with `gh-pages` branch (simplest workflow)

1. Install the `gh-pages` helper (locally or globally):

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add a deploy script to `package.json`:

   ```jsonc
   {
     "scripts": {
       "deploy": "npm run export && gh-pages -d out"
     }
   }
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

This will push the contents of `out` to a `gh-pages` branch and configure it for GitHub Pages.  
In the GitHub repo settings, under **Pages**, set the source to **Deploy from branch → `gh-pages` → /(root)** if it is not already selected.

4. After a few minutes, your site will be live at:

- `https://<your-username>.github.io/<repository-name>/`

If you use a custom domain, configure it under **Settings → Pages → Custom domain**.

---

## Summary of Deployment Commands

### Local development
```bash
npm install
npm run dev
```

### Build for production
```bash
npm run build
```

### Render (server deployment)
- Build: `npm install && npm run build`  
- Start: `npm start`

### GitHub Pages (static deployment)
```bash
npm run export         # produce static site in /out
npm run deploy         # optional helper using gh-pages
```

You can choose either Render (server‑hosted Next.js) or GitHub Pages (static export), depending on whether you want a simple static portfolio or room for future server-side features.

