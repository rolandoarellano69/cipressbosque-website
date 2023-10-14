import React from 'react'
import { Link } from 'react-scroll'
import { RiMapPinRangeLine, RiMapPinUserFill } from 'react-icons/ri'


const Hero = () => {
  return (

    <section id='home'
      className="relative bg-[url(./assets/img/hero.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-90"></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >

        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl uppercase">
            Ciprés del

            <strong className="block font-extrabold text-gray-200">
              Bosque
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
            tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap gap-4  text-center">
            < Link
              to="contacto"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-primary sm:w-auto cursor-pointer"
            >
              Contacto
              <RiMapPinUserFill className=' items-center  inline-block ml-2 text-gray-200' size='1.5rem' />
            </Link>

            <Link
              to="ubi"
              className="flex justify-center items-center w-full rounded bg-white  px-12 py-3 text-sm font-medium text-secondary shadow hover:text-secondary focus:outline-none focus:ring active:text-secondary cursor-pointer sm:w-auto"
            >Ubicación
              <RiMapPinRangeLine className=' items-center inline-block ml-2 text-primary' size='1.5rem' />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero