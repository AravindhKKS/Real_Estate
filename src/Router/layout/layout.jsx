import React from 'react'
import './layout.scss'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
      <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>   
      </div>
    </div>
  )
}

export default Layout