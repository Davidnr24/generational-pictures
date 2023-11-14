import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	GlobeAltIcon,
	CodeBracketIcon,
	RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import storytelling_image from '../assets/storytelling.png';


export default function VideoWorkCard({ name, subtitle, imageC, href, avg_color, setCurrent }) {

	return (
		<>
			<Link
				to={href}
				className='lg:flex hidden group/work relative aspect-w-3 aspect-w-4 w-full shadow-xl transition duration-500 overflow-hidden border-[1px] border-white'
				onClick={() => setCurrent("chris-work")}>
				<img
					src={imageC} className="h-full w-full object-cover group-hover/work:scale-110 transition duration-300"
				/>
				<div className={`absolute top-0 left-0 items-start z-2 w-full h-full ${avg_color} flex flex-col justify-end
			group-hover/work:bg-transparent transition duration-500`}>
					<div className='flex flex-col border-logo-white ml-10 mb-3 p-3 border-[1px] group-hover/work:bg-black group-hover/work:border-logo transition-all duration-300'>
						<div className='text-logo-white text-2xl'>{name}</div>
					</div>
				</div>
			</Link>
			<Link
				to={href}
				className='lg:hidden group/work relative aspect-w-3 aspect-w-4 w-full shadow-xl transition duration-500 overflow-hidden border-[1px] border-white'
				onClick={() => setCurrent("chris-work")}>
				<img
					src={imageC} className="h-full w-full object-cover group-hover/work:scale-110 transition duration-300"
				/>
				<div className={`absolute top-0 left-0 items-start z-2 w-full h-full ${avg_color} flex flex-col justify-end bg-transparent`}>
					<div className='flex flex-col ml-5 md:ml-10 mb-3 p-3 border-[1px] bg-black border-logo'>
						<div className='text-logo-white text-xl md:text-3xl'>{name}</div>
					</div>
				</div>
			</Link>
		</>


	)
}
