import React, { useEffect, useState } from 'react';
import HeroVideo from '../components/HeroVideo';
import Services from '../components/Services';
import Intro from '../components/Intro';
import NavbarTail from '../navigation/NavBar';
import Team from '../components/Team';

function Home() {

	return (
		<div className='bg-white h-fit w-screen'>
			<HeroVideo />
			<Intro/>
			<div className='h-20'/>
		</div>

	)

}

export default Home;