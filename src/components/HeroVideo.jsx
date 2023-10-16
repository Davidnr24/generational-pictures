import hero_video from '../assets/hero_video.mp4';
import ReactPlayer from 'react-player';


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

				/>
				<div className="absolute flex justify-start items-center w-full h-full grow top-0 left-0 bg-black/50 text-logo-white">
					<h1 className="text-logo-white text-[10vw] pl-20 xl:pl-32 xl:text-[4vw] xl:max-w-[50vw] md:pl-32 md:text-[4vw] md:max-w-[60vw] h-fit font-poppins">
						AN EMERGING VIDEO PRODUCTION HOUSE
					</h1>
				</div>


			</div>



		</div>
		// <div
		// 	style={{
		// 		backgroundImage: `linear-gradient(rgba(191, 244, 229, 0.25), rgba(0, 0, 0, 0.6)), url(${hero_video})`
		// 	}}
		// 	className="flex shadow-2xl 2xl:h-3/5 my-[80px] min-h-[90vh] 2xl:min-h-[70vh] rounded-md w-auto max-w-max mx-auto bg-cover 
		// 	bg-center bg-no-repeat text-white">
		// 	<div className="flex h-full w-full justify-start self-end items-end lg:pl-20 md:pl-5 sm:pl-0 pb-10">
		// 		<div className='flex flex-col justify-center items-center gap-20'>
		// 			<div
		// 				// style={{
		// 				// 	background: `radial-gradient(circle, rgba(0,40,63,1) 30%, rgba(159,174,183,1) 100%)`
		// 				// }}
		// 				className="text-center rounded-md p-2">
		// 				<h1 className="text-7xl text-logo-white font-oxygen font-light mb-4">Software Specialists</h1>
		// 				<p className="text-2xl text-logo-white font-oxygen">Your business matters</p>
		// 			</div>
		// 			<a
		// 				href='contact'
		// 				className="w-3/5 block bg-logo-main font-oxygen text-logo-white no-underline font-medium text-center
		// 					text-xl py-4 rounded-md hover:shadow-lg hover:text-logo-main hover:scale-105 transition duration-300 ease-in-out hover:bg-logo-secLight"
		// 			>Contact us!
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
	)
}

