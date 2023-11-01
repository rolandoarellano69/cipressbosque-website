import React from 'react'
import { Link } from 'react-scroll'
import isotipoPeek from '../assets/img/ISOTIPO-06 (1).png'
import heroPeek from '../assets/img/SEMBRADO.png'
import logoPeek from '../assets/img/LOGOTIPO CIPRES DEL BOSQUE-01.png'
import 'animate.css'



const Hero = () => {
  return (
    <div className="relative items-center justify-center h-[80vh] bg-white">
    {/* This div contains the text */}
    <div className='title-container animate__animated animate__fadeInDown'>
      <h1 className='text-secondary font-normal lg:text-2xl md:text-xl text-center md:mt-12'>CONECTIVIDAD, ESTILO <br /><span className='lg:text-3xl text-[.7rem] font-bold text-secondary tracking-wider '>Y CALIDAD DE VIDA .</span></h1>
    </div>
    {/* This div contains the logo */}
    <div className="logo-container animate__animated animate__zoomIn">
      <img src={isotipoPeek} alt="Logo" title="Cipres Conjunto" />
    </div>
    <div className="cipres-container animate__animated animate__rotateIn">
      <img src={logoPeek} alt="Logo" title="Cipres Conjunto" />
    </div>
    {/* This div contains the background image */}
    <div className="hero-image-container animate__animated animate__fadeIn">
      <img src={heroPeek} alt="Hero image" className="" />
    </div>
    {/* This div contains the button */}
    <div className="Parrafo-container animate__animated animate__slideInUp">
      <p className='p-4 md:p-9 text-lg'>
        Es un proyecto de únicamente 24 casas, ubicado en una zona de alto desarrollo, destacado por su gran conectividad, muy cerca de vialidades principales y centros comerciales. <br />
        Creando un equilibro perfecto entre estilo y calidad de vida que mereces.
      </p>
    </div>
  </div>
  )
}

export default Hero