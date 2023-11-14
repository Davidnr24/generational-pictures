
import logo1 from '../assets/logos/logo1.jpg';
import logo2 from '../assets/logos/logo2.jpeg';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';
import logo5 from '../assets/logos/logo5.png';
import logo6 from '../assets/logos/logo6.jpg';
import logo7 from '../assets/logos/logo7.png';
import logo8 from '../assets/logos/logo8.png';
import logo9 from '../assets/logos/logo9.gif';
import logo10 from '../assets/logos/logo10.png';
import logo11 from '../assets/logos/logo11.png';
// import logo12 from '../assets/logos/logo12.';
// import logo13 from '../assets/logos/logo13.png';
import Slider from 'react-infinite-logo-slider'
import React, { useState, useEffect } from "react";




export default function Logos() {

  const logosWidth = 'w-28 h-28 md:w-40 md:h-40 mx-auto object-contain'

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11
    // , logo12, logo13
  ]

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 750);
  };

  useEffect(() => {
    // Set initial screen size
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-white pt-5 pb-2 lg:pt-10 lg:pb-10">
      <div className="flex flex-col items-center mb-10">
        <div className='flex flex-col'>
          <div className="font-zenKaku text-[30px] font-bold text-black">
            Chris's Recent Clients:
          </div>
          {/* <div className='bg-logo w-full h-[2px]' /> */}
        </div>
      </div>
      <Slider className='mx-10 bg-white '
        width={isLargeScreen ? "250px" : "175px"}
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