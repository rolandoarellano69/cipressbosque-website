import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutCipres from './components/AboutCipres'
import HouseCipres from './components/HouseCipres'
import PlantaArq from './components/PlantaArq'
import Family2 from './components/Family2'

import Mapa from './components/Mapa'
import Footer from './components/Footer'
import Page404 from './assets/pages/Page404'
import AvisoPrivacidad from './assets/pages/AvisoPrivacidad'
import BtnWhatsapp from './components/BtnWhatsapp'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
      </Routes>
    </Router>
  )
}
const HomePage = () => {
  return (
    <>
      <div className='app'>
        <Header />
        <Hero />
        <AboutCipres />
        <HouseCipres />
        <PlantaArq /> 
        <Mapa />
        <Family2 />
        <Formulario />
        <BtnWhatsapp />
        <Footer />
      </div>
    </>
  )
}

const NotFound = () => {
  return (
    <Page404 />
  )
}
export default App