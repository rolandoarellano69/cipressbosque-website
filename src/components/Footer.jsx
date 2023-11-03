import React from 'react'
import { Link } from 'react-scroll'
import LogoCipres from '../assets/img/logo cipres blanco-01.png'
import LogoObr from '../assets/img/logoobr.png'
import { RiMapPinLine, RiPhoneLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-around ">

          {/* Logos */}
          <div className="flex items-center mb-6 lg:mb-0 gap-[5rem]">
            <div>
              <img src={LogoCipres} alt="logo" className="w-32 h-32 md:w-34 md:h-34" />
            </div>
          </div>
          <div>
            <img src={LogoObr} alt="logo2" className="w-32 h-14 md:w-44 md:h-24" />
          </div>

          {/* Contenido de texto */}
          <div className="flex flex-col lg:flex-row  mt-6 lg:mt-0 gap-[4rem]">
            <ul className="flex flex-col items-center lg:items-start gap-4">
              <li className="list-none flex items-center gap-2">
                <RiMapPinLine className="text-[24px]" />
                Plaza Carrusel LA002
              </li>
              <li className="list-none flex items-center gap-2">
                <RiPhoneLine className="text-lg" />
                6644049399
              </li>
            </ul>
            <ul className="flex flex-col items-center lg:items-start gap-y-2 ">
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
      </div>
    </footer>
  );
};

export default Footer