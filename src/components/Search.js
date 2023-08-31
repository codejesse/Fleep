import React from 'react';

const Search = () => {
  return (
    <div className='m-auto overflow-hidden mt-[-20px] z-[999px]'>
      <div className='flex gap-10 m-auto w-[90%] z-[999px] p-8 h-full bg-[rgba(255, 255, 255, 0.50)] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10'>
        <input placeholder='Locations (any)' className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5' />
        <input placeholder='Property type' className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5' />
        <input placeholder='Price range' className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5' />
        <button className='bg-[#252525] w-[13%] rounded-xl text-white'>Search</button>
      </div>
    </div>
  );
};

export default Search;
