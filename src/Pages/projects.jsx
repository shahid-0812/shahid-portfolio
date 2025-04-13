import React from 'react'
import "../Styles/projects.css"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Casa Design Studio",
            description: "A modern interior design studio website with a clean, black-and-white aesthetic and smooth, responsive design. It features interactive galleries and a contact form to showcase projects elegantly.",
            image: "/images/casa.jpg", // Replace with your image path
            tags: ["React", "CSS3", "Node.js"],
            liveLink: "https://casadesignstudio.vercel.app/",
            codeLink: "https://github.com/Akil-Shaikh/Casa_design",
            target: "_blank"
        },
        {
            id: 2,
            title: "Classic Print & Pack",
            description: "A vibrant, dynamic website for a printing and packaging company with interactive galleries, service details, and smooth animations. It includes a quote request system and responsive design for all devices.",
            image: "/images/classic.jpg",
            tags: ["React", "CSS3", "JavaScript", "Responsive Design"],
            liveLink: "/under-dev",
            codeLink: "https://github.com/shahid-0812/classicprintandpack",
            target: ""
        },
        {
            id: 3,
            title: "Sentilytics",
            description: "A web app that analyzes comment sentiment from CSV files or YouTube videos with a clean, user-friendly interface. It supports uploads and shows results using visual charts for easy understanding.",
            image: "/images/sentilytics.jpg",
            tags: ["React", "JavaScript", "CSV", "YouTube API"],
            liveLink: "/https://github.com/shahid-0812/sentilytics",
            codeLink: "/under-dev",
            target: ""
        },


    ];
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p>
                    Here are some of the projects I've worked on. Each project challenged me
                    in different ways and helped me grow as a developer.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img
                                src={project.image}
                                alt={project.title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentElement.style.backgroundColor = "#1e293b";
                                }}
                            />
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span className="project-tag" key={index}>{tag}</span>
                                ))}
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveLink} className="project-link project-link-live" target={project.target}>
                                    Live Demo
                                </a>
                                <a href={project.codeLink} className="project-link project-link-code" target={project.target}>
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
