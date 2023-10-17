import React from 'react'
import logopeek2 from '../assets/img/LOGO 3-01.png'
import FamilyPeek from '../assets/img/Familyguy.jpeg'
const AboutCipres = () => {
  return (
    <div className=" jadeSection md:grid md:grid-cols-2 grid grid-cols-1 grid-rows-1">
      <div className=" items-center justify-center relative bg-center bg-cover bg-secondary p-2">
        <div className=" flex items-center justify-center mt-8 z-10">
          <img src={logopeek2} alt="Logo" className="w-[10rem] h-[10rem] jadeSection  " />
        </div>

        <p className="  text-justify m-10 z-10 p-10">
          Es proyecto de únicamente 24 casas, ubicado en una zona de alto desarrollo, destacado por su gran conectividad, muy cerca de vialidades principales y centros comerciales.
          Creando un equilibrio perfecto entre el estilo y la calidad de vida que mereces.
        </p>
        <div className="flex items-center justify-center">
          {/* <img src={OBrDitPeek} alt="Logo" className='h-36 mt-4' /> */}
          {/* <ObrDitIcon className="hover:text-green-500 h-36 z-10 mt-4" /> */}
        </div>
      </div>

      <div className='flex md:p-8 p-4 items-center'>
        <img src={FamilyPeek} alt="Familia" className='md:rounded-bl-lg rounded-xl shadow-xl' />

      </div>
    </div>
  )
}

export default AboutCipres