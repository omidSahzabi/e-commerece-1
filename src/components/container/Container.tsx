import React from 'react'

interface Container{
    children: React.ReactNode
}

function Container({children}: Container) {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default Container