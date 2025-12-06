import React from 'react'
import { Heading } from './Heading'

export const Experience = () => {
    const Exp = [
        {
            id: 1,
            time: "July 2025-Present",
            title: "Web Designer",
            institute: "Excelsior Technologies, Ahmedabad ",
        },
    ];
    return (
        <div className='flex flex-col gap-8 text-white w-full'>
            <Heading text='Experience' />
            <div className="flex flex-col gap-8 w-full">
                {
                    Exp.map((item) => (
                        <div key={item.id} className="flex items-center gap-6 backdrop-blur-xl bg-[#1E293BB3] w-full p-8 rounded-2xl card-shadow">
                            <div className="vertical"></div>
                            <div className='flex flex-col gap-2'>
                                <span className='italic light text-xl text-[#94a3b8]'>{item.time}</span>
                                <h2 className='text-2xl '>{item.title}</h2>
                                <h2 className='text-[#94a3b8] text-xl light'>{item.institute}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
