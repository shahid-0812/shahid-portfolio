import React from 'react'
import { Introduction } from './Components.jsx/Introduction'
import { Education } from './Components.jsx/Education'
import { Experience } from './Components.jsx/Experience'
import { Skills } from './Components.jsx/Skills'
import { Projects } from './Components.jsx/Projects'
import { Contact } from './Components.jsx/Contact'

export const RightSection = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
    return (
        <div className='w-1/2 px-25 flex flex-col  items-start max-lg:px-10 max-sm:w-full '>
            <div ref={aboutRef} className='flex flex-col gap-10 pt-15 py-10'>
                <Introduction />
                <Education />
                <Experience />
            </div>
            <div ref={skillsRef} className='py-10'>
                <Skills />
            </div>
            <div ref={projectsRef} className='py-10'>
                <Projects />
            </div>
            <div ref={contactRef} className='py-10'>
                <Contact />
            </div>
        </div>
    )
}
