import React from "react";
import mobiles from "../../assets/mobiles.svg";
import earbuds from "../../assets/wireless-earbuds.svg";
import watches from "../../assets/smart-watches.svg";
import trimmer from "../../assets/trimmers-shaver.svg";
import powerbanks from "../../assets/power-banks.svg";
import chargers from "../../assets/mobile-chargers.svg";
import speakers from "../../assets/bluetooth-speakers.svg";
import tablets from "../../assets/tablets.svg";
import slide1Image from "../../assets/pakistan-priceoye-slider-kvijy.jpg";
import slide2Image from "../../assets/pakistan-priceoye-slider-r8jlg.jpg";
import slide3Image from "../../assets/pakistan-priceoye-slider-y35ps.jpg";
import slide4Image from "../../assets/pakistan-priceoye-slider-y35ps (1).jpg";
import slide5Image from "../../assets/pakistan-priceoye-slider-jlb2p (1).jpg";
import slide6Image from "../../assets/bluetooth-speakers.svg";
import slide7Image from "../../assets/pakistan-priceoye-slider-y35ps.jpg";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import { Navigation, Autoplay } from "swiper/modules";
import saleBanner from "../../assets/sale-campaign-banner-p8vzf.gif"; // Correct import path

// Category Section Component
const CategorySection = () => {
  const categories = [
    { name: "Mobiles", image: mobiles }, 
    { name: "Wireless Earbuds", image: earbuds },
    { name: "Smart Watches", image: watches },
    { name: "Trimmers Shaver", image: trimmer },
    { name: "Power Banks", image: powerbanks },
    { name: "Wall Chargers", image: chargers },
    { name: "Bluetooth Speakers", image: speakers },
    { name: "Tablets", image: tablets },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex items-center px-4 py-2 bg-white shadow-md flex-wrap justify-center w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 mb-1 group"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-12 h-12 object-contain mb-1"
            />
            <p className="text-center text-sm font-medium">{category.name}</p>
            <div className="w-full mt-1 h-0.5 bg-transparent group-hover:bg-blue-500 transition-all"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-[500px] relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={slide1Image}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2Image}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3Image}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4Image}
            alt="Slide 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5Image}
            alt="Slide 5"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide6Image}
            alt="Slide 6"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide7Image}
            alt="Slide 7"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      {/* Sale Banner */}
      <div className="absolute left-0 w-full mt-7">
        <img
          src={saleBanner}
          alt="Below Swiper"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export { HeroSection, CategorySection };
