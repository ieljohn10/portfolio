import React from "react"
import "./main-content..scss"
import Navigation from "./components/navigation"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "../../pages/About"
import Resume from "../../pages/Resume"
import Portfolio from "../../pages/Portfolio"
import Blog from "../../pages/Blog"
import Contact from "../../pages/Contact"
import NotFoundPage from "../../pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio/:id",
    element: <Portfolio />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
])

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="header">
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="body"></div>
        <Navigation />
      </div>
      <div className="content">
        <h1>content</h1>
      </div>
      <RouterProvider router={router} />
    </div>
  )
}

export default MainContent
