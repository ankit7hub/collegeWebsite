import React from 'react'
import { Link } from 'react-router-dom'

const UserHomePage = () => {
  return (
    <div>
      User Home page
      <button><Link to="/adminlogin">Admin Login</Link></button>
    </div>
  )
}

export default UserHomePage
