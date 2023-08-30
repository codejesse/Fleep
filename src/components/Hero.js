import React from 'react';
import heroimg from '../assets/img/hero-image.png'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row overflow-hidden mt-[100px]'>
      <div className='flex flex-col m-auto w-[620px]'>
        <h1 className='font-semibold text-[70px]'>Flip Your Dream House With Us</h1>
        <p className='text-[#848484]'>Powerful, self-serve product and growth analytics to help
          you flip homes and resell to the market.</p>
      </div>
      <img className='w-[45%]' src={heroimg} />
    </div>
  );
};

export default Hero;
