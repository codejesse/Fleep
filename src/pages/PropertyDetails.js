import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import home1 from "../assets/img/houses/home1.png"
import bath from "../assets/bath.svg";
import bed from "../assets/bed.svg"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

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
          <div className="mx-auto w-full max-w-md rounded-2xl bg-white mt-8">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Description of property</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>Do you offer technical support?</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    No.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
