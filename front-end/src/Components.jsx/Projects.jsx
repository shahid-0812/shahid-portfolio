import React from 'react'
import { Heading } from './Heading';

export const Projects = () => {
    const Project = [
        {
            id: 1,
            img: "/images/casa1.jpg",
            title: "Casa Design Studio",
            tags: ["React", "node.js"],
            desc: "A modern interior design studio website with a clean, black-and-white aesthetic and smooth, responsive design. It features interactive galleries and a contact form to showcase projects elegantly.",
            link: "https://github.com/Akil-Shaikh/Casa_design"
        },
        {
            id: 2,
            img: "/images/sentilytics.jpg",
            title: "Sentilytics",
            tags: ["React", "youtube api", "django"],
            desc: "A web app that analyzes comment sentiment from CSV files or YouTube videos with a clean, user-friendly interface. It supports uploads and shows results using visual charts for easy understanding.",
            link: "https://github.com/Akil-Shaikh/Sentilytics-Project"
        },
        {
            id: 3,
            img: "/images/spotify.jpg",
            title: "Spotify Profile",
            tags: ["React", "spotify api"],
            desc: "This project shows a user’s Spotify profile, their songs, and their playlists. It helps users view their recent tracks, top artists, and top tracks in one clean dashboard.",
            link: "https://github.com/shahid-0812/spotify-profile"
        },
        {
            id: 4,
            img: "/images/listox.jpg",
            title: "Listox-Template",
            tags: ["React", "framer motion"],
            desc: "Listox is a clean and modern template built to showcase items in a smooth layout. It also uses Framer Motion to add soft and appealing animations to the design.",
            link: "https://github.com/shahid-0812/Listox"
        },
    ];
    return (
        <div className='flex flex-col gap-8 text-white w-full'>
            <Heading text='Projects' />
            <div className="flex  gap-8 w-full flex-wrap">
                {
                    Project.map((item) => (
                        <div key={item.id} className="flex flex-col overflow-hidden backdrop-blur-xl bg-[#1E293BB3]  rounded-2xl card-shadow">
                            <img src={item.img} alt="" className='w-full h-64 object-cover max-lg:h-40' />
                            <div className="flex flex-col gap-3 p-8 max-lg:p-5">
                                <div className="flex flex-wrap items-center gap-3 light  uppercase">
                                    {
                                        item.tags.map((tag) => (
                                            <span className='bg-[#60a5fa26] text-[#60a5fa] s px-4 tracking-wide rounded-sm py-1'>{tag}</span>
                                        ))
                                    }
                                </div>
                                <h1 className="text-3xl ">
                                    {item.title}
                                </h1>
                                <h2 className='text-[#94a3b8] text-xl light'>
                                    {item.desc}
                                </h2>

                                <a href={item.link} target='_blank' className='border border-[#60a5fa] text-[#60a5fa] w-fit px-4 py-3 cursor-pointer hover:scale-105 transition duration-300 rounded-sm hover:backdrop-blur-2xl hover:shadow-xl hover:text-white'>
                                    View Code
                                </a>


                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
