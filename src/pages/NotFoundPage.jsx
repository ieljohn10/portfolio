import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="notfoundpage">
      <h1>Not Found Page</h1>
      <Link to={"/"}>Home from Link</Link>
    </div>
  )
}

export default NotFoundPage
