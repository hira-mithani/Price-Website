import React from 'react'
import Category from './category/Category'
import HeroSection from './hero-section/HeroSection'
import Gallery from './gellary/Gallery'
import Products from './products/Products'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'
import Header from '../header/Header'
import SmartWatches from './smart-watches/SmartWatches'

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
    </Box>
    </>
  )
}

export default Home