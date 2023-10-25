import React, { useEffect, useState } from 'react';
import VideoComp from '../components/VideoComp';

const videos = [
    {
        title: 'New York Public Library, Library Lions 2022',
        url: 'https://vimeo.com/861398689'
    },
    {
        title: 'New York Public Library, Library Lions 2022',
        url: 'https://vimeo.com/861391896'
    },
    {
        title: 'Alzheimer’s Drug Discovery Foundation, Hope is Here',
        url: 'https://vimeo.com/874411040'
    },
    {
        title: 'Dr. Marla J. Keller, Albert Einstein College of Medicine Women’s Division Honoree',
        url: 'https://vimeo.com/877577662'
    },
    {
        title: 'Karen Mandelbaum, Albert Einstein College of Medicine Women’s Division Honoree',
        url: 'https://vimeo.com/877614533'
    },
    {
        title: 'JT Van Zandt Generation Strong',
        url: 'https://vimeo.com/861389930'
    },
    {
        title: 'JT Van Zandt Generation Strong',
        url: 'https://vimeo.com/861381848'
    },
    {
        title: 'Suzy Guess, UPMC Magee-Womens Hospital',
        url: 'https://vimeo.com/877618703'
    },
    {
        title: 'One in a Billion',
        url: 'https://vimeo.com/170018472'
    },
    {
        title: 'Eukanaba, Steve Mize “Reveille”',
        url: 'https://vimeo.com/251264604'
    },
    {
        title: 'Kendall Herr, Royal Canine Feature”',
        url: 'https://vimeo.com/251264657'
    },
]


export default function StoryTelling() {

    

    return (
        <div className='font-zenKaku min-h-[calc(100vh-304px)]'>
            <div className='w-full h-[112px] bg-black' />
            <div className='flex flex-col justify-center items-center gap-4 my-20'>
                <h1 className='font-extrabold text-black'><span className='text-logo'>S</span>tory
                <span className='text-logo'> T</span>elling</h1>
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