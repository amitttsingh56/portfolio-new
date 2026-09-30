# Amit Singh - Personal Portfolio Website

A modern personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed for a Software Developer / AI-ML / Cybersecurity-focused IT Engineer.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Installation
Navigate to the project directory and install the dependencies:
```bash
cd portfolio
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 📁 Project Architecture

```
portfolio/
├── public/
│   ├── Amit_Singh_Resume.pdf    # Downloadable resume (genuine converted PDF)
│   ├── Amit_Singh_Resume.docx   # Word source format
│   └── favicon.svg              # Custom gradient SVG favicon (AS monogram)
│
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Professional photograph
│   │
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glassmorphism header & responsive mobile menu
│   │   ├── Hero.jsx             # Split-screen hero with animated glow & CTA buttons
│   │   ├── About.jsx            # Bio and key highlight cards
│   │   ├── Skills.jsx           # Categorized technical & soft skills
│   │   ├── Experience.jsx       # Vertical timeline with verified certificate links
│   │   ├── Projects.jsx         # Featured MIRNet deep learning card & project grid
│   │   ├── Education.jsx        # Academic background, CGPA, and coursework
│   │   ├── Achievements.jsx     # Hackathon participation (RIFT '26) & Volunteering
│   │   ├── Contact.jsx          # Contact channels (Email, Phone, LinkedIn, GitHub)
│   │   └── Footer.jsx           # Minimalist footer with dynamic copyright year
│   │
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content and links
│   │
│   ├── App.jsx                  # Main application composition
│   ├── main.jsx                 # React root mount
│   └── index.css                # Global styles, glassmorphism, animations & design tokens
│
├── index.html                   # HTML5 shell with Open Graph and SEO meta tags
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration for Tailwind CSS
├── tailwind.config.js           # Custom theme tokens, fonts, and keyframe animations
└── vite.config.js               # Vite 5 configuration with React plugin
```

---

## ✏️ How to Customize Your Content

All website content and links are decoupled from the UI components. You can edit everything from a single file:

### 📍 File: `src/data/portfolioData.js`

- **Personal Details & Links**: Edit `personal` (name, title, email, phone, location, LinkedIn, GitHub).
- **Hero & Intro**: Edit `hero.tagline` and `hero.description`.
- **About Bio**: Update paragraphs and highlight cards in `about`.
- **Skills**: Add or modify skill categories and items under `skills`.
- **Internships / Experience**: Update roles, descriptions, tags, and certificate URLs in `experience`.
- **Projects**: Add new projects, GitHub links, and live URLs in `projects`. Set `featured: true` to give a project the flagship presentation card.
- **Education**: Update institution, CGPA, degree, or coursework in `education`.
- **Hackathons & Certifications**: Edit `hackathons` with event details and certificate verification links.
- **Extracurricular & Volunteering**: Edit `extracurricular`.

---

## 🌐 Deployment Instructions

### Option 1: Deploying on Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit of Amit Singh's portfolio"
   git branch -M main
   git remote add origin https://github.com/amitttsingh56/<repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **Add New Project** and select your portfolio repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live within seconds with HTTPS and a custom URL.

---

### Option 2: Deploying to GitHub Pages

1. In `vite.config.js`, add the `base` property with your repository name:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     plugins: [react()],
   });
   ```
2. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
3. In `package.json`, add deployment scripts:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings, go to **Pages** and ensure the source is set to `gh-pages` branch.
