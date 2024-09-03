import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

interface Layout{
   children : React.ReactNode
}

function Layout({children}: Layout) {
  const location= useLocation()

  const hideNavFooter = location.pathname === '/login'
  return (
    <>
      {!hideNavFooter &&
      <Navbar />}
        {children}
      {!hideNavFooter && 
      <Footer />
      }
    </>
  )
}

export default Layout