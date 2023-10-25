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
		href: '/kostianis-web/chris-work/marketing',
		image: marketing_image,
    avg_color: "bg-[#584f55]/50"
	},
	{
		name: 'Hype Videos',
		subtitle: 'Brief description',
		href: '/kostianis-web/chris-work/hype-videos',
		image: hype_image,
    avg_color: "bg-[#3f3862]/50"
	},
	{
		name: 'Story Telling',
		subtitle: 'Brief description',
		href: '/kostianis-web/chris-work/story-telling',
		image: storytelling_image,
    avg_color: "bg-[#736969]/50"
	},
]




export default function VideoWork({setCurrent}) {


	return (
		<div className="w-screen min-h-[100vh] bg-white font-zenKaku overflow-hidden">
			<div className="mx-auto">
				<div>
					<div className="text-center pt-20 pb-10">
						<Link to='/kostianis-web/chris-work' className='group/chris flex flex-col w-fit justify-center items-center no-underline mx-auto'>
							<div className='font-zenKaku text-[42px] text-black font-bold no-underline'> 
							<span className='text-logo'>C</span>hris's work
							</div>
							<div className='w-[30%] mt-2 h-[5px] self-start group-hover/chris:w-full transition-all duration-50 bg-logo'/>
							
						</Link>
					</div>
					<div
						className="grid z-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-evenly gap-3 px-3"
					>
						{works.map((work) => (
							<VideoWorkCard
								name={work.name}
								subtitle={work.subtitle}
								imageC={work.image}
								href={work.href}
                avg_color={work.avg_color}
								setCurrent={setCurrent}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
