import React, { useEffect, useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import Intro from '../components/Intro';
import NavbarTail from '../navigation/NavBar';
import Team from '../components/Team';
import VideoWork from '../components/VideoWork';
import clapboard from '../assets/Clapboard.svg'
import Logos from '../components/Logos';

function Home() {

	const underlineStyleC = {
		background: 'linear-gradient(90deg, rgba(192,192,0,1) 14%, rgba(192,192,192,1) 14%, rgba(192,192,192,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 42%, rgba(0,192,0,1) 42%, rgba(0,192,0,1) 56%, rgba(192,0,192,1) 56%, rgba(192,0,192,1) 70%, rgba(192,0,0,1) 70%, rgba(192,0,0,1) 84%, rgba(0,0,192,1) 84%'
	}

	return (
		<div className='bg-white h-fit w-screen'>
			<HeroVideo />
			{/* <img src={clapboard} className='mx-auto w-full' /> */}
			<div className='flex flex-row grow w-full h-[70px]'>
				<div className='bg-white h-full w-[60%]' />
				<div
					className='h-full w-[40%]'
					style={underlineStyleC}
				/>
			</div>
			<Intro />
			<div className='flex flex-row grow w-full h-[70px] mt-20'>
				<div
					className='h-full w-[40%]'
					style={underlineStyleC}
				/>
				<div className='white h-full w-[60%]' />
			</div>
			<VideoWork />

			<Logos/>
		</div>

	)

}

export default Home;