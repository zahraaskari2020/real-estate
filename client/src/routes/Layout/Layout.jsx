import React from 'react'
import Navbar from '../../components/navbar'

export default function Layout() {
  return (
    <div className="layout" >
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage></HomePage>
      </div>
    </div>
  )
}
