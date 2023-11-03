import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import home1 from "../assets/img/houses/home1.png"
import bath from "../assets/bath.svg";
import bed from "../assets/bed.svg"

const PropertyDetails = () => {
  const { homeId } = useParams();
  return (
    <div className='overflow-hidden'>
      {/* For now add dummy data here until i can pass the data from data.js that matches the id */}
      <Header />
      <div className='flex lg:flex-row flex-col lg:p-[80px] lg:m-0 m-10'>
        <img className='lg:w-[669px] w-full lg:h-[559px] h-fit' src={home1} alt={homeId} />
        <div className='lg:p-10 p-4'>
          <h1 className='text-[25px] font-semibold'>4 Roosevelt Avenue Portland, CA</h1>
          <p className='text-[#848484]'>Posted by author</p>
          <div className='flex flex-row gap-10 mt-4'>
            <div className='flex flex-row gap-2'>
              <img className='w-[38px] h-[32px]' src={bed} alt='bed' />
              <p className='mt-1'>4</p>
            </div>
            <div className='flex flex-row gap-2'>
              <img className='w-[30px] h-[29.96px]' src={bath} alt='bath' />
              <p className='mt-1'>6</p>
            </div>
            {/* The agent avatar goes here */}
            <h1 className='m-auto'>Agent avatar</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
