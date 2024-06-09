import React from "react"
import "./navigation.scss"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>About</li>
        <li >Resume</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
