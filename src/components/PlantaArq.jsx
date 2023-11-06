import React from 'react'
import plantPeek from '../assets/img/DISTRIBUCIÓN web-01.jpg'


const PlantaArq = () => {
  return (
    <div id='planta-arq' className="relative   bg-primary">
    <div className='w-full py-4 bg-secondary'></div>
    <img src={plantPeek} alt="" className='animate__animated animate__bounceInLeft'/>
  
</div>
  )
}

export default PlantaArq