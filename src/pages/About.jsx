import React, { useEffect, useState } from 'react';

function About() {

    return (
        <div className='pt-32 w-screen 2xl:h-[calc(100vh-301px)] h-fit bg-black flex justify-start items-start'>
            <div className='flex flex-col mt-[50px] justify-start items-start w-full ml-20 xl:ml-48 '>
                <h1 className='font-poppins text-white text-4xl font-semibold'>OUR STORY</h1>
                <div className='my-24 h-full w-full'>
                    <h2 className='font-poppins text-white text-2xl'>Meet our founder</h2>
                    <div className='flex flex-row grow h-[300px] w-full'>
                        <div className='font-poppins text-2xl h-full w-[500px] rounded-lg py-[120px] px-4 bg-white'>Chris Kostianis</div>
                        <div className='font-poppins w-full py-[120px] mx-32 border-y-[1px] border-y-white h-full text-lg bg-black text-white'>we started whatever...</div>
                    </div>
                </div>

            </div>

        </div>
    );

}

export default About;