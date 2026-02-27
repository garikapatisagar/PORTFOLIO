import './Projects.css';

/**
 * Projects Section Component
 * Displays portfolio projects in a responsive grid layout
 * Each card includes title, description, technologies, GitHub link, and live demo
 */
const Projects = () => {
    // Projects data - Replace with your actual projects
    const projects = [
        {
            id: 1,
            title: 'AI-RESUME-MATCHER',
            description: 'Developed an AI-powered Resume Matcher that analyzes resumes and job descriptions using NLP techniques to calculate similarity scores.',
            image: <img src="../public/RESUME-MATCHER_pic.png" alt="" />,
            technologies: ['React.js', 'fastAPI', 'postgresql', 'Postman', 'spaCy','SQLAlchemy','TensorFlow'],
            github: 'https://github.com/garikapatisagar/AI-resume-matcher',
            // demo: 'https://ecommerce-demo.vercel.app',
            // featured: true
        },
        {
            id: 2,
            title: 'Shadow Query–The Data Conspiracy',
            description: 'Built a full-stack SQL Mystery Game using FastAPI, PostgreSQL, React, and Docker, where users solve a data-sabotage case through real SQL queries. Designed an 8-table relational schema with complex joins and CTEs, and implemented a secure sandboxed backend to validate clues and unlock levels dynamically.',
            image: <img src="../public/image.png" alt="" />,
            technologies: ['FastAPI','PostgreSQL','React','VITE','HTML','CSS','SQLAlchemy','psycopg2'],
            github: 'https://github.com/garikapatisagar/SQL_GAME',
            // demo: 'https://task-manager-demo.vercel.app',
            // featured: true
        },
        // {
        //     id: 3,
        //     title: 'Weather Dashboard',
        //     description: 'A weather application that provides current weather conditions and 5-day forecasts for any location with beautiful animated backgrounds.',
        //     image: '🌤️',
        //     technologies: ['React.js', 'OpenWeather API', 'CSS3', 'Chart.js'],
        //     github: 'https://github.com/johndoe/weather-app',
        //     demo: 'https://weather-dash-demo.vercel.app',
        //     featured: false
        // },
        {
            id: 4,
            title: 'Portfolio Website',
            description: 'Developed a responsive personal portfolio using React.js, HTML, CSS, and Vite to showcase projects, skills, and technical experience. Designed structured sections with a modern UI to present backend and AI-based applications effectively.',
            image: <img src="../public/portfolio.png" alt="" />,
            technologies: ['React.js', 'CSS3', 'Vite', 'Responsive Design'],
            // github: 'https://github.com/johndoe/portfolio',
            demo: null,
            featured: false
        },
        // {
        //     id: 5,
        //     title: 'Blog CMS Platform',
        //     description: 'A content management system for blogs with markdown support, user comments, and SEO optimization features.',
        //     image: '📝',
        //     technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
        //     github: 'https://github.com/johndoe/blog-cms',
        //     demo: 'https://blog-cms-demo.vercel.app',
        //     featured: true
        // },
        // {
        //     id: 6,
        //     title: 'Fitness Tracker',
        //     description: 'A fitness tracking application to log workouts, track progress, and visualize fitness data with interactive charts.',
        //     image: '💪',
        //     technologies: ['React.js', 'Express.js', 'MongoDB', 'Chart.js'],
        //     github: 'https://github.com/johndoe/fitness-tracker',
        //     demo: null,
        //     featured: false
        // }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__tag">My Recent Work</span>
                    <h2 className="section-header__title">Projects</h2>
                    <div className="section-header__line"></div>
                </div>

                {/* Projects Grid */}
                <div className="projects__grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <span className="projects__featured-badge">Featured</span>
                            )}

                            {/* Project Image/Icon */}
                            <div className="projects__card-image">
                                <span className="projects__card-emoji">{project.image}</span>
                                <div className="projects__card-overlay">
                                    <div className="projects__card-links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="projects__link"
                                            aria-label="View GitHub Repository"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="projects__link"
                                                aria-label="View Live Demo"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="projects__card-content">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-description">{project.description}</p>

                                {/* Technologies */}
                                <div className="projects__technologies">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="projects__tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="projects__card-actions">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="projects__action-btn projects__action-btn--github"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Code
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="projects__action-btn projects__action-btn--demo"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="2" y1="12" x2="22" y2="12" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="projects__more">
                    <a
                        href="https://github.com/garikapatisagar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__more-btn"
                    >
                        <span>View More on GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
