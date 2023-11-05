import React, { useEffect, useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import Intro from '../components/Intro';
import NavbarTail from '../navigation/NavBar';
import Team from '../components/Team';
import VideoWork from '../components/VideoWork';
import clapboard from '../assets/Clapboard.svg'
import Logos from '../components/Logos';

function Home({setCurrent}) {

	const underlineStyleColor = {
		background: 'linear-gradient(90deg, rgba(192,192,192,1) 14%, rgba(192,192,0,1) 14%, rgba(192,192,0,1) 28%, rgba(0,192,192,1) 28%, rgba(0,192,192,1) 42%, rgba(0,192,0,1) 42%, rgba(0,192,0,1) 56%, rgba(192,0,192,1) 56%, rgba(192,0,192,1) 70%, rgba(192,0,0,1) 70%, rgba(192,0,0,1) 84%, rgba(0,0,192,1) 84%)'
	}

	const underlineStyleGray = {
		background: 'linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(28,28,28,1) 10%, rgba(28,28,28,1) 20%, rgba(56,56,56,1) 20%, rgba(56,56,56,1) 30%, rgba(85,85,85,1) 30%, rgba(85,85,85,1) 40%, rgba(113,113,113,1) 40%, rgba(113,113,113,1) 50%, rgba(141,141,141,1) 50%, rgba(141,141,141,1) 60%, rgba(170,170,170,1) 60%, rgba(170,170,170,1) 70%, rgba(198,198,198,1) 70%, rgba(198,198,198,1) 80%, rgba(226,226,226,1) 80%, rgba(226,226,226,1) 90%, rgba(255,255,255,1) 90%)'
	}

	return (
		<div className='bg-black h-fit w-screen'>
			<HeroVideo />
			{/* <img src={clapboard} className='mx-auto w-full' /> */}
			<div className='flex flex-row justify-between grow w-full h-[20px]'>
				<div className='h-full w-[33%]' />
				<div
					className='h-full w-[66%]'
					style={underlineStyleColor}
				/>
			</div>
			<Intro />
			<div className='flex flex-row justify-between grow w-full h-[20px]'>
				<div
					className='h-full w-[66%]'
					style={underlineStyleGray}
				/>
				<div className='white h-full w-[33%]' />
			</div>
			<VideoWork setCurrent={setCurrent}/>

			<Logos/>
		</div>

	)

}

export default Home;