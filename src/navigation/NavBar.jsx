import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import logo from '../assets/kostianis_logo.png';
import { Link } from 'react-router-dom';
import { usePopper } from 'react-popper';



const work = [

  { name: 'Marketing', description: '', href: '/kostianis-web/chris-work/marketing', icon: PresentationChartLineIcon },
  { name: 'Hype Videos', description: '', href: '/kostianis-web/chris-work/hype-videos', icon: SparklesIcon },
  { name: 'Story Telling', description: '', href: 'kostianis-web/chris-work/story-telling', icon: BookOpenIcon },
]

const underlineStyleC = {
  background: 'linear-gradient(90deg, rgba(192,192,0,1) 14%, rgba(192,192,192,1) 14%, rgba(192,192,192,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 42%, rgba(0,192,0,1) 42%, rgba(0,192,0,1) 56%, rgba(192,0,192,1) 56%, rgba(192,0,192,1) 70%, rgba(192,0,0,1) 70%, rgba(192,0,0,1) 84%, rgba(0,0,192,1) 84%'
}

const font = "font-poppins"
const colorUnderline = "bg-logo-white "
const navBarElementsStyle = "text-xl " + font + " text-logo-white leading-6 no-underline"
const navBarElementsStyleMobile = "py-2 px-3 text-base " + font + " text-logo-white leading-6 no-underline"
const navBarElementsStyleMobileHover = "hover:bg-logo-white hover:text-black"
const underlineStyle = "max-w-0 mt-2 h-1 group-hover:max-w-full group-focus:max-w-0 transition-all duration-50"

const navBarElements = [

  { name: 'Home', href: 'kostianis-web/', current: 'home' },
  { name: 'Chris\'s Work', href: 'kostianis-web/chris-work', current: 'chris-work' },
  { name: 'About Us', href: 'kostianis-web/about', current: 'work' },
  { name: 'Let\'s Talk', href: 'kostianis-web/contact', current: 'contact' },
  //{ name: 'Reviews', href: 'reviews'},
]
const callsToAction = [


  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function NavBar({ current, setCurrent }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navBarColor, setNavBarColor] = useState('bg-transparent')
  const [isOpen, setisOpen] = useState(false)

  const changeNavBarColor = () => {
    if (window.scrollY >= 1) {
      setNavBarColor('bg-black/90')
    } else {
      setNavBarColor('bg-transparent')
    }
  }

  window.addEventListener('scroll', changeNavBarColor)


  return (
    <div className={`${navBarColor} z-10 fixed top-0 w-full`}>
      <nav className="sticky top-0 mx-auto text-logo-white flex items-center justify-between h-auto xl:px-48 px-20" aria-label="Global">
        {
          //logo
        }
        <div className="">
          <Link to="/kostianis-web" onClick={() => setCurrent("home")} className="">
            <img className="h-16 w-auto" src={logo} alt="" />
          </Link>
        </div>
        {
          //mobile menu icon
        }
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-logo-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {
          //navBar elements desktop
        }
        <Popover.Group className="hidden lg:flex lg:gap-x-12 justify-center items-center">
          {
            //navBar elements
          }
          {navBarElements.map(item => {
            if (item.name == 'Chris\'s Work') {
              return <Popover className="relative group" open={isOpen}>

                <Popover.Button
                  className="mt-3 focus:outline-none"
                  onMouseEnter={() => setisOpen(true)}
                  onMouseLeave={() => setisOpen(false)}
                >
                  <Link to={item.href} className='no-underline'>
                    <div className={`transition ease-in-out duration-500 ${font} flex items-center gap-x-1 leading-6`}>
                      <span className={navBarElementsStyle}> {item.name} </span>
                      <ChevronDownIcon 
                      className={`h-5 w-5 flex-none text-white ${isOpen ? 'rotate-180':''} transition duration-300" aria-hidden="true" `}
                      />
                      
                    </div>
                    <div className={underlineStyle}
                      style={underlineStyleC} />
                  </Link>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  show={isOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    static
                    className="absolute -left-0 top-full z-10 font-poppins  
                  "
                    onMouseEnter={() => setisOpen(true)}
                    onMouseLeave={() => setisOpen(false)}
                  >
                    <div className=' bg-black border-2 mt-3 w-[300px] rounded-sm border-logo-white shadow-lg'>
                      <div className="p-2 flex flex-col w-full">
                        {work.map((item) => (
                          <div
                            key={item.name}
                            className="group/pop relative flex items-center gap-x-6 rounded-none p-4 text-md leading-6 hover:bg-logo-white"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover/pop:bg-logo-white">
                              <item.icon className="h-6 w-6 text-logo-white group-hover/pop:text-black" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                              <Link to={item.href} className={`block ${font} no-underline text-logo-white hover:text-black`}>
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                            </div>
                          </div>
                        ))}
                        <div className='relative w-[250px] my-2 mx-auto h-[40px] rounded-sm' style={underlineStyleC} />
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

            }
            else if (item.name == 'Let\'s Talk') {
              return <Link to={item.href}
                onClick={() => setCurrent(item.current)}
                className='group/talk transition duration-300 my-4 no-underline'
                style={underlineStyleC}
              >
                {current == item.current &&
                  <div className={`${navBarElementsStyle} border-black bg-white text-black m-1 p-3`}> {item.name} </div> ||

                  <div
                    className={`${navBarElementsStyle} bg-logo-black  group-hover/talk:text-black group-hover/talk:bg-white transition duration-300
                    m-1 p-3 `}

                  > {item.name} </div>

                }
              </Link>
            } else {
              return <Link to={item.href} onClick={() => setCurrent(item.current)} className='group transition duration-300 py-4 no-underline' >
                <div className={`pt-3 ${navBarElementsStyle}`}> {item.name} </div>
                {current == item.current &&
                  <div className={`mt-2 h-1 max-w-full`}
                    style={underlineStyleC} /> ||
                  <div className={underlineStyle}
                    style={underlineStyleC} />}
              </Link>
            }
          }
          )}



        </Popover.Group>


      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {
            //logo and X
          }
          <div className="flex items-center justify-between">
            <Link to="/kostianis-web" onClick={() => setMobileMenuOpen(false)} className="">
              <img className="h-12 w-auto" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-logo-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {
            //navbar elements
          }
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navBarElements.map(item => {
                  if (item.name == 'Chris\'s Work') {
                    return <Disclosure as="div" className="focus:outline-none">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className={`flex w-full items-center justify-between rounded-lg focus:outline-none
                           pr-3.5 ${navBarElementsStyleMobile} ${navBarElementsStyleMobileHover}`}>
                            {item.name}
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {work.map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="Link"
                                to={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block rounded-lg ${navBarElementsStyleMobile} ${navBarElementsStyleMobileHover} py-2 pl-6 pr-3 no-underline text-sm`}
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  } else {
                    return <Link
                      onClick={() => setMobileMenuOpen(false)}
                      to={item.href}
                      className={`block rounded-lg ${navBarElementsStyleMobile} ${navBarElementsStyleMobileHover}`}
                    > {item.name}
                    </Link>
                  }
                })}
              </div>
              <div className="">
                <Link to='/es/' className="no-underline flex font-semibold items-center justify-start">
                  <span className={`${navBarElementsStyleMobile} font-bold`}>ENG</span>
                  {/* <img className="h-3 w-auto mx-2" src={flag} alt="" /> */}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}