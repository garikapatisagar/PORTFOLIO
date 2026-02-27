import './Experience.css';

/**
 * Experience Section Component
 * Displays internship/work experience with company, role, duration, and responsibilities
 * Features a modern card-based layout with hover effects
 */
const Experience = () => {
    // Experience data - Replace with your actual experience
    const experiences = [
        {
            id: 1,
            type: 'Internship',
            role: 'Frontend Developer Intern',
            company: 'TechCorp Solutions',
            location: 'Remote',
            duration: 'Jan 2024 - Apr 2024',
            description: 'Worked on developing responsive user interfaces for the company\'s flagship web application.',
            responsibilities: [
                'Developed and maintained React components for the main dashboard',
                'Collaborated with UI/UX team to implement pixel-perfect designs',
                'Optimized application performance, reducing load time by 25%',
                'Participated in code reviews and agile sprint meetings'
            ],
            technologies: ['React.js', 'JavaScript', 'CSS3', 'Git', 'Figma']
        },
        {
            id: 2,
            type: 'Internship',
            role: 'Web Development Intern',
            company: 'StartUp Hub',
            location: 'Hybrid',
            duration: 'Jun 2023 - Aug 2023',
            description: 'Contributed to building a SaaS platform for small businesses.',
            responsibilities: [
                'Built reusable UI components using React and styled-components',
                'Integrated REST APIs for data fetching and state management',
                'Wrote unit tests achieving 80% code coverage',
                'Documented code and created technical documentation'
            ],
            technologies: ['React.js', 'Node.js', 'REST APIs', 'Jest', 'MongoDB']
        },
        {
            id: 3,
            type: 'Project',
            role: 'Student Developer',
            company: 'University Project Team',
            location: 'On-site',
            duration: 'Aug 2023 - Dec 2023',
            description: 'Led a team of 4 to develop a campus event management system.',
            responsibilities: [
                'Designed system architecture and database schema',
                'Implemented user authentication and authorization',
                'Managed project timeline and assigned tasks to team members',
                'Presented final project to a panel of industry experts'
            ],
            technologies: ['React.js', 'Express.js', 'MySQL', 'Firebase', 'GitHub']
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="experience__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__tag">Where I've Worked</span>
                    <h2 className="section-header__title">Experience</h2>
                    <div className="section-header__line"></div>
                </div>

                {/* Experience Cards */}
                <div className="experience__grid">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience__card">
                            {/* Card Header */}
                            <div className="experience__card-header">
                                <span className="experience__type">{exp.type}</span>
                                <span className="experience__duration">{exp.duration}</span>
                            </div>

                            {/* Role & Company */}
                            <h3 className="experience__role">{exp.role}</h3>
                            <div className="experience__company">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21h18" />
                                    <path d="M9 8h1" />
                                    <path d="M9 12h1" />
                                    <path d="M9 16h1" />
                                    <path d="M14 8h1" />
                                    <path d="M14 12h1" />
                                    <path d="M14 16h1" />
                                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                                </svg>
                                <span>{exp.company}</span>
                                <span className="experience__location-dot">•</span>
                                <span className="experience__location">{exp.location}</span>
                            </div>

                            {/* Description */}
                            <p className="experience__description">{exp.description}</p>

                            {/* Responsibilities */}
                            <ul className="experience__responsibilities">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="experience__responsibility">
                                        {resp}
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="experience__technologies">
                                {exp.technologies.map((tech, idx) => (
                                    <span key={idx} className="experience__tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
