import React from 'react'
import Navbar from './Navbar'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="grid">
        <div className="one"></div>
        <div className="two"></div>
      </div>
    </div>
  )
}
