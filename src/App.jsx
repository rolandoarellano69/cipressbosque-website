import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutCipres from './components/AboutCipres'
import HouseCipres from './components/HouseCipres'
import PlantaArq from './components/PlantaArq'
import Family2 from './components/Family2'
import Requi from './components/Requi'
import Mapa from './components/Mapa'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      <HouseCipres  />
      <PlantaArq /> 
      <HouseCipres  />
      <Family2 />
      <Mapa />
      <Requi />
      <Footer />
      </div>
    </>
  )
}

const NotFound = () => {
  return (
    <h1>404</h1>
  )
}
export default App