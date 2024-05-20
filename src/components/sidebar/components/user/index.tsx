import React from "react"
import "./user.scss"

interface UserProps {
  img: string | any
  name: string
  position: string
}

const User: React.FC<UserProps> = ({ img, name, position }) => {
  return (
    <div className="profile">
      <img src={img} alt="profile" />
      <div className="profileDetails">
        <p className="name">{name}</p>
        <div className="position_bg">
          <p className="position">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default User
