import hero_video from '../assets/hero_video.mp4';
import ReactPlayer from 'react-player';
import TitleDomino from './TitleDomino';


export default function HeroVideo() {


	return (
		<div>
			<div className='relative h-[100vh] w-auto'
			>
				<ReactPlayer
					className=""
					url={hero_video}
					playing
					loop
					muted
					width="100%"
					height="100%"
					playsinline={true}

				/>
				<div className="absolute flex justify-start items-center w-full h-full grow top-0 left-0 bg-gradient-to-r from-black to-black/40">
					<div className='flex flex-col justify-center items-start gap-0 lg:gap-20 ml-10 md:ml-20 xl:ml-48'>
						<TitleDomino className="text-logo-white font-bold text-[30px] md:text-[35px] lg:text-[45px] xl:text-[60px] h-fit w-full font-zenKaku"/>
						{/* <h2 className='font-zenKaku text-white text-3xl'>Maypx be some text here?</h2> */}
						<a href='/chris-work' className='no-underline lg:text-xl bg-[transparent] text-white w-auto h-auto p-3 font-zenKaku border-[1px] font-bold border-logo lg:border-logo-white lg:hover:border-logo  lg:hover:bg-black transition-all duration-300'>
							Learn More
						</a>
					</div>
				</div>


			</div>



		</div >
	)
}

