import React from "react"
import { IconContext } from "react-icons"
import "./sidebar-detail.scss"

interface DetailsProps {
  icon: any
  label: string
  desc: string
}

const Details: React.FC<DetailsProps> = ({ icon, label, desc }) => {
  return (
    <div className="sidebar_detail">
      <div className="border-icon">
        <IconContext.Provider value={{ size: "30px", color: "#E3651D" }}>
          <div className="icon_container">{icon}</div>
        </IconContext.Provider>
      </div>
      <div className="wrapper">
        <span className="label">{label}</span>
        <span className="desc">{desc}</span>
      </div>
    </div>
  )
}

export default Details
