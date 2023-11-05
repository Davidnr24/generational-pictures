
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';
import logo5 from '../assets/logos/logo5.jpg';
import logo6 from '../assets/logos/logo6.png';
import logo7 from '../assets/logos/logo7.png';
import logo8 from '../assets/logos/logo8.png';
import logo9 from '../assets/logos/logo9.png';
import logo10 from '../assets/logos/logo10.png';
import logo11 from '../assets/logos/logo11.png';
import logo12 from '../assets/logos/logo12.png';
import logo13 from '../assets/logos/logo13.png';
import Slider from 'react-infinite-logo-slider'
import React, { useState } from "react";




export default function Logos() {

  const logosWidth = 'w-fit h-24 m-auto object-contain'

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13
  ]

  return (
    <div className="bg-white py-10">
      <div className="flex flex-col items-center mb-10">
        <div className='flex flex-col'>
          <div className="font-zenKaku text-[30px] font-bold text-black">
            Chris<span className='text-logo'>'</span>s Recent Clients<span className='text-logo'>:</span>
          </div>
          {/* <div className='bg-logo w-full h-[2px]' /> */}
        </div>
      </div>
      <Slider className='mx-10 bg-white py-10'
        width="250px"
        duration={40}
        pauseOnHover={false}
        blurBoderColor={'#fff'}
      >
        {logos.map((logo, index) => {
          return <Slider.Slide className='py-10 bg-white'>
            <img src={logo} key={index} className={logosWidth} alt="la imagen no funciona" />
          </Slider.Slide>
        }
        )}
      </Slider>
    </div>
  )
}