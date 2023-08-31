import React from 'react';

const Search = () => {
  return (
    <div className='m-auto overflow-hidden mt-[-10px] z-[999px]'>
      <div className='m-auto w-[90%] z-[999px] p-8 h-full bg-[rgba(255, 255, 255, 0.50)] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
        <input placeholder='Locations (any)' className='bg-white border border-[#ECECEC] rounded-xl w-[15%] p-4' />
      </div>
    </div>
  );
};

export default Search;
