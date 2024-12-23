import React from 'react'
import Category from './category/Category'
import HeroSection from './hero-section/HeroSection'
import Gallery from './gellary/Gallery'
import Products from './products/Products'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'
import Header from '../header/Header'
import SmartWatches from './smart-watches/SmartWatches'
import MobileSection from './mobile-secion/MobileSection'
import PriceSection from './price-section/PriceSection'


const Home = () => {
  return (
    <>
      <Header/>
    <Box className="!bg-slate-100">
    
      <Category/>
      <HeroSection/>
      <Gallery/>
      <Products/>
      <BestSellers/>
      <SmartWatches />
      < MobileSection/>
      <PriceSection />
      
    </Box>
   
    </>
  )
}

export default Home
    