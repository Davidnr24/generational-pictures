import React, { useEffect, useState } from 'react';
import VideoComp from '../components/VideoComp';
import VideoWork from '../components/VideoWork';

export default function ChrisWork() {

    const whiteBackground = 'text-logo [text-shadow:3px_0px_0px_rgba(255,255,255,1),0px_3px_0px_rgba(255,255,255,1),-3px_0px_0px_rgba(255,255,255,1),0px_-3px_0px_rgba(255,255,255,1),3px_3px_0px_rgba(255,255,255,1)]'

    return (
        <div className='flex pt-[85px] bg-black flex-col justify-center items-center min-h-[100vh] px-5'>
            <div className='flex flex-col w-fit mt-4'>
                <h1 className='relative font-zenKaku font-extrabold text-4xl text-white'>
                    {/* <span className={`${whiteBackground}`}>C</span>hris<span className={`${whiteBackground}`}>'</span>s Work */}

                    What we can do
                </h1>
                <div className='w-full h-[5px] bg-logo'/>
            </div>

            <h3 className="text-white font-zenKaku font-extralight mt-5 mb-12 text-2xl">Co-founder & Emmy-Award-winning Director of Photography, Chris Kostianis</h3>
            <VideoWork hidden={true} width={"w-full"}/>

        </div>
    );

}