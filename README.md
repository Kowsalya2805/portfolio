# Kowsalya S. - Production-Ready Executive Portfolio

> **Artificial Intelligence & Data Science Engineer | Full Stack Web & ML Developer**

An ultra-premium, recruiter-focused, production-grade portfolio website built for **Kowsalya S.**, inspired by top tech engineering portfolios at Microsoft, Google, Apple, Stripe, and Vercel.

---

## 🌟 Tech Stack & Architecture

### **Frontend (`/client`)**
* **Framework:** React 19 + Vite 6 + TypeScript
* **Styling & Design System:** Tailwind CSS v3 (Custom Navy & Royal Blue theme)
* **Animations:** Framer Motion & Canvas Particles & Canvas Confetti
* **Icons:** Lucide React & React Icons
* **Aesthetics:** Apple / Stripe / Vercel style glassmorphism, soft glow shadows, dynamic typing hero text, custom cursor, and progress indicator.

### **Backend (`/server`)**
* **Runtime:** Node.js + Express.js
* **Email Transport:** Nodemailer with SMTP service
* **Security & Optimization:** Helmet security headers, CORS origin protection, Express Rate Limiter, Express-Validator input sanitization.

---

## 📁 Complete File Structure

```
d:\kowsi portfolio\
├── client/
│   ├── public/
│   │   ├── profile.svg              # Circular executive vector profile avatar
│   │   ├── Kowsalya_S_Resume.pdf    # Downloadable resume document
│   │   ├── robots.txt               # SEO Crawling rules
│   │   └── sitemap.xml              # SEO Sitemap
│   ├── src/
│   │   ├── api/
│   │   │   └── index.ts             # REST API client wrapper
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Glassmorphism header & mobile menu
│   │   │   ├── Hero.tsx             # Typing animation & quick actions
│   │   │   ├── About.tsx            # Career summary & strengths
│   │   │   ├── Skills.tsx           # Interactive skill cards & level meters
│   │   │   ├── Projects.tsx         # Project showcase cards
│   │   │   ├── ProjectModal.tsx     # Full project details modal dialog
│   │   │   ├── Experience.tsx       # NextLogic & NitroWare internships timeline
│   │   │   ├── Education.tsx        # B.Tech AI & Data Science (8.01 CGPA)
│   │   │   ├── Certifications.tsx   # NPTEL, IBM, LinkedIn & Simplilearn
│   │   │   ├── Achievements.tsx     # College 3rd Prize, Innovation Day & Silver Medal
│   │   │   ├── VisitorCounter.tsx   # Live stats counter widget
│   │   │   ├── Contact.tsx          # Form validation & success popup
│   │   │   ├── Footer.tsx           # Brand footer & scroll-to-top
│   │   │   ├── ScrollProgress.tsx   # Top reader progress indicator
│   │   │   ├── AnimatedCursor.tsx   # Trailing custom cursor
│   │   │   └── ParticlesBackground.tsx # Interactive background nodes
│   │   ├── data/
│   │   │   └── portfolioData.ts     # Data model & resume details
│   │   ├── hooks/
│   │   │   └── useTheme.ts          # Dark / Light theme toggle hook
│   │   ├── styles/
│   │   │   └── index.css            # Global CSS, keyframes & glass classes
│   │   ├── App.tsx                  # Master React container
│   │   └── main.tsx                 # React entry point
│   ├── index.html                   # OpenGraph meta & JSON-LD structured data
│   ├── vite.config.ts               # Vite bundler config with API proxy
│   ├── tailwind.config.js           # Theme token definitions
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── package.json
├── server/
│   ├── config/
│   │   └── nodemailer.js            # Nodemailer transport config
│   ├── controllers/
│   │   ├── contactController.js     # Form submission handler
│   │   └── statsController.js       # Visitor & download counters
│   ├── middlewares/
│   │   ├── rateLimiter.js           # IP rate limiting
│   │   ├── validation.js            # Input validation rules
│   │   └── errorHandler.js          # Central exception handler
│   ├── routes/
│   │   ├── contactRoutes.js         # /api/contact route
│   │   └── statsRoutes.js           # /api/stats route
│   ├── utils/
│   │   └── emailTemplate.js         # Styled HTML email template
│   ├── server.js                    # Express app entrypoint
│   ├── package.json
│   └── .env.example
├── README.md
└── package.json
```

---

## ⚡ Quick Start Guide (Local Development)

### 1. Install Dependencies
```bash
# Install all dependencies for root, client, and server
npm run install:all
```

### 2. Configure Gmail Credentials in `server/.env`

Create a file named `.env` inside the `server/` directory:

```env
PORT=5000
CLIENT_URL=http://localhost:3000

# Place your Gmail & App Password here:
GMAIL_USER=kowsalyasubbu289@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
RECIPIENT_EMAIL=kowsalyasubbu289@gmail.com
```

> **🔑 How to generate your 16-character Gmail App Password:**
> 1. Go to your [Google Account Security Settings](https://myaccount.google.com/security).
> 2. Ensure **2-Step Verification** is turned **ON**.
> 3. In the top search bar of Google Account, search for **App passwords**.
> 4. Enter App name: `Portfolio Website`.
> 5. Click **Create** and copy the generated 16-character password (e.g. `abcd efgh ijkl mnop`).
> 6. Paste it into `GMAIL_APP_PASSWORD` without spaces.

### 3. Run Development Servers
```bash
# Terminal 1: Run Backend Express Server
cd server
npm run dev

# Terminal 2: Run Frontend React Vite Client
cd client
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment Instructions

### **A. Deploying Frontend to Vercel**
1. Push your repository to **GitHub**.
2. Log into [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your `kowsi-portfolio` repository.
4. Set **Root Directory** to `client`.
5. Framework Preset: **Vite**.
6. Click **Deploy**.

### **B. Deploying Backend to Render**
1. Log into [Render](https://render.com) and create a **Web Service**.
2. Connect your GitHub repository.
3. Set **Root Directory** to `server`.
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Under **Environment Variables**, add:
   * `PORT`: `5000`
   * `GMAIL_USER`: `kowsalyasubbu289@gmail.com`
   * `GMAIL_APP_PASSWORD`: `your_16_character_app_password`
   * `RECIPIENT_EMAIL`: `kowsalyasubbu289@gmail.com`
   * `CLIENT_URL`: `https://your-vercel-app.vercel.app`

### **C. Deploying Frontend to Netlify**
1. Log into [Netlify](https://netlify.com) -> **Add new site** -> **Import an existing project**.
2. Base directory: `client`
3. Build command: `npm run build`
4. Publish directory: `client/dist`

### **D. Deploying Backend to Railway**
1. Log into [Railway](https://railway.app) and create a new project from GitHub.
2. Select the `/server` subfolder.
3. Add environment variables (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CLIENT_URL`).
4. Railway will automatically detect `npm start` and assign a public HTTP endpoint.

---

## 👤 Candidate Details

* **Name:** Kowsalya S
* **Education:** B.Tech Artificial Intelligence and Data Science (Nandha Engineering College, 2023-2027)
* **CGPA:** 8.01 / 10.0
* **Email:** kowsalyasubbu289@gmail.com
* **GitHub:** [github.com/Kowsalya2805](https://github.com/Kowsalya2805)
* **LinkedIn:** [linkedin.com/in/kowsalya-subu](https://www.linkedin.com/in/kowsalya-subu)

---

Developed with ❤️ for **Kowsalya S.**
