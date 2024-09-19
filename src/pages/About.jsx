import React, { useEffect, useState } from 'react';
import chris_image from '../assets/chris_profile.jpeg'
import felicita_image from '../assets/felicita_profile.jpg'
import AboutName from '../components/AboutName';

function About() {

    const members = [
        {
            name: 'Felícita',
            ps: [
                'Felícita Kostianis is the majority owner, a passionate Producer, and a proud Puerto Rican and Greek woman. Motivated by her empathy, curiosity, and passion for creating positive change in the world, she joined forces with her father to build a video production company aimed at addressing diversity challenges in the industry and helping clients successfully reach diverse demographics. She is dedicated to creating a space within the industry that not only produces high-quality work but also uplifts voices, aspiring to carve a path that champions both excellence and diversity in filmmaking.'
                ,
                'Beyond her commitment to learning and storytelling, Felícita loves to travel, with her best trip as of late being a road trip spanning the north of Spain.'
            ],
            pic: felicita_image,
            bgPos: "[background-position:20%_40%]",
            bgSize: "[background-size:120%]"
        },
        {
            name: 'Chris',
            ps: [
                'With over 25 years of experience and more than 10 Emmys, Chris Kostianis brings a keen eye for detail and a passion for captivating visuals. With a diverse background spanning narratives, documentaries, commercials, television shows, and promotional videos, Chris offers a fresh and polished perspective to projects.'
                ,
                'His results-driven approach to each project is client-oriented, always focused on helping you achieve your goals. Whether delivering a refined look, eye-catching visuals, or evoking energy, Chris uses his dynamic lighting and camera movements to translate concepts into powerful visual narratives.'
            ],
            pic: chris_image,
            bgPos: "[background-position:50%_50%]",
            bgSize: "[background-size:100%]"
        },
    ]

    return (
        <div className='px-10 md:px-20 lg:px-32 pt-[85px] xl:px-48 pb-32 w-screen max-w-screen h-fit bg-black flex flex-col justify-start items-start min-h-[100vh] '>
            <div className='flex flex-col mt-[50px] justify-start items-start gap-3 lg:w-1/2'>
                <h1 className='font-zenKaku text-white text-4xl w-full font-semibold [text-align:center] md:[text-align:left]'>Our Story</h1>
                <p className='font-zenKaku text-white h-fit w-full [text-align:center] md:[text-align:left]'>
                Generational Pictures is a woman-owned video production company led by Felícita Kostianis and Chris Kostianis. Founded by this father-daughter duo, we provide exceptional full-service production and post-production solutions, driven by a fresh perspective and commitment to impressive results.
                </p>
                <p className='font-zenKaku text-white h-fit w-full [text-align:center] md:[text-align:left]'>
                At Generational Pictures, we understand that people engage with videos in unique ways. Drawing on our co-founders’ multicultural backgrounds and diverse generational insights, our team’s approach ensures that every project connects authentically with audiences across various generations and cultures.
                </p>
                <p className='font-zenKaku text-white h-fit w-full [text-align:center] md:[text-align:left]'>
                By embracing challenges with innovative thinking and drawing on our team’s seasoned expertise, Generational Pictures transforms our clients’ visions into stunning content.
                </p>
            </div>
            <div className='mt-4 h-1 w-[200px] lg:w-1/2 bg-logo [margin-left:auto] [margin-right:auto] md:[margin-left:0px] md:[margin-right:0px]' />

            <div className='flex flex-col'>
                {members.map((member) => (
                    <AboutName
                        name={member.name}
                        ps={member.ps}
                        pic={member.pic}
                        bgPos={member.bgPos}
                        bgSize={member.bgSize}
                    />
                ))}
            </div>



        </div>
    );

}

export default About;