import React from "react"
import { Link } from "react-router-dom"

const Portfolio = () => {
  const profiles = [1, 2, 3, 4, 5]

  return (
    <div>
      {profiles.map((profile) => (
        <Link key={profile} to={`/portfolio/${profile}`}>
          Profile {profile}
        </Link>
      ))}
    </div>
  )
}

export default Portfolio
