import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';
import navarLogo from '../assets/navarIconNoBg.png'


const classNameLinks = "no-underline text-logo-white hover:text-logo w-fit"

const classNameText = "no-underline text-logo-white w-fit"

const icons_color = "white"

const classNameIcons = "no-underline text-logo-white hover:text-logo"

const classNameTitles = "font-bold text-logo-white text-xl mb-2 w-fit"

const textColor = "text-logo-white"

const company = [

  { name: 'Home', href: 'kostianis-web/', current: 'home' },
  { name: 'Chris\'s Work', href: 'kostianis-web/work', current: 'work' },
  { name: 'About Us', href: 'kostianis-web/about', current: 'about' },
  { name: 'Contact', href: 'kostianis-web/contact', current: 'contact' },
  //{ name: 'Reviews', href: 'reviews'},
]

const chrisWork = [

  { name: 'Marketing', href: 'kostianis-web/chris-work/marketing', current: 'chris-work' },
  { name: 'Hype Videos', href: 'kostianis-web/chris-work/hype-videos', current: 'chris-work' },
  { name: 'Storytelling', href: 'kostianis-web/chris-work/story-telling', current: 'chris-work' },
]

const contact = {
  name: 'Kostianis Productions',
  phone: '+1 (917) 710-2682',
  email: 'contact@kostianisproductions.com',
}

function Footer({ current, setCurrent }) {

  return (
    <footer className="bg-black bottom-0 font-zenKaku h-fit">
      <div className="px-22 pt-4 pb-3 mx-auto sm:px-6 lg:px-8">
        <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <div className='flex flex-col mt-2 ml-1 justify-start items-start'>
            <Logo className='-ml-7 -mt-4' width='w-auto' height='h-20' text='ml-[60px] mt-[15px] text-[20px]' setCurrent={() => setCurrent("home")} />
            <p className={`text-xs -mt-3 mb-2 ${textColor}`}>
              © 2023 Kostianis Productions
            </p>
            <Link className={`no-underline font-bold text-xs ${textColor} hover:text-logo mb-10`}
              to='/kostianis-web/privacy'
              onClick={() => setCurrent('')}>
              Privacy Policy
            </Link>

          </div>
          <div className='hidden md:inline'>
            <p className={classNameTitles}>
              Company
            </p>
            <nav className="flex flex-col space-y-1 text-sm">
              {company.map(item => {
                return <Link
                  to={item.href}
                  onClick={() => setCurrent(item.current)}
                  className={classNameLinks}> {item.name}</Link>
              })}
            </nav>
          </div>
          <div className='hidden md:inline'>
            <p className={classNameTitles}>
              Chris's Work
            </p>
            <nav className="flex flex-col space-y-1 text-sm">
              {chrisWork.map(item => {
                return <Link
                  to={item.href}
                  onClick={() => setCurrent(item.current)}
                  className={classNameLinks}> {item.name}</Link>
              })}
            </nav>
          </div>
          <div className=''>
            <p className={classNameTitles}>
              Contact
            </p>
            <div className="flex flex-col mt-2 space-y-1 text-sm w-fit">
              <span className={classNameText}> {contact.name}</span>
              <span className={classNameText}> {contact.phone}</span>
              <span className={classNameText}> {contact.email}</span>
              <div className="flex">
                <a className={`${classNameIcons} flex flex-row gap-2`} href='https://www.linkedin.com/company/kostianis-productions/' rel="noreferrer">
                  <span className="sr-only"> Linkedin </span>
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule='evenodd' clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span> Linkedin</span>
                </a>
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

      </div>
    </footer>
  )
}

export default Footer;

