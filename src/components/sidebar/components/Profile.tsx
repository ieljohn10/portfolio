import React from "react"
import { Profile1 } from "../../../assets"

const Profile: React.FC<any> = () => {
  return (
    <div className="profile">
      <img src={Profile1} alt="profile" />
      <div className="profileDetails">
        <p className="name">Name Here</p>
        <div className="position_bg">
          <p className="position">Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
