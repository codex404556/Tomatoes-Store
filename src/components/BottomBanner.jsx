import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      <img
        className="hidden md:block"
        src={assets.desktop_banner}
        alt="mobil-banner"
      />
      <img
        className="md:hidden"
        src={assets.mobile_banner}
        alt="desktop-banner"
      />
      <div className="inset-0 absolute flex flex-col items-center md:items-start md:justify-center pt-6 md:pt-0 md:pl-18">
        <div>
          <h1 className="text-[50px] md:text-[60px] font-semibold mb-10 text-gray-900">
            Wy We Are The Best
          </h1>
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mt-2">
              <img className="w-9 md:w-11" src={item.icon} alt={item.title} />
              <div>
                <h3 className="text-lg text-gray-900 md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BottomBanner
