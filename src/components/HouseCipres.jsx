import React from 'react'
import fondoPeek from '../assets/img/fondo-06.webp'
import plantabajaPeek from '../assets/img/PLANTA ALTA-06.png'
import plantaaltaPeek from '../assets/img/PLANTA BAJA-06.png'

const HouseCipres = () => {
  return (
    <section className="relative bg-white md:flex md:flex-col md:items-center">
      <div className=" md:bg-transparent bg-secondary w-full z-10 mt-[4rem]  py-6 md:py-8">
        <p className=" text-white text-center text-2xl md:text-5xl font-thin uppercase">
          Conoce la Distribución <br />
          <strong className="font-semibold tracking-wider">de tu nuevo hogar.</strong>
        </p>
      </div>
      
      <img src={fondoPeek} alt="" className=" absolute w-full object-cover h-64 md:h-auto " />
      <div className=" flex flex-col  mt-8 space-y-4 md:flex-row  md:space-y-0 md:space-x-4">
        <figure>
          <img src={plantaaltaPeek} alt="Planta Alta" className="w-full h-auto  md:h-[40rem] md:w-[40rem] relative" />
        </figure>
        <figure>
          <img src={plantabajaPeek} alt="Planta Baja" className="w-full h-auto md:h-[40rem] md:w-[40rem] relative" />
        </figure>
      </div>
    </section>
  )
}

export default HouseCipres