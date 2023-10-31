import React from 'react';
import heroimg from '../assets/img/hero-image.png'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row overflow-hidden mt-[100px]'>
      <div className='flex flex-col lg:m-auto m-10 w-[610px]'>
        <h1 className='font-semibold lg:text-[70px] md:text-[50px] text-[30px] lg:w-full md:w-full w-[400px]'>Flip Your Dream House With Us.</h1>
        <p className='text-[#848484] text-[15px] lg:w-full md:w-full w-[400px]'>Powerful, self-serve product and growth analytics to help
          you flip homes and resell to the market.</p>
        <div className='flex flex-row gap-6 mt-6'>
          <button className="text-white bg-[#252525] hover:bg-[#252525] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium border-none text-sm px-8 py-3 text-center mr-3 md:mr-0">Get Started</button>
          <p className='my-auto'>Learn More</p>
        </div>
      </div>
      <img className='lg:w-[45%] lg:m-0 m-10 w-[100%]' src={heroimg} alt='hero' />
    </div>
  );
};

export default Hero;
