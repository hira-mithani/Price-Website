import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";
import Img1 from "../../assets/payment_method-footer-1.svg";
import Img2 from "../../assets/button.png";
import { Icon } from "@iconify/react";
import "../home/home-css/home.css";

const Footer = () => {
  return (
    <>
      <Box className="bg-color mt-5 bg-inherit">
        <Box className="container mx-auto px-4">
          <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white cursor-pointer py-12">
            <Box className="flex flex-col">
              <img className="w-1/3 my-3" src={logo} alt="Priceoye Logo" />
              <ul className="space-y-2">
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Press & Blog</li>
                <li>Terms & Condition</li>
              </ul>
            </Box>
            <Box className="flex flex-col">
              <Typography variant="h6" className="my-5">
                Customer Service
              </Typography>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Instalment plan</li>
                <li>E-Warranty Activation</li>
                <li>Sell On Priceoye</li>
              </ul>
            </Box>
            <Box className="flex flex-col items-center md:items-start">
              <Typography variant="h6" className="my-5">
                Secure Payments Methods
              </Typography>
              <Box className="w-full md:w-2/3 lg:w-1/2 my-2">
                <img src={Img1} alt="Payment Methods" />
              </Box>
              <Box className="w-full md:w-1/2 my-2">
                <img src={Img2} alt="Button Image" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bg-footer">
        <Box className="container mx-auto py-3 px-4">
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 text-white cursor-pointer">
            <Box className="text-center md:text-left">
              <Typography variant="body2" className="text-white text-sm">
                Copyright © 2024 Priceoye.pk
              </Typography>
            </Box>
            <Box className="flex justify-center md:justify-start lg:justify-center space-x-4">
              <Icon icon="entypo-social:youtube-with-circle" className="w-8 h-8" />
              <Icon icon="mdi:facebook" className="w-8 h-8" />
              <Icon icon="entypo-social:instagram-with-circle" className="w-8 h-8" />
              <Icon icon="mage:tiktok-circle" className="w-8 h-8" />
              <Icon icon="entypo-social:linkedin-with-circle" className="w-8 h-8" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
