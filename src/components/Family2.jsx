import React from 'react'
import isotipoPeek from '../assets/img/ISOTIPO-06 (1).png'
import logoPeek from '../assets/img/logo cipres blanco-01.png'
import infonavitPeek from '../assets/img/infonavit.png'
import fovissstePeek from '../assets/img/fovissste.png'
import bancarioPeek from '../assets/img/bancario.png'
import ecoamericanaPeek from '../assets/img/ecoamericana.png'
import contadoPeek from '../assets/img/contado.png'


const Family2 = () => {
  return (
    <section className='p-4 md:p-8 relative bg-primary'>
      <div className='flex justify-center items-center mb-4 md:mb-8'>
        <img src={logoPeek} alt="logo" className='w-[10rem] h-[8rem] md:w-[12rem] md:h-[8rem] object-cover mb-7' />
      </div>
      <div className='absolute right-0 top-1/2 transform -translate-y-1/2 w-[50%] h-[100%] md:w-[50%] md:h-[100%]'>
        <img src={isotipoPeek} alt="isotipo" className='object-cover w-full h-full' />
      </div>
      <div className='flex flex-col justify-center items-center mb-4'>
        <h1 className='uppercase text-center text-xl md:text-2xl font-bold tracking-widest mb-2'>Aplica tu crédito</h1>
        <span className='px-2 py-2 bg-secondary rounded-lg text-lg md:text-xl tracking-widest mb-2'>Para vivir o para invertir</span>
      </div>
      <div className='flex flex-wrap justify-center mt-[5rem] space-x-4 md:space-x-6 gap-4'>
        <img src={infonavitPeek} alt="Infonavit" className='w-[50%] h-auto md:w-[10rem] md:h-[10rem] mb-4 md:mb-0' />
        <img src={bancarioPeek} alt="Bancario" className='w-[50%]  h-auto md:w-[10rem] md:h-[10rem] mb-4 md:mb-0' />
        <img src={ecoamericanaPeek} alt="Ecoamericana" className='w-[50%]  h-auto md:w-[10rem] md:h-[10rem] mb-4 md:mb-0' />
        <img src={contadoPeek} alt="Contado" className='w-[50%]  h-auto md:w-[10rem] md:h-[10rem] mb-4 md:mb-0' />
        <img src={fovissstePeek} alt="Fovissste" className='w-[50%]  h-auto md:w-[10rem] md:h-[10rem] mb-4 md:mb-0' />
      </div>
    </section>
  )
}
export default Family2