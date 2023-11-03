import React from 'react';
import { AiOutlineForm } from "react-icons/ai";
import isotipoPeek from '../assets/img/ISOTIPO-06 (1).png'
function Formulario() {
  const iframeSrc =
    'https://crm.zoho.com/crm/WebFormServeServlet?rid=098e08c2d1afc1de8941de9d2ebb91044ada989fb6b026284822d4e48012ec6c735d2a41b4370d1e3958ac09acd99ccfgid077f2737ad724fff656b5a6f74a6f1629eb8666d643d800868139c27fbbbab9b';

  return (
    <div id="form" className="relative flex flex-col items-center justify-center h-screen">
         <div className='bg-secondary py-[4rem] w-full'></div>
      <div className='py-6 mb-8 bg-white w-full text-secondary'>
      <h2 className=" flex justify-center items-center text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold mb-3 w-full text-secondary text-center gap-2 py-6 bg-white">CONTÁCTANOS
        <AiOutlineForm className=" text-center md:text-2xl lg:text-4xl xl:text-5xl text-secondary " /></h2>
        <h4 className='text-xl text-center'>Estamos para responder tus dudas.</h4>
      </div>
      <iframe
        width="100%"
        height="100%"
        src={iframeSrc}
        title="Formulario Zoho"
      ></iframe>
      <div className='bg-secondary py-[4rem] w-full'></div>
    </div>
  );
}

export default Formulario;