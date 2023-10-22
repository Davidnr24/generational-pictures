import React, { useEffect, useState } from 'react';
import VideoComp from '../components/VideoComp';

const videos = [
    {
        title: 'New York Mets, Amazin\' Call Center',
        url: 'https://vimeo.com/861596661'
    },
    {
        title: 'New York Mets, Watch Party',
        url: 'https://vimeo.com/861594566'
    },
    {
        title: 'National Hockey League, GameCenter Live',
        url: 'https://vimeo.com/179695142'
    },
    {
        title: 'Ford, Unsung Extra',
        url: 'https://vimeo.com/170016013'
    },
    {
        title: 'Griffin Hospital, The Center for Cancer Care',
        url: 'https://vimeo.com/178461720'
    },
    {
        title: 'Griffin Hospital, The Center for Cancer Care',
        url: 'https://vimeo.com/178461721'
    },
    {
        title: 'Orange Bowl, Father and Son Legacy',
        url: 'https://vimeo.com/178461801'
    },
    {
        title: 'ABC Eyewitness News',
        url: 'https://vimeo.com/178465940'
    },
    {
        title: 'LG Electronics, March Madness',
        url: 'https://vimeo.com/170016011'
    },
]


export default function Marketing() {



    return (
        <div className='font-poppins min-h-[calc(100vh-304px)]'>
            <div className='w-full h-[112px] bg-black' />
            <div className='flex flex-col justify-center items-center my-20'>
                <h1 className='font-extrabold text-black'>Marketing</h1>
                <h2 className=''>Chris Kostianis, Director of Photography</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    {videos.map(video => {
                        return <VideoComp
                            title={video.title}
                            url={video.url} />
                    }
                    )}

                </div>
            </div>
        </div>
    );

}