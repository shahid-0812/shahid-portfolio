import React from 'react'
import "../Styles/about.css"

const About = () => {
    return (
        <div className='about-container'>
            <div className="aboutme">
                <h1>Introduction</h1>
                <span>
                    I am a front-end web developer who enjoys designing and building clean, user-friendly websites. I have a strong passion for creating smooth and responsive web experiences that look great on all devices. I pay close attention to design, layout, and details to make sure everything feels just right for the user.
                </span>
                <span>
                    I’ve worked on different types of projects, from company websites to creative web apps. Each project has helped me grow and improve as a developer. I’m always eager to learn new things and stay updated with the latest trends in front-end development. My goal is to create websites that are both beautiful and easy to use.
                </span>
            </div>
            <div className="education">
                <h1>Education</h1>
                <div className="edu-card">
                    <div className="vertical"></div>
                    <div>
                        <p>March - 2022</p>
                        <h2>{"12th GSEB"}</h2>
                        <h2>F.D. Higher Secondary School, Ahmedabad</h2>
                    </div>
                </div>
                <div className="edu-card">
                    <div className="vertical"></div>
                    <div>
                        <p>2022-2025</p>
                        <h2>{"Bachelor of Science in Information Technology"}</h2>
                        <h2>GLS UNIVERSITY, Ahmedabad</h2>
                    </div>
                </div>
                <div className="edu-card">
                    <div className="vertical"></div>
                    <div>
                        <p>July 2023 - August 2024</p>
                        <h2>{"UI/UX and Graphic Design Course"}</h2>
                        <h2>Kshitij Vivan, Ahmedabad</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
