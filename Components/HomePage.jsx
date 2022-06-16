import React from 'react'
import MainPageSection from './MainPageSection'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import Mobile from './Mobile'

function HomePage() {
  const [isMobile, setIsMobile] = useState(false)
  
  const handleResize = () => {
    if (window.innerWidth < 720) {
      console.log("Mobile")
        setIsMobile(true)
    } else {
        setIsMobile(false)
        console.log("Desktop")
    }
  }


  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className='home'>
     {
       
     isMobile?<Mobile />:<NavBar /> 
     }
    <MainPageSection />
    </div>
  )
}

export default HomePage