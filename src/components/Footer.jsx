import React from 'react'
import { Link } from 'react-scroll'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
import LogoObr from '../assets/img/logoobr.png'
import { RiMapPinLine, RiPhoneLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logos */}
        <div className="mb-6 lg:mb-0">
          <img src={LogoCipres} alt="logo" className="w-32 h-32 md:w-44 md:h-44" />
          <img src={LogoObr} alt="logo2" className="w-28 h-14 md:w-40 md:h-20" />
        </div>

        {/* Contenido de texto */}
        <div className="text-center lg:text-left lg:max-w-md">
          <ul className="flex flex-col items-center lg:items-start gap-4 p-4 md:p-8">
            <li className="list-none flex items-center gap-2">
              <RiMapPinLine className="text-[24px]" />
              Plaza Carrusel LA002
            </li>
            <li className="list-none flex items-center gap-2">
              <RiPhoneLine className="text-lg" />
              6644049399
            </li>
            <li className="mt-2 sm:mt-0">
              Lunes a Viernes: 9:00 am - 6:00 pm
            </li>
            <li className="mt-2 sm:mt-0">
              Sábado 9:00 am - 2 pm
            </li>
          </ul>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className="text-center mt-8 md:mt-12">
        <a
          href="/aviso-privacidad"
          className="text-gray-200 hover:text-white uppercase text-lg sm:text-base cursor-pointer"
        >
          Aviso de privacidad
        </a>
        <p className="text-sm text-gray-200 mt-2">
          COPYRIGHT © 2023. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  );
};

export default Footer