import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import {Link} from 'react-router-dom'
const BtnWhatsapp = () => {
  return (
    <span className='fixed z-50 xl:bottom-24 bottom-4 left-4 shadow-2xl rounded-full oy-4 px-4 text-3xl xl:left-16 items-center'>
      <Link to='' className='fixed xl:bottom-24 bottom-4 left-4 shadow-2xl rounded-full py-4 px-4 text-3xl xl:left-16 items-center cursor-pointer bg-[#25d366]'>
      <RiWhatsappLine className='text-white' /> 
      </Link>
    </span>
  )
}

export default BtnWhatsapp