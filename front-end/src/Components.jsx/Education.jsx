import React from 'react'
import { Heading } from './Heading'

export const Education = () => {
    const Edu = [
        {
            id: 1,
            time: "March-2022",
            title: "12th GSEB",
            institute: "F.D. Higher Secondary School, Ahmedabad",
        },
        {
            id: 2,
            time: "2022-2025",
            title: "Bachelor of Science in Information Technology",
            institute: "GLS UNIVERSITY, Ahmedabad",
        },
        {
            id: 3,
            time: "July 2023-August 2024",
            title: "UI/UX and Graphic Design Course",
            institute: "Kshitij Vivan, Ahmedabad",
        },
    ];
    return (
        <div className='flex flex-col gap-8 text-white w-full'>
            <Heading text='Education' />
            <div className="flex flex-col gap-8 w-full">
                {
                    Edu.map((item) => (
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
