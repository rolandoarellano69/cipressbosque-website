import React from 'react'
import { Link } from 'react-scroll'
import ciprepeek from '../assets/img/LOGO 3-01.png'
import heroPeek from '../assets/img/hero2.jpg'
import 'animate.css'
import { RiMapPinRangeLine, RiMapPinUserFill } from 'react-icons/ri'


const Hero = () => {
  return (
    <section
      id='home'
      className="relative h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroPeek})`, height: '100vh', backgroundSize: 'cover' }}
    >
      <div className=" px-4 py-32 flex items-center justify-center h-full -translate-y-16">
        <div className="max-w-xl text-center text-white flex justify-center items-center ">
          <h1 className=" animate__animated animate__bounceInLeft text-3xl font-extrabold sm:text-4xl mb-2 uppercase">
            Ciprés del <strong className="block">Bosque</strong>
          </h1>
          <img src={ciprepeek} alt="" className=' animate__animated animate__bounceInRight md:w-36 md:block hidden' />
        </div>

        {/* <div className="flex flex-col gap-4 justify-center sm:justify-start">
          <Link to="contacto" className="px-12 py-4 bg-primary hover:cursor-pointer rounded-2xl">
            Contacto <RiMapPinUserFill className='inline-block ml-2 text-gray-200' size='1.5rem' />
          </Link>

          <Link to="ubi" className="px-12 py-4 bg-white text-gray-900 cursor-pointer rounded-2xl">
            Ubicación <RiMapPinRangeLine className='inline-block ml-2 text-primary' size='1.5rem' />
          </Link>
        </div> */}
      </div>
    </section>
  )
}

export default Hero