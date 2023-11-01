import React from 'react'
import { RxTriangleRight } from 'react-icons/rx'


const PlantaArq = () => {
  return (
    <section id='planta-arq' className='p-8 container mx-auto flex flex-col md:flex-row justify-around items-start md:items-center gap-8 bg-gray-200 text-gray-900'>
    <ul className='w-full md:w-auto'> 
      <li className='flex items-center gap-4 text-xl text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' /> Sala
      </li>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' />Comedor
      </li>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' />Cocina
      </li>
    </ul>
    <ul className='w-full md:w-auto'>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' /> 1/2 Baño
      </li>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' />Patio de servicio
      </li>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' />Cochera para 1 auto
      </li>
    </ul>
    <ul className='w-full md:w-auto'>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' />2 Recámaras
      </li>
      <li className='flex items-center gap-4 text-xl  text-secondary'>
        <RxTriangleRight className='text-primary text-2xl' />Baño completo
      </li>
    </ul>
  </section>
  )
}

export default PlantaArq