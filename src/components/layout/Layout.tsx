import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

interface Layout{
   children : React.ReactNode
}

function Layout({children}: Layout) {
  return (
    <>
       <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default Layout