import React from 'react'
import mapapeek from '../assets/img/mapa-01-01.png'
const Mapa = () => {
  return (
  <figure id='ubi' className=''>
    <figcaption className=" font-semibold text-center text-secondary mt-8 mb-8 md:p-4 sm:p-2 md:text-2xl lg:text-2xl xl:text-5xl">Ubicación</figcaption>
    <img title='mapa' src={mapapeek} alt="MAPA" />
  </figure>
  )
}

export default Mapa