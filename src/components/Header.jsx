import React, { useState } from 'react'
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
//imagenes
import logocipres from '../assets/img/logo cipres blanco-01.png'

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)

  const handleLinkClick = () => {
    setIsMenu(false);
  }


  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }
  return (
    <header className='fixed w-full shadow-xl top-0 left-0 z-40 px- py-2 bg-primary'>
      <nav className='h-[8rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  '>
        <div className='md:grid grid-cols-3 items-center h-full hidden '>
          {/* Primera mitad de los links */}
          <div className='flex justify-end space-x-4 py-2'>
            <Link to='home' className='text-white bg-secondary   rounded-lg px-6 py-2  transition ease-in duration-700 cursor-pointer'>
              Ciprés
            </Link>
            <Link to='planta-arq' className='text-white bg-secondary  rounded-lg px-6 py-2 transition ease-in duration-700 cursor-pointer'>
              Modelos
            </Link>
          </div>

          {/* Logo en el centro */}
          <div className='flex justify-center items-center'>
            <Link to='home'>
              <img src={logocipres} alt="Logo Ciprés" className='w-[4rem] md:w-[10rem]' />
            </Link>
          </div>

          {/* Segunda mitad de los links */}
          <div className='flex justify-start items-center space-x-4 pl-2'>
            <Link to='ubi' className='text-white  bg-secondary rounded-lg px-6 py-2  transition ease-in duration-700 cursor-pointer'>
              Ubicación
            </Link>
            <Link to='form' className='text-white bg-secondary  rounded-lg px-6 py-2 transition ease-in duration-700 cursor-pointer'>
              Contacto
            </Link>
          </div>
        </div>
        <div className='md:hidden flex justify-between p-8 items-center'> {/* Modificado aquí */}
          <Link to='home' onClick={handleLinkClick}>
            <img src={logocipres} alt="Logo Ciprés" className='w-[4rem]' /> {/* Ajusta el tamaño del logo según sea necesario */}
          </Link>
          <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
            onClick={toggleMenu}
          >
            {isMenu ? <RiCloseLine size='1.5rem' /> : <RiMenuFill size='1.5rem' />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenu && (

          <div className=' animate__animated animate__fadeInLeft md:hidden fixed top-0 left-0 z-50 w-[65%] sm:w-[40%]  bg-primary flex flex-col items-center justify-center h-full gap-4
        transition-all duration-300 ease-in-out
        '>

            <Link to='home' onClick={handleLinkClick}>
              <img src={logocipres} alt="Logo Ciprés" className='w-[4rem] mb-4' /> {/* Ajusta el tamaño y los márgenes del logo según sea necesario */}
            </Link>
           
            <Link to='planta-arq' className='text-white  bg-secondary rounded-lg py-2 px-20  transition ease-in duration-500 cursor-pointer' onClick={handleLinkClick}>
              Modelos
            </Link>
            <Link to='ubi' className='text-white  bg-secondary rounded-lg py-2 px-20  transition ease-in duration-500 cursor-pointer' onClick={handleLinkClick}>
              Ubicación
            </Link>
            <Link to='form' className='text-white  bg-secondary rounded-lg py-2 px-20  transition ease-in duration-500 cursor-pointer' onClick={handleLinkClick}>
              Contacto
            </Link>

          </div>

        )}
        {isMenu && (
          <div className=' md:hidden fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50'
            onClick={toggleMenu}
          >
          </div>

        )}


      </nav>
    </header>
  )
}

export default Header