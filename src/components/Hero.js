import React from 'react';
import heroimg from '../assets/img/hero-image.png'

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row overflow-hidden mt-[100px]'>
      <h1 className='border w-[620px] m-auto font-semibold text-[70px]'>Flip Your Dream House With Us</h1>
      <img className='w-[45%]' src={heroimg} />
    </div>
  );
};

export default Hero;
