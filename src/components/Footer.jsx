import React from 'react'
import { Link } from 'react-scroll'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
import LogoObr from '../assets/img/logoobr.png'
import { RiMapPinLine, RiPhoneLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-primary ">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 flex flex-col lg:flex-row items-center justify-between">

        {/* Logos */}
        <div className=" flex justify-center place-items-center mb-8 lg:mb-0">
          <img src={LogoCipres} alt="logo" className='w-32 h-32 md:w-44 md:h-44' />
          <img src={LogoObr} alt="logo2" className='w-28 h-14 md:w-40 md:h-20 ' />
        </div>

        {/* Contenido de texto */}
        <div className="text-center lg:text-left lg:max-w-md">


          {/* Enlaces */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            <li>
              <Link className="hover:border-b-2 hover:border-gray-200 text-gray-200 transition hover:text-gray-200/75 cursor-pointer" to="home">
                Ciprés
              </Link>
            </li>

            <li>
              <Link className=" hover:border-b-2 hover:border-gray-200 text-gray-200 transition hover:text-gray-200/75 cursor-pointer" to="planta-arq">
                Modelos
              </Link>
            </li>

            <li>
              <Link className=" hover:border-b-2 hover:border-gray-200 text-gray-200 transition hover:text-gray-200/75 cursor-pointer" to="ubi">
                Ubicación
              </Link>
            </li>

            <li>
              <Link className="hover:border-b-2 hover:border-gray-200 text-gray-200 transition hover:text-gray-200/75 cursor-pointer" to="/">
                Contacto
              </Link>
            </li>
          </ul>
          <ul className='flex sm:flex-row items-center justify-center  mt-14 mb-8'>
            <li className='list-none flex items-center gap-4'>
              <RiMapPinLine className='text-[30px]' />
              Plaza Carrusel LA002
            </li>
            <li className='list-none flex items-center gap-2'>
              <RiPhoneLine className='text-lg' />
              6644049399
            </li>
            <li className='mt-2 sm:mt-0 '>
              Lunes a Viernes : 9:00 am - 6:00 pm
            </li>
            <li className='mt-2 sm:mt-0'>
              Sábado 9:00 am <br /> - 2 pm
            </li>
          </ul>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="text-center mb-20">
        <a href="/aviso-privacidad" className='flex items-center justify-center p-4 uppercase text-lg sm:text-base cursor-pointer'>Aviso de privacidad</a>
        <p className="text-sm text-gray-200">
          COPYRIGHT © 2023. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  )
}

export default Footer