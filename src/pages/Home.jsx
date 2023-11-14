import React, { useEffect, useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import Intro from '../components/Intro';
import NavbarTail from '../navigation/NavBar';
import Team from '../components/Team';
import VideoWork from '../components/VideoWork';
import clapboard from '../assets/Clapboard.svg'
import Logos from '../components/Logos';

function Home({ setCurrent }) {

	const underlineStyleColor = {
		background: 'linear-gradient(90deg, rgba(192,192,192,1) 14.29%, rgba(192,192,0,1) 14.29%, rgba(192,192,0,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 43%, rgba(0,192,0,1) 43%, rgba(0,192,0,1) 57%, rgba(192,0,192,1) 57%, rgba(192,0,192,1) 71%, rgba(192,0,0,1) 71%, rgba(192,0,0,1) 86.5%, rgba(0,0,192,1) 86%)'
	}

	const underlineStyleGray = {
		background: 'linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(28,28,28,1) 10%, rgba(28,28,28,1) 20%, rgba(56,56,56,1) 20%, rgba(56,56,56,1) 30%, rgba(85,85,85,1) 30%, rgba(85,85,85,1) 40%, rgba(113,113,113,1) 40%, rgba(113,113,113,1) 50%, rgba(141,141,141,1) 50%, rgba(141,141,141,1) 60%, rgba(170,170,170,1) 60%, rgba(170,170,170,1) 70%, rgba(198,198,198,1) 70%, rgba(198,198,198,1) 80%, rgba(226,226,226,1) 80%, rgba(226,226,226,1) 90%, rgba(255,255,255,1) 90%)'
	}

	{/* <div
					className='hidden lg:flex min-h-[20px] w-[66%] self-end relative md:mb-0 mb-10'
					style={underlineStyleColor}
				>
					<div className='w-full h-full bg-black/20 top-0 left-0 absolute' />
				</div> */}


	return (
		<div className='bg-black h-fit w-screen '>
			<HeroVideo />
			{/* <img src={clapboard} className='mx-auto w-full' /> */}
			{/* <div className='md:min-h-[calc(100vh-150px)] flex flex-col w-full justify-between '> */}
			<div className=' pl-4 pr-4 md:pl-10 md:pr-10 lg:pl-0 lg:pr-0'>

				<div className='min-h-[calc(100vh)] flex flex-col w-full justify-evenly'>
					<Intro />


					{/* Laptop */}
					<div className='hidden lg:flex flex-row items-center gap-3 justify-center w-full my-b'>
						<p className='h-fit w-fit lg:text-center px-4 text-white font-zenKaku text-2xl'>Our multicultural identities inform the way we operate: with an above and beyond mindset. <span className='text-logo'>Never settling for ordinary.</span></p>
					</div>

					{/* Mobile */}
					<div className='lg:hidden flex flex-col md:pb-48 md:py-48 py-48'>
						<div
							className='flex h-[1px] w-[66%] bg-logo self-center'
						/>

						<div className='flex flex-row items-center gap-3 justify-center w-full pb-10 py-10'>
							<p className='h-fit w-fit text-center text-white font-zenKaku text-2xl'>Our multicultural identities inform the way we operate: with an above and beyond mindset. <span className='font-bold'><br className='md:hidden' />Never settling for ordinary.</span></p>
						</div>

						<div
							className='flex h-[1px] w-[66%] bg-logo self-center'
						/>
					</div>
				</div>



				<VideoWork setCurrent={setCurrent} />




			</div>
			<Logos />
		</div>

	)

}

export default Home;