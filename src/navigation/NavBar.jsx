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
import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';



const work = [

  { name: 'Marketing', description: '', href: '/chris-work/marketing', icon: PresentationChartLineIcon },
  { name: 'Storytelling', description: '', href: '/chris-work/storytelling', icon: BookOpenIcon },
  { name: 'Hype Videos', description: '', href: '/chris-work/hype-videos', icon: SparklesIcon },
  
]

const underlineStyleC = {
  background: 'linear-gradient(90deg, rgba(192,192,0,1) 14%, rgba(192,192,192,1) 14%, rgba(192,192,192,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 42%, rgba(0,192,0,1) 42%, rgba(0,192,0,1) 56%, rgba(192,0,192,1) 56%, rgba(192,0,192,1) 70%, rgba(192,0,0,1) 70%, rgba(192,0,0,1) 84%, rgba(0,0,192,1) 84%'
}

const font = "font-zenKaku"
const colorUnderline = "bg-logo-white "
const navBarElementsStyle = "text-lg " + font + " font-bold text-logo-white leading-6 no-underline"
const navBarElementsStyleMobile = "py-2 mx-3 text-base " + font + "font-bold text-logo-white leading-6 no-underline"
const navBarElementsStyleMobileHover = "hover:bg-logo-white hover:text-black"
const underlineStyle = "max-w-0 mt-2 h-1 group-hover:max-w-full transition-all duration-50 bg-logo"

const navBarElements = [

  { name: 'Home', href: '/', current: 'home' },
  { name: 'Chris\'s Work', href: '/chris-work', current: 'chris-work' },
  { name: 'About Us', href: '/about', current: 'about' },
  { name: 'Let\'s Talk', href: '/contact', current: 'contact' },
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
      setNavBarColor('bg-black')
    } else {
      setNavBarColor('bg-transparent')
    }
  }

  window.addEventListener('scroll', changeNavBarColor)


  return (
    <header className={`${navBarColor} z-10 fixed top-0 w-[100vw] h-[80px] max-h-[80px]`}>
      <nav className="sticky top-0 mx-auto text-logo-white flex items-center justify-between h-full xl:px-44 md:px-[70px] px-6" aria-label="Global">
        {
          //logo
        }
        <Logo setCurrent={() => setCurrent("home")} className='w-auto h-16' height='h-16' width='w-auto' text='text-[16px] mt-[12px] ml-[45px]' />
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
                  <Link
                    to={item.href}
                    className='no-underline'
                    onClick={() => setCurrent("chris-work")}
                  >
                    <div className={`transition ease-in-out duration-500 ${font} flex items-center gap-x-1 leading-6`}>
                      <span className={navBarElementsStyle}> {item.name} </span>
                      <ChevronDownIcon
                        className={`h-5 w-5 flex-none  ${isOpen ? 'rotate-180 text-logo' : 'text-logo-white'}  transition-all duration-300" aria-hidden="true" `}
                      />

                    </div>
                    {current == item.current &&
                      <div className={`${underlineStyle} mt-2 h-1 max-w-full`}
                      /> ||
                      <div className={underlineStyle}
                      />}
                  </Link>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  show={isOpen}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterhref="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leavehref="opacity-0 translate-y-1"
                >
                  <Popover.Panel
                    static
                    className="absolute -left-0 top-full z-10 font-zenKaku  
                  "
                    onMouseEnter={() => setisOpen(true)}
                    onMouseLeave={() => setisOpen(false)}
                  >
                    <div className=' bg-black border-2 mt-3 w-[250px] rounded-sm border-logo-white shadow-lg'>
                      <div className="p-2 flex flex-col w-full">
                        {work.map((item) => (
                          <div
                            key={item.name}
                            className="group/pop relative flex items-center rounded-none p-2 text-md leading-6 hover:bg-logo-white"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg group-hover/pop:bg-logo-white">
                              <item.icon className="h-6 w-6 text-logo-white group-hover/pop:text-logo" aria-hidden="true" />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className={`block ${font} no-underline text-logo-white hover:text-black`}
                                onClick={() => setCurrent("chris-work")}
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                            </div>
                          </div>
                        ))}
                        {/* <div className='relative w-[250px] my-2 mx-auto h-[40px] rounded-sm' style={underlineStyleC} /> */}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>

            }
            else if (item.name == 'Let\'s Talk') {
              return <a href={item.href}
                onClick={() => setCurrent(item.current)}
                className='group/talk transition duration-300 my-4 no-underline'
              // style={underlineStyleC}
              >
                {current == item.current &&
                  <div className={`${navBarElementsStyle} font-bold bg-black text-white p-3 border-[2px] border-logo`}> {item.name} </div> ||

                  <div
                    className={`${navBarElementsStyle} font-bold bg-tranparent border-[2px] border-logo-white group-hover/talk:border-logo  group-hover/talk:bg-black transition-all duration-300
                     p-3 `}

                  > {item.name} </div>

                }
              </a>
            } else {
              return <a href={item.href} onClick={() => setCurrent(item.current)} className='group transition duration-300 py-4 no-underline' >
                <div className={`pt-3 ${navBarElementsStyle}`}> {item.name} </div>
                {current == item.current &&
                  <div className={`${underlineStyle} mt-2 h-1 max-w-full`}
                  // style={underlineStyleC} 
                  /> ||
                  <div className={underlineStyle}
                  // style={underlineStyleC} 
                  />}
              </a>
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
            <Logo setCurrent={() => setCurrent("home")} className='w-auto h-16' height='h-16' width='w-auto' text='text-[16px] mt-[12px] ml-[45px]' />
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
          <div className="mt-6 flex flex-col w-full">
            {navBarElements.map(item => {
              if (item.name == 'Chris\'s Work') {
                return <>
                  <Disclosure as="div" className="focus:outline-none">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className={`flex w-full items-center justify-start gap-2 rounded-lg focus:outline-none
                           pr-3  ${navBarElementsStyleMobile}`}>
                          {item.name}
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180 text-logo' : 'text-logo-white', 'h-5 w-5 flex-none transition-all duration-300')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {work.map((item) => (
                            <a
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block rounded-lg ${navBarElementsStyleMobile} py-2 pl-6 pr-3 no-underline hover:text-white text-sm`}
                            >
                              {item.name}
                            </a>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <div className='w-[80%] mx-3 bg-logo h-[1px]' />
                </>
              } else if (item.name == 'Let\'s Talk') {
                return <a href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='group/talk w-fit transition duration-300 my-3 no-underline'
                // style={underlineStyleC}
                >
                  {current == item.current &&
                    <div className={`${navBarElementsStyleMobile} w-fit font-bold bg-black text-white p-3 border-[2px] border-logo`}> {item.name} </div> ||

                    <div
                      className={`${navBarElementsStyleMobile} font-bold bg-tranparent border-[2px] border-logo-white
                           p-3 `}

                    > {item.name} </div>

                  }
                </a>
              } else {
                return <>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    href={item.href}
                    className={`block rounded-lg ${navBarElementsStyleMobile} pl-0 hover:text-white`}
                  > {item.name}
                  </a>
                  <div className='w-[80%] mx-3 bg-logo h-[1px]' />
                </>
              }
            })}
          </div>
          {/* <div className="">
                <a href='/es/' className="no-underline flex font-semibold items-center justify-start">
                  <span className={`${navBarElementsStyleMobile} font-bold`}>ENG</span>
                </a>
              </div> */}
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}