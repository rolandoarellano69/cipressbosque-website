import React from 'react'
import heroPeek from '../assets/img/hero2.jpg'
import logopeek from '../assets/img/logo cipres blanco-01.png'
const AboutCipres = () => {
  return (
    <section className='relative text-red-500'>
      <img src={heroPeek} alt="Casas Cipres" />
      <div className=' absolute top-0 left-0 z-10 w-full h-screen flex flex-col justify-normal items-center mt-[4rem]'>
        <div className='mb-4'>
        <img src={logopeek} alt="logo" className='w-24 h-24 md:w-48 md:h-48 object-cover' />
        </div>
        <p className='text-white text-center  text-2xl md:text-5xl font-thin uppercase'>Conectividad, estilo <br /> <strong className='font-semibold tracking-wider'> Y CALIDAD DE VIDA.</strong></p>
      </div>
    </section>
  )
}

export default AboutCipres