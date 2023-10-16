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


const works = [


	{
		name: 'Marketing',
		subtitle: 'Brief description',
		href: '/work',
		image: marketing_image,
    avg_color: "bg-[#584f55]/50"
	},
	{
		name: 'Hype Videos',
		subtitle: 'Brief description',
		href: '/work',
		image: hype_image,
    avg_color: "bg-[#3f3862]/50"
	},
	{
		name: 'Story Telling',
		subtitle: 'Brief description',
		href: '/work',
		image: storytelling_image,
    avg_color: "bg-[#736969]/50"
	},
]




export default function VideoWork() {


	return (
		<div className="w-full max-w-[2000px] mx-auto h-fit pb-10 bg-white font-poppins overflow-hidden px-10">
			<div className="mx-auto">
				<div>
					<div className="text-center mb-10">
						<div className='font-poppins text-4xl text-black'>
							Chris's work
						</div>
					</div>
					<div
						className="grid z-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-evenly gap-3 pt-10"
					>
						{works.map((work) => (
							<VideoWorkCard
								name={work.name}
								subtitle={work.subtitle}
								imageC={work.image}
								href={work.href}
                avg_color={work.avg_color}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
