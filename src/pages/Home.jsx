import React, { useEffect, useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import Intro from '../components/Intro';
import NavbarTail from '../navigation/NavBar';
import Team from '../components/Team';
import VideoWork from '../components/VideoWork';
import clapboard from '../assets/Clapboard.svg'

function Home() {

	return (
		<div className='bg-white h-fit w-screen'>
			<HeroVideo />
			<img src={clapboard} className='mx-auto w-full' />
			<Intro/>
			<div className='h-20'/>
			<VideoWork />
			<div className='h-20'/>
		</div>

	)

}

export default Home;