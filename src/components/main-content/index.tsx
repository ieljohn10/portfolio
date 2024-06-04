import React from "react"
import "./main-content..scss"
import Navigation from "./components/navigation"

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="header">
        <div className="title">
          <h1>About</h1>
        </div>
        <Navigation />
      </div>
    </div>
  )
}

export default MainContent
