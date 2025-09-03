import React from 'react'
import { assets } from '../assets/assets';

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-[0px_4px_25px_0px_#0000000D] text-gray-900/60 rounded-xl md:w-full w-11/12 md:py-8 py-6 mt-24">
      <div className="flex items-center justify-center p-3 bg-red-100 rounded-full">
        <img
          className='w-12 h-12'
          src={assets.logo}
          alt="faceIcon"
        />
      </div>
      <h2 className="text-slate-900 font-medium mt-3 text-lg">
        Enjoying this post?
      </h2>
      <p className="text-sm text-slate-900/60 mt-1 md:w-80 w-72 text-center">
        Subscribe to get more content like this delivered to your inbox for
        free!
      </p>
      <div className="flex items-center mt-5 w-full md:px-16 px-6">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="text-sm border-r-0 outline-none border border-gray-500/10 pl-3 w-full h-10 rounded-l-md"
        />
        <button
          type="button"
          className="font-medium text-sm text-white bg-primary w-36 h-10 rounded-r-md"
        >
          Subscribe
        </button>
      </div>
      <div className="w-full h-px bg-gray-500/20 mt-5"></div>
      <p className="text-sm mt-4">
        Already a subscriber?{" "}
        <a className="text-orange-600 underline" href="#">
          Sign In
        </a>
      </p>
    </div>
  );
}

export default NewsLetter
