# Abhishek Koundal - AI & Machine Learning Portfolio Website

A modern, high-performance, fully responsive portfolio website built with standard HTML5, CSS3 (CSS Variables, Flexbox, CSS Grid), and ES6+ Vanilla JavaScript. Formatted to mirror the layout, dark slate theme (`#090d16`), and visual style of [portfolio-fawn-seven-87.vercel.app](https://portfolio-fawn-seven-87.vercel.app/).

## 🌟 Key Features

- **Personalized AI Branding**: Tailored for **Abhishek Koundal** (AI & Machine Learning Engineer, Agentic AI Specialist, PyTorch/TensorFlow, FastAPI).
- **Hero Section with Integrated Portrait**: Custom cutout portrait container (`assets/hero-portrait.png`) with glowing aura rings, floating tech badges, and smooth bottom gradient mask.
- **Dynamic Animated Typing Header**: Cycles through core engineering specializations (*Agentic AI*, *Machine Learning*, *NLP & Deep Learning*, *PyTorch Models*, *FastAPI Backends*).
- **Dark & Light Theme Switching**: Theme preference with `localStorage` persistence.
- **Interactive Project Filtering**: Filter featured projects by category (*All*, *Machine Learning & AI*, *NLP & Deep Learning*, *Agentic AI & APIs*).
- **Interactive Modals**:
  - Deep-dive project detail popups.
  - Lightbox modal viewer for high-resolution verified certificates (Oracle OCI 2025 AI Foundations, LPU Agentic AI Grade O Merit, GEN AI NASSCOM, Skillera Linux, Skillera Communication).
- **Responsive Navigation**: Glassmorphic sticky header, active scroll observer, and mobile navigation drawer.
- **Contact Form Validation**: Real-time validation with user feedback.
- **Zero Build Tooling Dependency**: Runs instantly in any web browser without needing `npm` or `node`.

---

## 📁 File Structure

```text
Portfolio/
├── index.html                  # Main HTML5 layout & section content
├── styles.css                  # Complete CSS design system (Dark #090d16 obsidian theme, glassmorphism)
├── script.js                   # JS logic (Typing effect, theme toggle, modals, filters, form validation)
├── README.md                   # Documentation and deployment guide
└── assets/
    ├── hero-portrait.png       # Integrated high-res portrait photo
    ├── profile.png             # Profile avatar image
    └── certificates/           # Verified certificate image files
        ├── gen_ai_nasscom.png
        ├── linux_commands.png
        └── effective_communication.png
```

---

## 🚀 How to Preview

1. Open `index.html` directly in any web browser (Double-click `index.html` or drag & drop into Chrome, Edge, Firefox, or Safari).
2. Test out the **Dark/Light Theme Toggle** in the navigation bar.
3. Click **View Details** on project cards to test project modals.
4. Click **View Full Certificate** on certification cards to open the high-res image modal viewer.

---

## 🌐 Free Hosting Options

- **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages under `Settings -> Pages`.
- **Vercel**: Import your GitHub repository or drag and drop the `Portfolio` folder into Vercel Dashboard.
- **Netlify**: Drag and drop the `Portfolio` folder directly into Netlify Drop.
