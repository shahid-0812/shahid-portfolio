import "../Styles/skills.css"
import { useEffect } from "react";


function Skills() {

    const technicalskills = [
        { img: "/images/html1.png", alt: "html-logo", title: "HTML" },
        { img: "/images/css1.png", alt: "css-logo", title: "CSS" },
        { img: "/images/js1.png", alt: "js-logo", title: "JS" },
        { img: "/images/react1.png", alt: "react-logo", title: "REACT" },
        { img: "/images/bss1.png", alt: "bss-logo", title: "BOOTSTRAP" },
        { img: "/images/tailwind1.png", alt: "tailwind-logo", title: "TAILWIND" },
        { img: "/images/responsive1.png", alt: "responsive-logo", title: <>RESPONSIVE <br></br>DESIGN</> },
        { img: "/images/git1.png", alt: "git-logo", title: "GIT" },
        { img: "/images/github1.png", alt: "github-logo", title: "GIT HUB" },
    ]
    const designskills = [
        { img: "/images/ps1.png", alt: "ps-logo", title: "PHOTOSHOP" },
        { img: "/images/ai1.png", alt: "ai-logo", title: "ILLUSTRATOR" },
        { img: "/images/figma1.png", alt: "figma-logo", title: "FIGMA" },
        { img: "/images/xd1.png", alt: "xd-logo", title: "XD" },
        { img: "/images/indesign1.png", alt: "indesign-logo", title: "INDESIGN" },
    ]

    // useEffect(() => {
    //     const skillProgress = document.querySelectorAll('.skill-progress');

    //     // Simple animation to display skill level bars when in view
    //     const animateSkills = () => {
    //         skillProgress.forEach((progress) => {
    //             const level = progress.getAttribute('data-level');
    //             progress.style.width = level;
    //         });
    //     };

    //     // Call once on load to animate skills that are already in view
    //     setTimeout(animateSkills, 500);

    //     // Optional: You can add scroll-based animation triggering here

    // }, []);

    return (
        <>
            <div className="skills-container">
                <div className="skills-header">
                    <h1>My Skills</h1>
                    <p>
                        Here's an overview of my technical and design abilities.
                        I'm constantly learning and expanding my skillset to create
                        better web experiences.
                    </p>
                </div>

                <div className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills">
                        {technicalskills.map((skill, index) => (
                            <div className="lol">
                                <div className="skillscard" key={index}>
                                    <img src={skill.img} alt={skill.alt} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-section">
                    <h2>Design Skills</h2>
                    <div className="skills">
                        {designskills.map((skill, index) => (
                            <div className="lol">
                                <div className="skillscard" key={index}>
                                    <img src={skill.img} alt={skill.alt} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Skills