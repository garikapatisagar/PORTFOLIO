import './Skills.css';

/**
 * Skills Section Component
 * Displays technical skills grouped by category with animated skill bars
 * Categories: Frontend, Backend, Tools & Technologies
 */
const Skills = () => {
    // Skills data organized by category
    const skillCategories = [
        {
            id: 'frontend',
            title: 'Frontend Development',
            icon: '🎨',
            skills: [
                { name: 'HTML5', level: 90 },
                { name: 'CSS3 / Sass', level: 85 },
                { name: 'JavaScript (ES6+)', level: 65 },
                { name: 'React.js', level: 80 },
                // { name: 'TypeScript', level: 65 },
                { name: 'Responsive Design', level: 90 }
            ]
        },
        {
            id: 'backend',
            title: 'Backend Development',
            icon: '⚙️',
            skills: [
                // { name: 'Node.js', level: 70 },
                { name: 'FastAPI', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'RESTful APIs', level: 75 },
                { name: 'Django', level: 65 },
                { name: 'PostgreSQL', level: 60 }
            ]
        },
        {
            id: 'tools',
            title: 'Tools & Technologies',
            icon: '🛠️',
            skills: [
                { name: 'Git & GitHub', level: 85 },
                { name: 'VS Code', level: 90 },
                { name: 'npm / Yarn', level: 80 },
                // { name: 'Figma', level: 70 },
                // { name: 'Linux/CLI', level: 65 },
                // { name: 'Docker', level: 50 }
            ]
        }
    ];

    // Additional skills badges
    const additionalSkills = [
        'Problem Solving', 'Data Structures', 'Algorithms', 'Agile/Scrum',
        'Team Collaboration', 'Communication', 'Time Management', 'Debugging',
        'Code Review', 'Technical Writing', 'UI/UX Basics', 'Testing'
    ];

    // Get skill level label
    const getSkillLabel = (level) => {
        if (level >= 85) return 'Advanced';
        if (level >= 70) return 'Intermediate';
        if (level >= 50) return 'Learning';
        return 'Beginner';
    };

    return (
        <section id="skills" className="skills">
            <div className="skills__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__tag">What I Know</span>
                    <h2 className="section-header__title">Skills</h2>
                    <div className="section-header__line"></div>
                </div>

                {/* Skills Categories Grid */}
                <div className="skills__categories">
                    {skillCategories.map((category) => (
                        <div key={category.id} className="skills__category">
                            {/* Category Header */}
                            <div className="skills__category-header">
                                <span className="skills__category-icon">{category.icon}</span>
                                <h3 className="skills__category-title">{category.title}</h3>
                            </div>

                            {/* Skills List with Progress Bars */}
                            <div className="skills__list">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skills__item">
                                        <div className="skills__item-header">
                                            <span className="skills__item-name">{skill.name}</span>
                                            <span className="skills__item-level">{getSkillLabel(skill.level)}</span>
                                        </div>
                                        <div className="skills__progress-bar">
                                            <div
                                                className="skills__progress-fill"
                                                style={{ '--skill-level': `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Badges */}
                <div className="skills__additional">
                    <h3 className="skills__additional-title">Other Skills & Competencies</h3>
                    <div className="skills__badges">
                        {additionalSkills.map((skill, idx) => (
                            <span key={idx} className="skills__badge">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
