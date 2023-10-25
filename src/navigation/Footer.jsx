import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../assets/kostianis_logo.png';
import { Link } from 'react-router-dom';


const classNameLinks = "no-underline text-logo-white hover:text-logo w-fit"

const icons_color = "white"

const classNameIcons = "no-underline text-logo-white hover:text-logo"

const classNameTitles = "font-bold text-logo-white text-xl"

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
  { name: 'Story Telling', href: 'kostianis-web/chris-work/story-telling', current: 'chris-work' },
]

const contact = {
  name: 'Chris Kostianis',
  phone: '+1 (555)-555-5555',
  email: 'email@kostianis.com',
  address: '555 Street Name, ST, 55555, United States'
}

function Footer({ current, setCurrent }) {

  return (
    <footer className="bg-black bottom-0 font-notoSans">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className='flex flex-col justify-start items-start'>
            <Link to="/" className="">
              <img className="h-20 w-auto" src={logo} alt="" />
            </Link>
            <div className="flex mt-4 space-x-6">
              <a className={`${classNameIcons} flex flex-row gap-2`} href='https://www.linkedin.com/company/kostianis-productions/' rel="noreferrer">
                <span className="sr-only"> Linkedin </span>
                <svg className="w-6 h-6" fill={icons_color} viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule='evenodd' clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span> Linkedin</span>
              </a>
            </div>
            <p className={`mt-8 text-xs ${textColor}`}>
              © 2023 Kostianis Productions
            </p>
            <Link className={`no-underline font-bold text-xs ${textColor} hover:text-logo`}
              to='/kostianis-web/privacy-policy'>
              Privacy Policy
            </Link>
          </div>
          <div>
            <p className={classNameTitles}>
              Company
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm">
              {company.map(item => {
                return <Link
                  to={item.href}
                  onClick={() => setCurrent(item.current)}
                  className={classNameLinks}> {item.name}</Link>
              })}
            </nav>
          </div>
          <div>
            <p className={classNameTitles}>
              Chris's Work
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm">
              {chrisWork.map(item => {
                return <Link
                  to={item.href}
                  onClick={() => setCurrent(item.current)}
                  className={classNameLinks}> {item.name}</Link>
              })}
            </nav>
          </div>
          <div>
            <p className={classNameTitles}>
              Contact
            </p>
            <div className="flex flex-col mt-4 space-y-2 text-sm">
              <span className={classNameLinks}> {contact.name}</span>
              <span className={classNameLinks}> {contact.phone}</span>
              <span className={classNameLinks}> {contact.email}</span>
              <span className={classNameLinks}> {contact.address}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;

