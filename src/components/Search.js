import React from 'react';
import home1 from "../assets/img/houses/home1.png"

const Search = () => {
  return (
    <div className='m-auto overflow-hidden mt-[-20px] z-[999px]'>
      <div className='flex gap-10 m-auto w-[90%] z-[999px] p-6 h-full bg-[rgba(255, 255, 255, 0.50)] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10'>
        <select id="Location" className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5'>
          <option selected>Locations (any)</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <input placeholder='Property type' className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5' />
        <input placeholder='Price range' className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5' />
        <button className='bg-[#252525] w-[13%] rounded-xl text-white'>Search</button>
      </div>

      {/* */}
      <div className=''>
        <div className='p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-1 mx-auto'>
            <div className='border w-full md:w-[316px] lg:w-[316px] h-[388px] rounded-[15px] m-auto'>
              <div className='m-5'>
                <img className='rounded-[12px] w-full' src={home1} alt='home' />
              </div>
            </div>
            <div className='border w-full md:w-[316px] h-[388px] rounded-[15px] m-auto'>
              <div className='m-5'>
                <img className='rounded-[12px] w-full' src={home1} alt='home' />
              </div>
            </div>
            <div className='border w-full md:w-[316px] h-[388px] rounded-[15px] m-auto'>
              <div className='m-5'>
                <img className='rounded-[12px] w-full' src={home1} alt='home' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
