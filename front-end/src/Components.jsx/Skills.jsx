import React from 'react'
import { Heading } from './Heading'
import { Para } from './Para'

export const Skills = () => {

    const TechnicalSkills = [
        {
            id: 1,
            img: "/images/html1.png", alt: "html-logo", title: "HTML"
        },
        {
            id: 2,
            img: "/images/css1.png", alt: "css-logo", title: "CSS"
        },
        {
            id: 3,
            img: "/images/js1.png", alt: "js-logo", title: "JS"
        },
        {
            id: 4,
            img: "/images/react1.png", alt: "react-logo", title: "REACT"
        },
        {
            id: 5,
            img: "/images/bss1.png", alt: "bss-logo", title: "BOOTSTRAP"
        },
        {
            id: 6,
            img: "/images/tailwind1.png", alt: "tailwind-logo", title: "TAILWIND"
        },
        {
            id: 7,
            img: "/images/responsive1.png", alt: "responsive-logo", title: <>RESPONSIVE <br></br>DESIGN</>
        },
        {
            id: 8,
            img: "/images/git1.png", alt: "git-logo", title: "GIT"
        },
        {
            id: 9,
            img: "/images/github1.png", alt: "github-logo", title: "GIT HUB"
        },
    ]
    const DesignSkills = [
        {
            id: 1,
            img: "/images/ps1.png", alt: "ps-logo", title: "PHOTOSHOP"
        },
        {
            id: 2,
            img: "/images/ai1.png", alt: "ai-logo", title: "ILLUSTRATOR"
        },
        {
            id: 3,
            img: "/images/figma1.png", alt: "figma-logo", title: "FIGMA"
        },
        {
            id: 4,
            img: "/images/xd1.png", alt: "xd-logo", title: "XD"
        },
        {
            id: 5,
            img: "/images/indesign1.png", alt: "indesign-logo", title: "INDESIGN"
        },
    ]

    return (
        <div className='flex flex-col gap-8 text-white w-full'>
            <div className="flex flex-col gap-6">
                <Heading text='My Skills' />
                <Para para="Here' s an overview of my technical and design abilities. I'm constantly learning and expanding my skillset to create better web experiences." />

            </div>
            <div className="flex flex-col gap-12 w-full ">
                <div className="flex flex-col gap-5 group">
                    <div className="flex flex-col gap-2 w-fit">
                        <h1 className='text-3xl '>Technical Skills</h1>
                        <div className="rounded-full h-0.5 bg-[#60a5fa] w-10 group-hover:w-full transition-all duration-300"></div>
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        {
                            TechnicalSkills.map((tech) => (
                                <div key={tech.id} className='flex flex-col items-center justify-center gap-3'>
                                    <div className="card-shadow rounded-full px-7 py-6">
                                        <img src={tech.img} alt="" className='w-18 h-full object-cover' />
                                    </div>
                                    <span className='text-xl text-center'>{tech.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-5 group">
                    <div className="flex flex-col gap-2 w-fit">
                        <h1 className='text-3xl '>Designing Skills</h1>
                        <div className="rounded-full h-0.5 bg-[#60a5fa] w-10 group-hover:w-full transition-all duration-300"></div>
                    </div>
                    <div className="flex gap-5 flex-wrap">
                        {
                            DesignSkills.map((tech) => (
                                <div key={tech.id} className='flex flex-col items-center justify-center gap-3'>
                                    <div className="card-shadow rounded-full px-7 py-6">
                                        <img src={tech.img} alt="" className='w-18 h-full object-cover' />
                                    </div>
                                    <span className='text-xl text-center'>{tech.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
