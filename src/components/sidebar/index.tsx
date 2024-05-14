import React from "react"
import "./style.scss"
import Profile from "./components/Profile"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <Profile />
        <div className="divider" />
      </div>
    </div>
  )
}

export default SideBar
