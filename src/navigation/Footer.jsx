import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';
import navarLogo from '../assets/navarIconNoBg.png'
import { BsTelephone } from 'react-icons/bs'
import { LuMail } from 'react-icons/lu'


const classNameLinks = "no-underline text-logo-white hover:text-logo w-fit"

const classNameText = "no-underline text-logo-white text-clip w-fit md:hover:text-white"

const icons_color = "white"

const classNameIcons = "no-underline text-logo-white hover:text-logo"

const classNameTitles = "font-bold text-logo-white text-xl mb-2 w-full"

const textColor = "text-logo-white"

const company = [

  { name: 'Home', href: '/', current: 'home' },
  { name: 'Chris\'s Work', href: '/chris-work', current: 'work' },
  { name: 'About Us', href: '/about', current: 'about' },
  { name: 'Contact', href: '/contact', current: 'contact' },
  //{ name: 'Reviews', href: 'reviews'},
]

const chrisWork = [

  { name: 'Marketing', href: '/chris-work/marketing', current: 'chris-work' },
  { name: 'Hype Videos', href: '/chris-work/hype-videos', current: 'chris-work' },
  { name: 'Storytelling', href: '/chris-work/storytelling', current: 'chris-work' },
]

const contact = {
  name: 'Kostianis Productions',
  phone: '+1 (917) 710-2682',
  email: 'contact@kostianisproductions.com',
}

function Footer({ current, setCurrent }) {

  return (
    <>
      <footer className="hidden lg:flex flex-col bg-black bottom-0 font-zenKaku h-fit pb-3 pt-10 w-screen overflow-hidden">
        <div className="w-full pl-20 grid grid-cols-4">
          <div className='flex flex-col mt-2 ml-1 justify-start items-start'>
            <Logo className='-ml-7 -mt-4' width='w-auto' height='h-20' text='ml-[60px] mt-[15px] text-[20px]' setCurrent={() => setCurrent("home")} />
            <p className={`text-xs -mt-3 mb-2 ${textColor}`}>
              © 2023 Kostianis Productions
            </p>
            <a className={`no-underline font-bold text-xs ${textColor} hover:text-logo mb-10`}
              href='/privacy'
              onClick={() => setCurrent('')}>
              Privacy Policy
            </a>

          </div>
          <div className='hidden md:inline'>
            <p className={classNameTitles}>
              Company
            </p>
            <nav className="flex flex-col space-y-1 text-sm">
              {company.map(item => {
                return <a
                  href={item.href}
                  onClick={() => setCurrent(item.current)}
                  className={classNameLinks}> {item.name}</a>
              })}
            </nav>
          </div>
          <div className='hidden md:inline'>
            <p className={classNameTitles}>
              Chris's Work
            </p>
            <nav className="flex flex-col space-y-1 text-sm">
              {chrisWork.map(item => {
                return <a
                  href={item.href}
                  onClick={() => setCurrent(item.current)}
                  className={classNameLinks}> {item.name}</a>
              })}
            </nav>
          </div>

          <div className=''>
            <p className={classNameTitles}>
              Contact
            </p>
            <div className="flex flex-col mt-2 space-y-1 text-[12px] md:text-sm w-full">
              <div className={classNameText}> {contact.name}</div>

              <div className='flex flex-col w-fit'>
                <div className={`${classNameIcons} flex flex-row gap-4 items-center -ml-1 mt-2`}>
                  <div className='flex flex-col'>
                    <a href={`mailto:${contact.email}`} className=''>
                      <LuMail className='fill-white w-6 h-6 text-black hover:fill-logo' />
                    </a>
                    <div className='mt-2 h-[4px] w-full bg-logo' />
                  </div>

                  <div className='flex flex-col'>
                    <a href={`tel:${contact.phone}`} className=''>
                      <BsTelephone className='fill-white w-4 h-4 mx-1 my-1 hover:fill-logo' />
                    </a>
                    <div className='mt-2 h-[4px] w-full bg-logo' />
                  </div>
                  <div className='flex flex-col'>
                    <a className={`${classNameIcons} flex flex-row gap-4 items-center`} href='https://www.linkedin.com/company/kostianis-productions/' rel="noreferrer">
                      <svg className="fill-white w-4 h-4 my-1 mx-1 hover:fill-logo" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule='evenodd' clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <div className='mt-2 h-[4px] w-full bg-logo' />
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        <div className='mt-2 flex flex-row justify-center items-center'>
          <span className='font-zenKaku text-sm text-white'>Website by</span>
          <a className='no-underline' href='https://navarsolutions.com'>
            <img src={navarLogo} className='w-20 h-full' />
          </a>
        </div>
      </footer>

      {/* Mobile */}
      <footer className="lg:hidden bg-black bottom-0 font-zenKaku h-fit w-[100vw] overflow-hidden p-4">
        <div className="flex w-full flex-col justify-center items-center gap-2">
          <Logo className='-mb-4' width='w-auto' height='h-24' text='ml-[70px] mt-[17px] text-[24px]' setCurrent={() => setCurrent("home")} />

          <div className={`${classNameIcons} flex flex-row gap-4 items-center`}>
            <div className='flex flex-col'>
              <a href={`mailto:${contact.email}`} className=''>
                <LuMail className='fill-white w-6 h-6 text-black' />
              </a>
              <div className='mt-2 h-[4px] w-full bg-logo' />
            </div>

            <div className='flex flex-col'>
              <a href={`tel:${contact.phone}`} className=''>
                <BsTelephone className='fill-white w-5 h-5 mx-[2px] my-[2px]' />
              </a>
              <div className='mt-2 h-[4px] w-full bg-logo' />
            </div>
            <div className='flex flex-col'>
              <a className={`${classNameIcons} flex flex-row gap-4 items-center`} href='https://www.linkedin.com/company/kostianis-productions/' rel="noreferrer">
                <svg className="fill-white  w-5 h-5 mx-[2px] my-[2px]" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule='evenodd' clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <div className='mt-2 h-[4px] w-full bg-logo' />
            </div>
          </div>

          {/* <a href={`mailto:${contact.email}`} className={`${classNameText}`}><span className='decoration-logo underline-offset-4 underline'>{contact.email}</span></a>

          <a href={`tel:${contact.phone}`} className={`${classNameText}`}><span className='decoration-logo underline-offset-4 underline'>{contact.phone}</span></a> */}

          <div className="flex">


          </div>


          <p className={`text-xs ${textColor}`}>
            © 2023 Kostianis Productions, All Rights Reserved
          </p>
          <div className='flex flex-row gap-1 justify-center items-center'>
            <a className={`no-underline font-bold text-xs ${textColor} hover:text-logo`}
              href='/privacy'
              onClick={() => setCurrent('')}>
              Privacy Policy -
            </a>
            <div className='flex flex-row justify-center items-center'>
              <span className='font-zenKaku text-xs text-white'>Website by</span>
              <a className='no-underline' href='https://navarsolutions.com'>
                <img src={navarLogo} className='w-20 h-full' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;

