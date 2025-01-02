import React from 'react'
import Category from './category/Category'
import HeroSection from './hero-section/HeroSection'
import Gallery from './earbud-gallery/EarbudGallery'
import Products from './products/Products'
import { Box } from '@mui/material'
import BestSellers from './best-sellers/BestSellers'
import SmartWatches from './smart-watches/SmartWatches'
import MobileSection from './mobile-secion/MobileSection'
import PriceSection from './price-section/PriceSection'
import CustomCard from './custom-card/CustomCard'
import TrimmersShaver from "./trimmers-shaver/TrimmersShaver"
import SubSection from './sub-section/SubSection'
import Footer from '../footer/Footer'



const Home = () => {
  return (
    <>
    <Box className="!bg-slate-100">
    
      <Category/>
      <HeroSection/>
      <Gallery/>
      <Products/>
      <BestSellers/>
      <SmartWatches />
      < MobileSection/>
      <PriceSection />
      <CustomCard />
      <TrimmersShaver />
      <SubSection />
      <Footer />
    </Box> 
   
    </>
  )
}

export default Home