import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	GlobeAltIcon,
	CodeBracketIcon,
	RocketLaunchIcon
} from '@heroicons/react/24/outline'
import VideoWorkCard from './VideoWorkCard';
import marketing_image from '../assets/marketing.png';
import hype_image from '../assets/hypevideos.png';
import storytelling_image from '../assets/storytelling.png';
import { Link } from 'react-router-dom';


const works = [


	{
		name: 'Marketing',
		subtitle: 'Brief description',
		href: '/chris-work/marketing',
		image: marketing_image,
		avg_color: "bg-[#584f55]/50"
	},
	{
		name: 'Hype Videos',
		subtitle: 'Brief description',
		href: '/chris-work/hype-videos',
		image: hype_image,
		avg_color: "bg-[#3f3862]/50"
	},
	{
		name: 'Storytelling',
		subtitle: 'Brief description',
		href: '/chris-work/storytelling',
		image: storytelling_image,
		avg_color: "bg-[#736969]/50"
	},
]




export default function VideoWork({ setCurrent, hidden = false, width }) {


	return (
		<div className="w-full bg-black font-zenKaku overflow-hidden pb-48">
			<div className="">
				<div>
					{!hidden && <div className="text-center pt-0 pb-10 md:pb-20 lg:pt-20 lg:pb-20 flex justify-center items-center">

						<a href='/chris-work'
							className='hidden group/chris lg:flex flex-col w-fit justify-center items-center no-underline px-3'>
							<div className='font-zenKaku text-4xl text-white font-bold no-underline'>
								Emmy-Award-Winning Director of Photography
							</div>
							<div className='w-[50%] lg:w-[30%] mt-2 h-[5px] lg:self-start group-hover/chris:w-full transition-all duration-50 bg-logo' />
						</a>


						<div className='lg:hidden group/chris flex flex-col w-fit justify-center items-center no-underline px-3'>
							<div className='font-zenKaku md:text-5xl text-[28px] text-white font-bold no-underline'>
								Emmy-Award-Winning <br />Director of Photography
							</div>
							{/* <div className='w-full lg:w-[30%] mt-3 h-[5px] lg:self-start group-hover/chris:w-full transition-all duration-50 bg-logo' /> */}

						</div>
					</div>}
					<div
						className="grid z-0 grid-cols-1 lg:grid-cols-3 justify-evenly gap-10 lg:gap-3"
					>
						{works.map((work) => (
							<VideoWorkCard
								name={work.name}
								subtitle={work.subtitle}
								imageC={work.image}
								href={work.href}
								avg_color={work.avg_color}
								setCurrent={setCurrent}
								width={width}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
