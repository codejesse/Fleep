import React from 'react';
import home1 from "../assets/img/houses/home1.png";
import bed from "../assets/bed.svg";
import bath from "../assets/bath.svg"

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
        <select id="Location" className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5'>
          <option selected>Property type (any)</option>
          <option value="US">Duplex</option>
          <option value="CA">Bungalow</option>
          <option value="FR">Apartments</option>
          <option value="DE">Self-contains</option>
        </select>
        <select id="Location" className='bg-white border border-[#ECECEC] rounded-2xl w-[25%] p-5'>
          <option selected>Price range</option>
          <option value="US">Duplex</option>
          <option value="CA">Bungalow</option>
          <option value="FR">Apartments</option>
          <option value="DE">Self-contains</option>
        </select>
        <button className='bg-[#252525] w-[13%] rounded-xl text-white'>Search</button>
      </div>

      {/* */}
      <div className=''>
        <div className='p-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 lg:gap-1 mx-auto'>
            <div className='border w-full md:w-[316px] lg:w-[316px] h-[388px] rounded-[15px] m-auto'>
              <div className='m-5 truncate'>
                <img className='rounded-[12px] w-full' src={home1} alt='home' />
                <div className='flex flex-col'>
                  <h1 className='mt-5 text-[15px]'>4 Roosevelt Avenue Portland, CA</h1>
                  <h1 className='text-[15px] font-bold'>$100,000</h1>
                </div>
                <p className='text-[12px] text-[#848484]'>posted by author</p>
                <div className='flex flex-row mt-4 gap-5'>
                  <p className='flex flex-row gap-1'><img src={bed} alt='bed' />6</p>
                  <p className='flex flex-row gap-1'><img src={bath} alt='bath' />2</p>
                </div>
              </div>
            </div>
            <div className='border w-full md:w-[316px] lg:w-[316px] h-[388px] rounded-[15px] m-auto'>
              <div className='m-5 truncate'>
                <img className='rounded-[12px] w-full' src={home1} alt='home' />
                <div className='flex flex-col'>
                  <h1 className='mt-5 text-[15px]'>4 Roosevelt Avenue Portland, CA</h1>
                  <h1 className='text-[15px] font-bold'>$100,000</h1>
                </div>
                <p className='text-[12px] text-[#848484]'>posted by author</p>
                <div className='flex flex-row mt-4 gap-5'>
                  <p className='flex flex-row gap-1'><img src={bed} alt='bed' />6</p>
                  <p className='flex flex-row gap-1'><img src={bath} alt='bath' />2</p>
                </div>
              </div>
            </div>
            <div className='border w-full md:w-[316px] lg:w-[316px] h-[388px] rounded-[15px] m-auto'>
              <div className='m-5 truncate'>
                <img className='rounded-[12px] w-full' src={home1} alt='home' />
                <div className='flex flex-col'>
                  <h1 className='mt-5 text-[15px]'>4 Roosevelt Avenue Portland, CA</h1>
                  <h1 className='text-[15px] font-bold'>$100,000</h1>
                </div>
                <p className='text-[12px] text-[#848484]'>posted by author</p>
                <div className='flex flex-row mt-4 gap-5'>
                  <p className='flex flex-row gap-1'><img src={bed} alt='bed' />6</p>
                  <p className='flex flex-row gap-1'><img src={bath} alt='bath' />2</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-5'>
            <button className='bg-white text-[#252525] text-[12px] border border-[#252525] px-6 py-3 rounded-[10px]'>Load more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
