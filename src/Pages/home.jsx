
import Navbar from "../Components/navbar";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import Skills from "./skills";
import About from "./about";
import Projects from "./projects"
import { useRef, useEffect, useState } from "react";

function Home() {


    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const glowRef = useRef(null);






    const scrollToSection = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const moveGlow = (e) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${e.clientX - 175}px, ${e.clientY - 175}px)`;
            }
        };
        window.addEventListener("mousemove", moveGlow);
        return () => window.removeEventListener("mousemove", moveGlow);
    }, []);
    return (
        <>
            <div className="cursor-glow" ref={glowRef}></div> {/* glowing element */}
            <div className="home-container flex">
                <div className="home-left flex">
                    <div className="home-intro flex flex-col">
                        <span>Shahid</span>
                        <span>Shaikh</span>
                        <p>Front End Developer</p>
                        <div className="home-nav">
                            <div className="link" onClick={() => scrollToSection(aboutRef)}>
                                <div className="line"></div>
                                <div className="home-link" >About</div>
                            </div>
                            <div className="link" onClick={() => scrollToSection(skillsRef)}>
                                <div className="line"></div>
                                <div className="home-link" >Skills</div>
                            </div>
                            <div className="link" onClick={() => scrollToSection(projectsRef)}>
                                <div className="line"></div>
                                <div className="home-link" >Projects</div>
                            </div>
                        </div>
                    </div>
                    <div className="social-media-links flex">
                        <div className="social">
                            <a href="https://www.linkedin.com/in/shahidshaikh555" target="_blank">
                                <i className="bi bi-linkedin"></i>
                                <span>linkedin</span>
                            </a>
                        </div>

                        <div className="social">
                            <a href="mailto:shahidshaikh.081204@gmail.com">
                                <i className="bi bi-envelope"></i>
                                <span>email</span>
                            </a>
                        </div>
                        <div className="social">
                            <a href="https://github.com/shahid-0812" target="_blank">
                                <i className="bi bi-github"></i>
                                <span>github</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <div ref={aboutRef}>
                        <About />
                    </div>
                    <div ref={skillsRef}>
                        <Skills />
                    </div>
                    <div ref={projectsRef}>
                        <Projects />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
