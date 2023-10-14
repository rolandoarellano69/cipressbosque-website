import React,{useState} from 'react'
import { RiCloseLine, RiMenuFill } from 'react-icons/ri'
import { Link } from 'react-scroll'
//imagenes
import logocipres from '../assets/img/logo cipres blanco-01.png'

const Header = () => {
  const [isMenu , setIsMenu] = useState(false)

  const toggleMenu = () =>{
    setIsMenu(!isMenu)
  }
  return (
    <header className='fixed w-full shadow-xl top-0 left-0 z-30 px-8 py-5 bg-primary'>
   
      <nav className='flex items-center justify-between  h-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            <div className='flex'>
              <Link to='home'>
                <img src={logocipres} alt=""className='w-[4rem] md:w-[7rem] md:hidden' />
              </Link>
            </div>
        <div className='hidden md:block'>
          <div className='ml-4 flex items-center space-x-4'>
            <Link to='home' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700 cursor-pointer'>
              Ciprés
            </Link>
            <Link to='planta-arq' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700 cursor-pointer'>
           Modelos
            </Link>
            <Link to='ubi' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700 cursor-pointer'>
              Ubicación
            </Link>
            <Link to='/blog' className='text-white hover:bg-white hover:text-black rounded-lg p-2 transition ease-in duration-700 cursor-pointer'>
              Contacto
            </Link>
            
          </div>
        </div>
        <div className='md:hidden flex items-center'>
          <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          onClick={toggleMenu}
          >
          {isMenu ? <RiCloseLine size='1.5rem'/> : <RiMenuFill size='1.5rem' /> }
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenu && (  
          
        <div className=' md:hidden absolute top-0 left-0 w-[65%] h-screen bg-secondary'>
          
          <div className='flex flex-col items-center justify-center h-full gap-4'>


            <Link to='home' className='text-white hover:bg-white hover:text-black rounded-lg px-40 py-2 transition-colors duration-700 cursor-pointer'>
              Ciprés
            </Link>
            <Link to='planta-arq' className='text-white hover:bg-white hover:text-black rounded-lg px-40 py-2 transition ease-in duration-500 cursor-pointer'>
              Modelos
            </Link>
            <Link to='ubi' className='text-white hover:bg-white hover:text-black rounded-lg px-40 py-2 transition ease-in duration-500 cursor-pointer'>
              Ubicación
            </Link>
            <Link to='/blog' className='text-white hover:bg-white hover:text-black rounded-lg px-40 py-2 transition ease-in duration-500 cursor-pointer'>
              Contacto
            </Link>
           
          </div>                                                                                                                                                                                                                                                                                           
        </div>
        )}  
      </nav>
    </header>
  )
}

export default Header