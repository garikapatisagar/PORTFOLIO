import './About.css';

/**
 * About Section Component
 * Brief introduction, career objectives, and passion for technology
 * Designed to be recruiter-friendly and concise
 */
const About = () => {
    // Highlights/Quick Facts about the candidate
    const highlights = [
        { icon: '🎓', label: 'Fresh Graduate', value: 'B.Tech in Civil Enginner' },
        { icon: '💻', label: 'Focus Area', value: 'Frontend Developer,\nSoftware Developer,\nPython Developer,\nAI / ML Engineer' },
        { icon: '🚀', label: 'Projects', value: '10+ Completed' },
        { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana\nAvailable for Remote/Hybrid' }
    ];

    return (
        <section id="about" className="about">
            <div className="about__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__tag">Get to Know Me</span>
                    <h2 className="section-header__title">About Me</h2>
                    <div className="section-header__line"></div>
                </div>

                <div className="about__content">
                    {/* About Text Content */}
                    <div className="about__text">
                        <h3 className="about__subtitle">
                            Hi there! I'm <span className="about__highlight">G.Vidya sagar</span>
                        </h3>

                        <p className="about__paragraph">
                            I am deeply passionate about continuously learning and adapting to new technologies in the ever-evolving tech landscape. I actively explore modern tools, frameworks, and best practices to enhance my skills, improve problem-solving abilities, and stay updated while building scalable and impactful software solutions.
                        </p>

                        <p className="about__paragraph">
                            As a fresher, I bring fresh perspectives, hands-on experience gained through academic and personal projects, and a strong enthusiasm to learn and grow. Through these projects, I have practiced writing clean, maintainable code and focused on building user-centric solutions that demonstrate real-world problem-solving and practical impact.
                        </p>

                        {/* Career Objective */}
                        <div className="about__objective">
                            <h4 className="about__objective-title">
                                <span className="about__objective-icon">🎯</span>
                                Career Objective
                            </h4>
                            <p className="about__objective-text">
                                To secure a challenging position in a dynamic organization where I can
                                leverage my technical skills, contribute to meaningful projects, and
                                continuously grow as a developer while delivering value to the team.
                            </p>
                        </div>

                        {/* What Drives Me */}
                        <div className="about__passion">
                            <h4 className="about__passion-title">What Drives Me</h4>
                            <ul className="about__passion-list">
                                <li>Building intuitive and responsive user interfaces</li>
                                <li>Solving complex problems with elegant solutions</li>
                                <li>Learning new technologies and best practices</li>
                                <li>Collaborating with teams to create impactful products</li>
                            </ul>
                        </div>
                    </div>

                    {/* Quick Highlights Cards */}
                    <div className="about__highlights">
                        {highlights.map((item, index) => (
                            <div key={index} className="about__highlight-card">
                                <span className="about__highlight-icon">{item.icon}</span>
                                <div className="about__highlight-content">
                                    <span className="about__highlight-label">{item.label}</span>
                                    <span className="about__highlight-value">{item.value}</span>
                                </div>
                            </div>
                        ))}

                        {/* Download Resume Button */}
                        <a href="../public/G VIDYASAGAR PYTHON .CV.PDF" className="about__resume-btn">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg> */}
                            <span>Look at Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
