# Vaibhavi Mistri — Portfolio

> Personal portfolio website built with React + Vite. Showcasing my projects, skills, and experience as a Full-Stack MERN Developer.

---

## 🌐 Live

**[vaibhavi-mistri-portfolio.vercel.app](https://vaibhavi-mistri-portfolio.vercel.app/)**

---

## ✨ Features

- **Dark / Light mode** — toggle with preference saved to localStorage
- **Typed hero effect** — animated text cycling through roles
- **Scroll reveal animations** — elements animate in as you scroll
- **Project filter** — filter by Full Stack / React / Node.js / Freelance
- **Resume download** — one-click PDF download
- **Contact form** — opens email client with pre-filled message
- **Fully responsive** — mobile, tablet, and desktop
- **Fast** — built with Vite, no unnecessary dependencies

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React 18 | UI components |
| Vite 5 | Build tool & dev server |
| CSS Variables | Theming (dark/light) |
| IntersectionObserver API | Scroll reveal animations |
| Plus Jakarta Sans | Display font |
| Fira Code | Monospace font |

---

## 📁 Project Structure

```
vaibhavi-portfolio/
├── public/
│   └── Vaibhavi_Mistri_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed nav with mobile drawer
│   │   ├── Hero.jsx         # Typed effect + resume download
│   │   ├── About.jsx        # Bio + education cards
│   │   ├── Skills.jsx       # Tech stack with colored badges
│   │   ├── Projects.jsx     # Project grid with filter tabs
│   │   ├── Experience.jsx   # Responsive timeline
│   │   ├── Contact.jsx      # Form + social links
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useReveal.js     # Scroll reveal hook
│   ├── App.jsx              # Theme context + layout
│   ├── main.jsx
│   └── index.css            # CSS variables, tokens, base styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/VaibhaviMistri/vaibhavi-mistri-portfolio
cd vaibhavi-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173
```

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Deployed on **Vercel** — auto-deploys on every push to `main`.

---

## 📬 Contact

- **Email** — vaibhavimistri11@gmail.com
- **LinkedIn** — [linkedin.com/in/vaibhavimistri](https://linkedin.com/in/vaibhavimistri)
- **GitHub** — [github.com/vaibhavimistri](https://github.com/vaibhavimistri)

---

## 📄 License

This project is open source. Feel free to use it as inspiration for your own portfolio — just don't copy it as-is. Give it your own personality. 🙂