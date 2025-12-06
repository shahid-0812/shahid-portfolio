import React from 'react'
import { Heading } from './Heading'
import { Para } from './Para'

export const Introduction = () => {
    return (
        <div className='flex flex-col gap-8 text-white'>
            <Heading text='Introduction' />
            <div className="flex flex-col gap-3">
                <Para para='I am a front-end web developer who enjoys designing and building clean, user-friendly websites. I have a strong passion for creating smooth and responsive web experiences that look great on all devices. I pay close attention to design, layout, and details to make sure everything feels just right for the user.' />
                <Para para='I’ve worked on different types of projects, from company websites to creative web apps. Each project has helped me grow and improve as a developer. I’m always eager to learn new things and stay updated with the latest trends in front-end development. My goal is to create websites that are both beautiful and easy to use.' />
            </div>
        </div>
    )
}
