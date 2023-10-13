import React from 'react'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
import Family2Peek from '../assets/img/Familyguy2.jpeg'

const Family2 = () => {
  return (
    <section className='md:p-8 p-4 relative bg-primary'>
      <h1 className=' hidden absolute md:block right-16 p-4 text-secondary text-4xl text-left font-medium'>¡La Calidad de Vida <span className='text-primary text-4xl'> <br /> que mereces!</span>
      </h1>
      <img src={Family2Peek} alt="Familia" className='rounded-lg shadow-lg ' />
      <div className="absolute bottom-0 left-0 md:p-10 p-3  bg-primary rounded-tr-xl">
        <img src={LogoCipres} alt="Cipres Logo" className='w-12 h-12' />
      </div>
    </section>
  )
}
export default Family2