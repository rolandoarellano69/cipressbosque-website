import React from 'react'
import SembradoPeek from '../assets/img/CIPRES CONJUNTO.jpg'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
import { RxTriangleRight } from 'react-icons/rx'
import IsotopoPino from './icons/IsotopoPino'
const Requi = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen items-center">
    <div className="relative md:p-8 p-4">
      <img src={SembradoPeek} alt="" className='rounded-lg shadow-lg ' />
      
      
    </div>
    <div className="text-center md:text-left md:p-8">
      <div className='flex justify-center items-center mb-4'>
        <img src={LogoCipres} alt="" className='w-32 h-32 md:w-44 md:h-44' />
      </div>
      <h3 className='text-3xl mb-8 font-medium lg:text-4xl md:text-[35px]'>
        ¿Qué créditos <br />
        <span className='align-text-bottom'>califican?</span>
      </h3>

      <ul className='lg:text-xl md:p-8 p-4 mb-10'>
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
        <li className='flex items-center gap-4 mb-10'>
          <RxTriangleRight className='text-secondary lg:text-[40px]' /> Contados
        </li>
      </ul>
    </div>
  </div>

  )
}

export default Requi