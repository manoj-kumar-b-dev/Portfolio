# 🚀 Manoj's Portfolio Website

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

A modern, high-performance, and responsive personal portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase software development projects, technical skills, background experience, and provide a direct contact form via serverless email integration.

---

## ✨ Features

- 🎨 **Modern & Responsive UI**: Clean design system built with Tailwind CSS, fully optimized across desktop, tablet, and mobile devices.
- ⚡ **Lightning Fast Performance**: Powered by Vite for near-instant bundling and optimal load times.
- 🎭 **Smooth Animations & Micro-Interactions**: Enhanced user experience powered by `framer-motion` page transitions and interactive elements.
- 🌓 **Dark / Light Mode**: Dynamic theme switcher adjusting colors seamlessly for low-light or daylight viewing.
- 🛠️ **Categorized Tech Stack Display**: Interactive skill cards grouped by Frontend, Backend, Database, and Developer Tools.
- 💼 **Featured Projects Showcase**: Detailed cards showcasing real-world full-stack MERN applications (Vizora, ReqForge, ShopFlow) with live demos and repository links.
- 📬 **Serverless Contact Form**: Direct email contact integration built with Node.js/Resend serverless API handlers.
- 📄 **Resume Download**: Embedded resume access for quick recruiter review.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Navigation**: [React Scroll](https://www.npmjs.com/package/react-scroll)

### Backend & API Services
- **Serverless API**: Vercel Serverless Functions (`api/contact.js`)
- **Email Service**: [Resend API](https://resend.com/) / [Nodemailer](https://nodemailer.com/)

---

## 📌 Featured Projects Highlighted

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **Vizora** | AI-powered analytics dashboard for data visualization & automated KPI generation. | React, Tailwind CSS, Node.js, Express, MongoDB, Recharts, AI API | [Live Demo](https://vizora-web.vercel.app/) • [GitHub](https://github.com/manoj-kumar-b-dev/Vizora) |
| **ReqForge** | Web-based API testing & inspection platform built for developers. | React, Tailwind CSS, Node.js, Express, MongoDB | [Live Demo](https://req-forge-app.vercel.app/) • [GitHub](https://github.com/manoj-kumar-b-dev/ReqForge) |
| **ShopFlow** | Full-stack MERN e-commerce store featuring Razorpay payments and an Admin Dashboard. | React, Tailwind CSS, Node.js, Express, MongoDB, Razorpay | [Live Demo](https://shop-flow-app.vercel.app/) • [GitHub](https://github.com/manoj-kumar-b-dev/ShopFlow) |

---

## 📂 Project Structure

```text
frontend/
├── api/                # Serverless API functions (Contact Form)
├── public/             # Static public assets
├── src/
│   ├── assets/         # Images, icons, and PDF resume
│   ├── components/     # Modular UI components (Hero, About, Projects, Skills, Contact, Footer)
│   ├── data/           # Centralized portfolio data config (portfolioData.js)
│   ├── PortfolioApp.jsx# Main Application container
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles & Tailwind imports
├── tailwind.config.js  # Tailwind theme settings & extensions
├── vite.config.js      # Vite build configuration
└── package.json        # Frontend dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (`v18+` recommended)
- `npm` or `yarn`

### Installation & Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/manoj-kumar-b-dev/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the `frontend/` folder and add your credentials (if running email services):
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your_email@gmail.com
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Author

**Manoj Kumar B**
- **Role**: Full Stack Developer
- **GitHub**: [@manoj-kumar-b-dev](https://github.com/manoj-kumar-b-dev/)
- **LinkedIn**: [Manoj Kumar](https://www.linkedin.com/in/manoj-kumar-4981873b2/)
- **Email**: manojkumarb.2305@gmail.com

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use this codebase as reference or inspiration for your own portfolio!
