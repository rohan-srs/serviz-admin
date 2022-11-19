import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
import {FiBell} from "react-icons/fi"
import {FaUserSecret} from "react-icons/fa"
import {BsFillCaretDownFill} from "react-icons/bs"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="title">
            <h2>Dashboard</h2>
            <span>An Overview</span>
        </div>
      <div className="container">
        <div className="search">
          <BiSearchAlt />
            <input type="text" placeholder="Search..." />
        </div>
        <div className="profile">
            <FiBell className='bell' />
            <div className="avatar">
              <FaUserSecret className='img'/>
              </div>
            
            <div className="profile_name">
              <h4>Admin</h4>
              <h6>Admin</h6>
            </div>
            
        </div>
      </div>
    </div>
  )
}
