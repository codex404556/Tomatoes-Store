import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        className="w-full hidden md:block rounded-lg"
        src={assets.main_banner}
        alt="main-banner"
      />
      <img
        className="w-full md:hidden block rounded-lg"
        src={assets.mobile_main_banner}
        alt="main-banner"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-start md:justify-center pt-8 md:pt-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-96 leading-tight lg:leading-17">
          Performance You can Trust Savings you Willl Love!
        </h1>
        <div className="flex items-center mt-6 font-medium">
          <Link
            to="/products"
            className="flex items-center px-7 md:px-10 py-3 bg-red-500  hover:bg-red-400 transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img
              className="ml-2 md:hidden"
              src={assets.white_arrow_icon}
              alt="arrow-icon"
            />
          </Link>
          <Link
            to="/products"
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          > 
            Explore Deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainBanner
