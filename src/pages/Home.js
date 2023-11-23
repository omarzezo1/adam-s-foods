import React from 'react'
import MainSlider from '../components/Home/MainSlider'
import OurProducts from '../components/Home/OurProducts'
import Info from '../components/Home/Info'
import Testimonials from '../components/Home/Testimonials'
import Footer from '../utilities/Footer'


const Home = () => {
  return (
    <main>
        <MainSlider/>
        <Info/>
        <OurProducts/>
        <Testimonials/>
    </main>
  )
}

export default Home