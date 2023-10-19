import React, { useEffect, useState } from 'react';
import Formulary from '../components/Formulary';

function Contact() {

    return (
        <div className='bg-black pt-32 2xl:h-[calc(100vh-304px)] h-fit w-screen flex flex-col items-center justify-center'>
            <div className='text-4xl font-poppins text-white'>CONTACT US</div>
			<Formulary />
			
		</div>
    );

}

export default Contact;