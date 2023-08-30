import React from 'react';
import heroimg from '../assets/img/hero-image.png'

const Hero = () => {
  return (
    <div className='flex flex-row overflow-hidden mt-[100px]'>
      <h1 className='border m-auto font-semibold text-[45px]'>Flip Your Dream House With Us</h1>
      <img className='w-[50%]' src={heroimg} />
    </div>
  );
};

export default Hero;
