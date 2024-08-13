import React from 'react'
import Navbar from '../navbar/Navbar'

interface Layout{
   children : React.ReactNode
}

function Layout({children}: Layout) {
  return (
    <>
       <Navbar />
        {children}
    </>
  )
}

export default Layout