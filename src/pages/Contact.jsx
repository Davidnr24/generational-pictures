import React from 'react';
import Formulary from '../components/Formulary';
import ContactCard from '../components/ContactCard';

export default function Contact() {

  return (
    <div className='min-h-[100vh] w-screen'>
      <div className='w-full h-[85px] bg-black' />
      <div className='bg-white h-fit w-screen flex flex-col items-center justify-center'>
        <div className='text-4xl font-zenKaku my-10 text-black font-semibold'>
          CONTACT <span className='text-logo'> US</span>
        </div>
        <div className='flex md:flex-row flex-col h-full md:items-stretch items-center justify-center border-[1px] mb-10 bg-gray-100 rounded-xl'>
          <ContactCard />
          <Formulary />
        </div>
      </div>
    </div>
  );
}
