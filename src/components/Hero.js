import React from 'react';
import heroimg from '../assets/img/hero-image.png'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row overflow-hidden mt-[100px]'>
      <div className='flex flex-col m-auto w-[610px]'>
        <h1 className='font-semibold text-[70px]'>Flip Your Dream House With Us</h1>
        <p className='text-[#848484]'>Powerful, self-serve product and growth analytics to help
          you flip homes and resell to the market.</p>
        <div className='flex flex-row gap-6 mt-6'>
          <button className="text-white bg-[#252525] hover:bg-[#252525] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium border-none text-sm px-5 py-2 text-center mr-3 md:mr-0">Get Started</button>
          <p className='my-auto'>Learn More</p>
        </div>
      </div>
      <img className='w-[45%]' src={heroimg} />
    </div>
  );
};

export default Hero;
