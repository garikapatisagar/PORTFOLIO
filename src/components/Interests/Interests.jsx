import './Interests.css';

/**
 * Areas of Interest Section Component
 * Displays technical interests and passions with animated cards
 */
const Interests = () => {
    // Interests data with icons and descriptions
    const interests = [
        {
            id: 1,
            title: 'Web Development',
            icon: '🌐',
            description: 'Building modern, responsive, and user-friendly web applications using the latest technologies and best practices.',
            tags: ['React', 'FastAPI', 'CSS3', 'JavaScript']
        },
        {
            id: 2,
            title: 'Cloud Computing',
            icon: '☁️',
            description: 'Exploring cloud platforms and services to build scalable and reliable applications.',
            tags: ['AWS', 'Azure', 'Docker', 'Serverless']
        },
        {
            id: 3,
            title: 'Problem Solving',
            icon: '🧩',
            description: 'Tackling complex algorithmic challenges and developing efficient solutions through logical thinking.',
            tags: ['DSA', 'LeetCode', 'Logic', 'Critical Thinking']
        },
        {
            id: 4,
            title: 'Machine Learning',
            icon: '🤖',
            description: 'Understanding AI/ML concepts and their applications in solving real-world problems.',
            tags: ['Python', 'TensorFlow', 'Data Science', 'AI']
        },
        {
            id: 5,
            title: 'Open Source',
            icon: '💻',
            description: 'Contributing to open-source projects and collaborating with developers worldwide.',
            tags: ['GitHub', 'Git', 'Community', 'Collaboration']
        },
        {
            id: 6,
            title: 'Learning New Tech',
            icon: '📚',
            description: 'Continuously expanding knowledge by learning new programming languages, frameworks, and tools.',
            tags: ['TypeScript', 'Go', 'Rust', 'DevOps']
        }
    ];

    return (
        <section id="interests" className="interests">
            <div className="interests__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__tag">What Excites Me</span>
                    <h2 className="section-header__title">Areas of Interest</h2>
                    <div className="section-header__line"></div>
                </div>

                {/* Interests Grid */}
                <div className="interests__grid">
                    {interests.map((interest) => (
                        <div key={interest.id} className="interests__card">
                            {/* Icon */}
                            <div className="interests__icon-wrapper">
                                <span className="interests__icon">{interest.icon}</span>
                            </div>

                            {/* Content */}
                            <h3 className="interests__title">{interest.title}</h3>
                            <p className="interests__description">{interest.description}</p>

                            {/* Tags */}
                            <div className="interests__tags">
                                {interest.tags.map((tag, idx) => (
                                    <span key={idx} className="interests__tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote/Motto */}
                <div className="interests__quote">
                    <blockquote>
                        <span className="interests__quote-icon">"</span>
                        The only way to do great work is to love what you do. Stay hungry, stay foolish.
                        <span className="interests__quote-icon">"</span>
                    </blockquote>
                    <cite>— Steve Jobs</cite>
                </div>
            </div>
        </section>
    );
};

export default Interests;
