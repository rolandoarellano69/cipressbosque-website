import React from 'react'
import mapapeek from '../assets/img/mapa FINAL CIPRES-01.png'
import {PiMapPinFill} from 'react-icons/pi'
const Mapa = () => {
  return (
    <section id='ubi' className='bg-white p-10'>
      <div className="container mx-auto  mt-[3rem] p-4 md:p-0">
        <h1 className='text-secondary text-center text-3xl md:text-5xl font-bold tracking-wider mb-2'>CONECTIVIDAD</h1>
        <h2 className='text-primary font-semibold text-center text-xl md:text-3xl uppercase tracking-wide mb-2 '>Vialidades Principales</h2>
        <p className='text-primary text-sm font-bold text-center flex justify-center items-center gap-2 mb-4'> 
          <PiMapPinFill className='text-2xl md:text-xl'/>Paseo del Bosque 676, Victoriano Huerta 2000, Del Bosque C.P 22204
        </p>
        <div className="w-full overflow-x-auto">
          <img src={mapapeek} alt="Mapa" className='mx-auto md:pt-5 w-full md:w-auto'/>
        </div>
      </div>
    </section>
  )
}

export default Mapa