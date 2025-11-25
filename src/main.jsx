import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Feature from './components/feature.jsx'
import Hero from './components/hero.jsx'
import Blog from './components/blog.jsx'
import Team from './components/team.jsx'
import About from './components/about.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Hero />
        },
        {
          path: "feature",
          element: <Feature />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "team",
          element: <Team />
        },
        {
          path: "about",
          element: <About />
        }
      ]
    }
  ],
  {
    basename: "/create-route-dom/"
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)