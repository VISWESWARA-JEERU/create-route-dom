# Create Route DOM

A modern, responsive web application built with **React**, **Vite**, and **React Router DOM**. This project demonstrates best practices for building scalable single-page applications (SPAs) with component-based architecture and routing.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

**Create Route DOM** is a full-stack React application that showcases a modern business website with multiple pages and routes. It demonstrates professional web development practices including responsive design, component composition, and client-side routing.

### Why This Project?

This project serves as a template for:
- Learning React Router DOM implementation
- Understanding component-based architecture
- Building responsive layouts with Tailwind CSS
- Implementing modern build tools with Vite
- Creating scalable SPA structures

## ✨ Features

- **Multi-page routing** using React Router DOM
- **Responsive design** that works on all devices
- **Component-based architecture** for reusability
- **Tailwind CSS** for modern styling
- **Fast build process** with Vite
- **Development server** with Hot Module Replacement (HMR)
- **ESLint configuration** for code quality

## 📁 Project Structure

```
create-route-dom/
├── src/
│   ├── components/
│   │   ├── about.jsx          # About/Contact page component
│   │   ├── blog.jsx           # Blog listing page component
│   │   ├── feature.jsx        # Features showcase component
│   │   ├── footer.jsx         # Footer component (shared)
│   │   ├── header.jsx         # Header/Navigation component (shared)
│   │   ├── hero.jsx           # Hero section component
│   │   └── team.jsx           # Team members page component
│   ├── App.jsx                # Root app component with layout
│   ├── App.css                # App-level styles
│   ├── index.css              # Global styles (Tailwind imports)
│   └── main.jsx               # Entry point with routing setup
├── public/
│   └── vite.svg               # Vite logo
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
├── package.json               # Dependencies and scripts
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

### Component Breakdown

| Component | Purpose | Route |
|-----------|---------|-------|
| `Hero` | Landing page hero section | `/` |
| `Feature` | Features showcase | `/feature` |
| `Blog` | Blog posts listing | `/blog` |
| `Team` | Team members display | `/team` |
| `About` | Contact/About form | `/about` |
| `Header` | Navigation bar (shared) | N/A |
| `Footer` | Footer content (shared) | N/A |

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Verify Installation

```bash
node --version    # Should display v16.0.0 or higher
npm --version     # Should display v7.0.0 or higher
git --version     # Should display git version
```

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/VISWESWARA-JEERU/create-route-dom.git
cd create-route-dom
```

### 2. Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

This will install:
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Routing library
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/vite` - Tailwind plugin for Vite
- ESLint and related tools

### 3. Verify Installation

```bash
npm list react react-dom react-router-dom
```

## 💻 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

**Output:**
```
VITE v7.2.4  ready in 123 ms

➜  Local:   http://localhost:5173/create-route-dom/
➜  press h + enter to show help
```

Open your browser and navigate to `http://localhost:5173/create-route-dom/`

### Available Routes

Once the dev server is running, you can navigate to:

- **Home** - `http://localhost:5173/create-route-dom/`
- **Features** - `http://localhost:5173/create-route-dom/feature`
- **Blog** - `http://localhost:5173/create-route-dom/blog`
- **Team** - `http://localhost:5173/create-route-dom/team`
- **About/Contact** - `http://localhost:5173/create-route-dom/about`

## 📜 Available Scripts

### `npm run dev`
Starts the development server with HMR support.
```bash
npm run dev
```

### `npm run build`
Creates an optimized production build.
```bash
npm run build
```
Output will be in the `dist/` directory.

### `npm run preview`
Serves the production build locally for testing.
```bash
npm run preview
```

### `npm run lint`
Runs ESLint to check code quality.
```bash
npm run lint
```

### `npm run deploy`
Builds and deploys to GitHub Pages (requires git setup).
```bash
npm run predeploy  # Automatically runs before deploy
npm run deploy
```

## 🛠 Technologies Used

### Core
- **React 19.2.0** - UI library
- **React DOM 19.2.0** - DOM rendering
- **React Router DOM 7.9.6** - Client-side routing

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.17** - Tailwind Vite plugin

### Build Tools
- **Vite 7.2.4** - Lightning-fast build tool
- **@vitejs/plugin-react 5.1.1** - React plugin for Vite

### Development
- **ESLint 9.39.1** - Code linting
- **ESLint Plugin React Hooks** - React hooks rules
- **ESLint Plugin React Refresh** - React refresh rules

## 🏗 Project Architecture

### File Organization

```
src/
├── components/           # Reusable UI components
│   ├── Shared          # Header, Footer (used across pages)
│   └── Pages           # Page-specific components
├── App.jsx             # Layout wrapper with <Outlet />
├── main.jsx            # Router configuration
└── index.css           # Global Tailwind imports
```

### Routing Configuration

The routing is configured in `main.jsx` using React Router's browser router:

```javascript
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <Hero /> },
        { path: "feature", element: <Feature /> },
        { path: "blog", element: <Blog /> },
        { path: "team", element: <Team /> },
        { path: "about", element: <About /> }
      ]
    }
  ],
  { basename: "/create-route-dom/" }
);
```

### Component Hierarchy

```
App (Layout)
├── Header (Navigation)
├── <Outlet /> (Route Component)
│   ├── Hero
│   ├── Feature
│   ├── Blog
│   ├── Team
│   └── About
└── Footer
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. The configuration is in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🔧 Configuration Files

### `vite.config.js`
```javascript
export default defineConfig({
  base: '/create-route-dom/',
  plugins: [react(), tailwindcss()],
})
```

### `eslint.config.js`
Enforces code quality with React-specific rules and hooks linting.

## 📱 Responsive Design

The project is fully responsive with breakpoints:
- **Mobile First** - Base styles for mobile
- **Tablet** - `md:` breakpoint
- **Desktop** - `lg:` breakpoint
- **Large Screens** - `xl:` and `2xl:` breakpoints

## 🚀 Deployment

### Deploy to GitHub Pages

1. Ensure the repository is on GitHub
2. Update the `homepage` in `package.json`:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/create-route-dom"
   ```

3. Deploy with:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings to use the `gh-pages` branch

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
Clear npm cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### ESLint Errors
Fix linting issues automatically:
```bash
npm run lint -- --fix
```

### Vite Build Fails
Clear the Vite cache:
```bash
rm -rf dist .vite
npm run build
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 💡 Best Practices Implemented

✅ Component-based architecture  
✅ Reusable components (Header, Footer)  
✅ Proper routing structure  
✅ Responsive design  
✅ Code linting with ESLint  
✅ Fast build with Vite  
✅ Hot Module Replacement (HMR)  
✅ Production-ready optimization  

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Visweswara Jeeru**
- GitHub: [@VISWESWARA-JEERU](https://github.com/VISWESWARA-JEERU)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Last Updated:** 2024  
**Project Version:** 0.0.0