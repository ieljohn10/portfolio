import React from "react"
import "./sidebar.scss"
import { Profile1 } from "../../assets/index"
import User from "./components/user"
import Details from "./components/sidebar-detail"
import { MdOutlineEmail, MdLocalPhone, MdLocationPin } from "react-icons/md"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <User img={Profile1} name={"Ariel Galvez"} position={"Web Developer"} />
        <div className="divider" />
        <div className="personal_details">
          <Details
            icon={<MdOutlineEmail />}
            label="Email"
            desc="arielglvz@gmail.com"
          />
          <Details icon={<MdLocalPhone />} label="Phone" desc="09772089843" />
          <Details
            icon={<MdLocationPin />}
            label="Location"
            desc="arielglvz@gmail.com"
          />
        </div>
      </div>
    </div>
  )
}

export default SideBar
