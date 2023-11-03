import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import home1 from "../assets/img/houses/home1.png"

const PropertyDetails = () => {
  const { homeId } = useParams();
  return (
    <div>
      {/* For now add dummy data here until i can pass the data from data.js that matches the id */}
      <Header />
      <div className='lg:p-[80px] lg:m-0 m-10'>
        <img className='lg:w-[669px] w-full lg:h-[559px] h-fit' src={home1} alt={homeId} />
      </div>
    </div>
  );
};

export default PropertyDetails;
