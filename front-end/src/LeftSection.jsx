import React from 'react'

export const LeftSection = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const NavLinks = [
        { id: 1, link: "About", ref: aboutRef },
        { id: 2, link: "Skills", ref: skillsRef },
        { id: 3, link: "Projects", ref: projectsRef },
        { id: 4, link: "Contact", ref: contactRef },
    ];
    return (
        <div className='flex flex-col items-center justify-between h-screen w-1/2 border-r border-[#e2e2e218] py-15 sticky top-0 max-lg:px-5 max-sm:static max-sm:w-full'>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 text-7xl  text-white max-lg:text-5xl">
                    <h1 className='bold'>SHAHID</h1>
                    <h1 className='bold'>SHAIKH</h1>
                    <span className='text-3xl medium text-white max-lg:text-xl'>FRONT END DEVELOPER</span>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        NavLinks.map((link) => (
                            <div key={link.id} onClick={() => handleScroll(link.ref)} className="flex items-center gap-2 text-white group cursor-pointer">
                                <div className='w-5 h-px bg-white group-hover:w-10 transition-all  duration-300'></div>
                                <span className='medium text-lg'>{link.link}</span>
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className="flex flex-col  text-white">
                <div className="flex flex-col items-center text-lg gap-3">
                    <div className="flex  gap-3">
                        <a href='tel:+91 9824423433' target='_blank' className='social'>
                            <i className="bi bi-phone mr-2"></i>
                            +91 9824423433
                        </a>
                        <a href='https://www.linkedin.com/in/shahidshaikh555/' target='_blank' className='social'>
                            <i className="bi bi-linkedin mr-2"></i>
                            linkedin
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <a href='mailto:shahidshaikh.081204@gmail.com' target='_blank' className='social'>
                            <i className="bi bi-envelope mr-2"></i>
                            email
                        </a>
                        <a href='https://github.com/shahid-0812' target='_blank' className='social'>
                            <i className="bi bi-github mr-2"></i>
                            github
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
