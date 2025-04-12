import React from 'react'
import "../Styles/projects.css"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Casa Design Studio",
            description: "A modern interior design studio website with a clean, elegant aesthetic. Features a responsive design with smooth scrolling, interactive galleries showcasing various design projects, and a contact form. The minimalist black and white color scheme emphasizes the visual content and creates a sophisticated user experience.",
            image: "/images/casa.jpg", // Replace with your image path
            tags: ["React", "CSS3", "Node.js"],
            liveLink: "https://casadesignstudio.vercel.app/",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Classic Print & Pack",
            description: "A dynamic website for a printing and packaging company featuring a modern, vibrant design. The site showcases the company's services with interactive product galleries, machinery, and detailed service descriptions. Includes a quote request system, responsive design for all devices, and smooth animations that highlight the company's premium packaging solutions and printing capabilities.",
            image: "/printpack-website.jpg",
            tags: ["React", "CSS3", "JavaScript", "Responsive Design"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Sentilytics",
            description: "A web application that analyzes the sentiment of comments from CSV files or YouTube videos. It features a clean and user-friendly interface, supports file uploads, and displays results using visual charts. Built for users to easily understand if comments are positive, negative, or neutral.",
            image: "/sentilytics-website.jpg",
            tags: ["React", "JavaScript", "CSV", "YouTube API"],
            liveLink: "#",
            codeLink: "#"
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
                                <a href={project.liveLink} className="project-link project-link-live" target='_blank'>
                                    Live Demo
                                </a>
                                <a href={project.codeLink} className="project-link project-link-code" target='_blank'>
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
