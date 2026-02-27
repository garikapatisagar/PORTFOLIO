# 🚀 Personal Portfolio Website

A modern, responsive, and professional portfolio website built with **React.js** for fresher/junior software developers. This portfolio showcases your skills, projects, education, and experience in a visually stunning way that's sure to impress recruiters.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat-square&logo=css3)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)

## ✨ Features

- **🎨 Modern UI/UX Design** - Beautiful gradient colors, glassmorphism effects, and smooth animations
- **📱 Fully Responsive** - Looks great on mobile, tablet, and desktop devices
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML structure
- **♿ Accessible** - Follows web accessibility best practices
- **🔧 Clean Code** - Component-based architecture with reusable components
- **📝 Easy to Customize** - Well-documented code with dummy data ready to replace

## 📌 Sections

1. **Hero / Profile Section** - Eye-catching introduction with profile photo, name, role, and CTAs
2. **About Me** - Brief introduction and career objectives
3. **Education** - Timeline layout showing academic background
4. **Experience** - Work experience and internships with detailed responsibilities
5. **Projects** - Showcase of personal projects with GitHub and demo links
6. **Skills** - Technical skills with animated progress bars
7. **Areas of Interest** - Technology interests and passions
8. **Contact** - Contact form with validation and social links

## 🛠️ Technologies Used

- **React.js 18** - Functional components & hooks
- **JavaScript (ES6+)** - Modern JavaScript syntax
- **CSS3** - Flexbox, Grid, animations, custom properties
- **Vite** - Next-generation frontend tooling
- **Google Fonts** - Inter font family

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the source code)
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
MY_PORTFOLIO/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── Navbar/       # Navigation component
│   │   ├── Hero/         # Hero section
│   │   ├── About/        # About section
│   │   ├── Education/    # Education section
│   │   ├── Experience/   # Experience section
│   │   ├── Projects/     # Projects section
│   │   ├── Skills/       # Skills section
│   │   ├── Interests/    # Interests section
│   │   ├── Contact/      # Contact section
│   │   └── Footer/       # Footer component
│   ├── App.jsx           # Main App component
│   ├── App.css           # App-level styles
│   ├── index.css         # Global styles & CSS reset
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Customization

### Updating Personal Information

1. **Hero Section** (`src/components/Hero/Hero.jsx`)
   - Update name, role, and summary
   - Replace social media links

2. **About Section** (`src/components/About/About.jsx`)
   - Update introduction and career objective
   - Modify highlights data

3. **Education Section** (`src/components/Education/Education.jsx`)
   - Replace `educationData` array with your education details

4. **Experience Section** (`src/components/Experience/Experience.jsx`)
   - Replace `experiences` array with your work experience

5. **Projects Section** (`src/components/Projects/Projects.jsx`)
   - Replace `projects` array with your actual projects

6. **Skills Section** (`src/components/Skills/Skills.jsx`)
   - Update `skillCategories` and `additionalSkills`

7. **Contact Section** (`src/components/Contact/Contact.jsx`)
   - Update `contactDetails` and `socialLinks`

### Changing Colors

Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --color-accent: #d946ef;
  /* ... other colors */
}
```

### Adding Profile Photo

Replace the placeholder in `Hero.jsx` with your actual image:

```jsx
<img src="/path-to-your-photo.jpg" alt="Your Name" />
```

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Email format validation
- Error states and messages
- Success/error status messages

**Note:** The form currently simulates submission. To make it functional, integrate with:
- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- Your own backend API

## 🌐 Deployment

This portfolio can be deployed to:

- **Vercel** - `npm run build` then deploy the `dist` folder
- **Netlify** - Connect your GitHub repo for automatic deployments
- **GitHub Pages** - Use `gh-pages` package
- **AWS S3** - Static website hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from SVG inline elements
- Google Fonts for typography

---

Made with ❤️ by John Doe

**Feel free to star ⭐ this repository if you found it helpful!**
