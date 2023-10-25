import React, { useEffect, useState } from 'react';
import VideoComp from '../components/VideoComp';

const videos = [
    {
        title: 'New York Islanders, Media Day (BTS)',
        url: 'https://vimeo.com/861674202'
    },
    {
        title: 'LG Electronics, March Madness',
        url: 'https://vimeo.com/170016011'
    },
    {
        title: 'The Brooklyn Nets, Game Opener',
        url: 'https://vimeo.com/170018343'
    },

]


export default function HypeVideos() {

    

    return (
        <div className='font-notoSans min-h-[calc(100vh-304px)]'>
            <div className='w-full h-[112px] bg-black' />
            <div className='flex flex-col justify-center items-center gap-4 my-20'>
                <h1 className='font-extrabold text-black'><span className='text-logo'>H</span>ype
                <span className='text-logo'> V</span>ideos</h1>
                <h2 className=''>Chris Kostianis, Director of Photography</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    {videos.map(video => {
                        return <VideoComp
                            title={video.title}
                            url={video.url}/>
                    }
                    )}

                </div>
            </div>
        </div>
    );

}