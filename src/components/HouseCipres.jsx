import React from 'react'
import CipresHouse from '../assets/img/hero.jpg'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
const HouseCipres = () => {
  return (
    <figure className='md:p-8 p-4 relative'>
      <img src={CipresHouse} alt="Jade Casas" className='rounded-lg shadow-lg' />
      <div className="absolute bottom-0 left-0 md:p-10 p-3  bg-primary rounded-tr-xl">
        <img src={LogoCipres} alt="Cipres Logo" className='w-12 h-12' />
      </div>
    </figure>
  )
}

export default HouseCipres