import React from 'react'
import PlantaArqPeek from '../assets/img/plantas brochure-04.png'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'


const PlantaArq = () => {
  return (
    <section id='planta-arq' className='md:p-8 p-4 relative bg-primary'>
      <img src={PlantaArqPeek} alt="Planta" className='rounded-lg shadow-lg bg-gray-200' />
      <div className="hidden lg:block absolute bottom-0 left-0 md:p-10 p-3  bg-primary rounded-tr-xl">
        <img src={LogoCipres} alt="Cipres Logo" className='w-12 h-12' />
      </div>
    </section>
  )
}

export default PlantaArq