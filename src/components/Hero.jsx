import React from 'react'

import heroPeek from '../assets/img/DISTRIBUCIÓN web-05.jpg'
import 'animate.css'



const Hero = () => {
  return (
    <div id='home' className="relative mt-[8rem]  bg-primary">
      <div className='w-full py-4 bg-secondary'></div>
      <img src={heroPeek} alt="" className='animate__animated animate__bounceInLeft'/>
    
  </div>
  )
}

export default Hero