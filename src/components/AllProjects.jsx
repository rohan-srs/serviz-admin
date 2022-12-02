import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function AllProjects() {
  return (
    <div className='allprojects'>
      <Sidebar/>
      <div className="allprojects-in">
        <Navbar/>
        <div>All Projects</div>
      </div>
    </div>
  )
}
