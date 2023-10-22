import React, { useEffect, useState } from 'react';
import VideoComp from '../components/VideoComp';

export default function ChrisWork() {

    return (
        <div className='flex pt-[200px] bg-black flex-col justify-center items-center min-h-[calc(100vh-304px)]'>
            <h1 className='font-poppins font-extrabold text-[100px] text-white'><span className='text-logo'>C</span>hris's Work</h1>
            <div className='grid col-span-3'>
                <VideoComp 
                    title=''
                    // img_src={}
                    // preview_src={}
                    // url={}                
                />
            </div>
            
        </div>
    );

}