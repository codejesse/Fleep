import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import home1 from "../assets/img/houses/home1.png"

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
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
