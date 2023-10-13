import React from 'react'
import SembradoPeek from '../assets/img/joj.png'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
import { RxTriangleRight } from 'react-icons/rx'
import IsotopoPino from './icons/IsotopoPino'
const Requi = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen items-center">
    <div className="relative md:p-8 p-4">
    {/* <h1 className='hidden md:block absolute right-4 md:right-16 top-4 p-2 text-primary text-2xl  text-left font-bold uppercase whitespace-nowrap'> 
          Planta <br className="md:hidden" /> Sembrado
        </h1> */}
      <img src={SembradoPeek} alt="" className='rounded-lg shadow-lg ' />
      
      {/* <div className="absolute inset-0 bottom-0 flex items-center justify-center">
        <IsotopoPino />
      </div> */}
    </div>
    <div className="text-center md:text-left md:p-8">
      <div className='flex justify-center items-center mb-4'>
        <img src={LogoCipres} alt="" className='w-32 h-32 md:w-44 md:h-44' />
      </div>
      <h3 className='text-3xl mb-8 font-medium lg:text-4xl md:text-[35px]'>
        ¿Qué créditos <br />
        <span className='align-text-bottom'>califican?</span>
      </h3>

      <ul className='lg:text-2xl md:p-8 p-4'>
        <li className='flex items-center gap-4 mb-4'>
          <RxTriangleRight className='text-secondary lg:text-[40px]' /> Crédito Infonavit
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <RxTriangleRight className='text-secondary lg:text-[40px]' /> Fovissste
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <RxTriangleRight className='text-secondary lg:text-[40px]' /> Bancario
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <RxTriangleRight className='text-secondary lg:text-[40px]' /> Economía Americana
        </li>
        <li className='flex items-center gap-4 mb-4'>
          <RxTriangleRight className='text-secondary lg:text-[40px]' /> Contados
        </li>
      </ul>
    </div>
  </div>

  )
}

export default Requi