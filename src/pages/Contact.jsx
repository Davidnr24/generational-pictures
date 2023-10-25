import React, { useEffect, useState } from 'react';
import Formulary from '../components/Formulary';
import ContactCard from '../components/ContactCard';

function Contact() {

  return (
    <div className='min-h-[calc(100vh-304px)]'>
      <div className='w-full h-[112px] bg-black' />
      <div className='bg-white h-fit w-screen flex flex-col items-center justify-center'>
        <div className='text-4xl font-notoSans my-10 text-black font-semibold'>
          <span className='text-logo'>C</span>ONTACT US
        </div>
        <div className='flex flex-row h-full justify-center items-stretch border-[1px] mb-10 bg-gray-100 rounded-xl'>
          <ContactCard />
          <Formulary />
        </div>


      </div>
    </div>

  );

}

export default Contact;