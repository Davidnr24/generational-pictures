
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
import logo11 from '../assets/logos/logo11.jpg';
import logo12 from '../assets/logos/logo12.png';
import logo13 from '../assets/logos/logo13.png';





export default function Logos() {

  const logosWidth = 'w-48'

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13
  ]

  return (
    <div className="mt-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center'>
        <div className="font-poppins text-[50px] text-black">
          Some of Chris’s recent clients
        </div>
        <div className='bg-logo w-full h-[5px]'/>
        </div>
        
        <div className="bg-white pt-10">
          <div className="grid grid-cols-6 gap-2 justify-center items-center">
            {logos.map((logo) => {
              return <div className="p-4">
                <img src={logo} className={logosWidth} alt="" />
              </div>
            }

            )}

          </div>
        </div>
      </div>
    </div>
  )
}