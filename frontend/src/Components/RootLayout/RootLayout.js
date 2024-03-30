import React from 'react'
import Navigation from '../Navbar/Navigation'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Navigation />
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout