import React, { useEffect, useState } from 'react';
import VideoComp from '../components/VideoComp';
import VideoWork from '../components/VideoWork';

export default function ChrisWork() {

    const whiteBackground = 'text-logo [text-shadow:3px_0px_0px_rgba(255,255,255,1),0px_3px_0px_rgba(255,255,255,1),-3px_0px_0px_rgba(255,255,255,1),0px_-3px_0px_rgba(255,255,255,1),3px_3px_0px_rgba(255,255,255,1)]'

    return (
        <div className='flex pt-[80px] bg-black flex-col justify-center items-center min-h-[100vh]'>
            <h1 className='relative font-zenKaku font-extrabold text-4xl text-white'>
                {/* <span className={`${whiteBackground}`}>C</span>hris<span className={`${whiteBackground}`}>'</span>s Work */}
                
                Chris's Work
            </h1>
            <h3 className="text-white font-zenKaku font-extralight mt-2 mb-12 text-2xl">Emmy-Award-Winning Director of Photography</h3>
            <VideoWork hidden={true} />

        </div>
    );

}