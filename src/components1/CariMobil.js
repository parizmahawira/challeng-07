import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import FormFilter from './FormFilter'
import HeroSection from './HeroSection/HeroSection'
import ListCars from '../components1/ListCars'

function CariMobil() {
  return (
    <div className='App'>
        <Navbar />
        <HeroSection />
        <FormFilter />
        <ListCars />
        <Footer />
    </div>
  )
}

export default CariMobil