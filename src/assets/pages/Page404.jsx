import React from 'react'
import {RiCornerUpLeftFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'


const Page404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-x-hidden bg-primary">
    <h1 className="text-3xl text-gray-200 mb-6">Error 404 |</h1>
    <p className="text-xl mb-6 text-gray-200">La página que buscas no existe :(</p>
    <Link to="/" className=" flex items-center gap-4 px-12 py-3 hover:bg-secondary ring-2 ring-secondary rounded-2xl  text-xl text-gray-200 mt-4"><RiCornerUpLeftFill/>Volver al inicio</Link>

  </div>
  )
}

export default Page404