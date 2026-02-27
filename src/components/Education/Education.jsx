import './Education.css';

/**
 * Education Section Component
 * Displays educational background in a clean timeline/card layout
 * Includes degree, university, specialization, and graduation year
 */
const Education = () => {
    // Education data - Replace with your actual education details
    const educationData = [
        {
            id: 1,
            degree: 'Bachelor of Technology (B.Tech)',
            field: 'CIVIL Engineering',
            institution: 'VNR VIGNAN JYOTHI INSTITUTE OF EDUCATION & TECHNOLOGY',
            location: 'Hyderabad, Telangana',
            duration: '2020 - 2024',
            grade: 'CGPA: 6.3/10',
            highlights: [
                'Specialized in Software Development', 
                'Participated in Hackathons',
                'Dean\'s List for Academic Excellence'
            ]
        },
        {
            id: 2,
            degree: 'Higher Secondary (XII)',
            field: 'M.P.C',
            institution: 'Synapse science academy',
            location: 'Mirylaguda, Telangana',
            duration: '2017 - 2019',
            grade: 'Percentage: 84.1%',
            highlights: [
                
            ]
        },
        {
            id: 3,
            degree: 'Secondary School (X)',
            field: 'General Education',
            institution: 'SPR School of excellence',
            location: 'Miryalaguda, Telangana',
            duration: '2017',
            grade: 'Percentage: 84%',
            highlights: [
                'School Prefect',
                'First Prize in Science Fair'
            ]
        }
    ];

    return (
        <section id="education" className="education">
            <div className="education__container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-header__tag">My Academic Journey</span>
                    <h2 className="section-header__title">Education</h2>
                    <div className="section-header__line"></div>
                </div>

                {/* Education Timeline */}
                <div className="education__timeline">
                    {educationData.map((edu, index) => (
                        <div key={edu.id} className="education__card">
                            {/* Timeline connector */}
                            <div className="education__timeline-dot">
                                <span className="education__timeline-number">{index + 1}</span>
                            </div>

                            {/* Card Content */}
                            <div className="education__card-content">
                                {/* Header */}
                                <div className="education__card-header">
                                    <div className="education__degree-info">
                                        <h3 className="education__degree">{edu.degree}</h3>
                                        <p className="education__field">{edu.field}</p>
                                    </div>
                                    <span className="education__duration">{edu.duration}</span>
                                </div>

                                {/* Institution Info */}
                                <div className="education__institution">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                    <span>{edu.institution}</span>
                                </div>

                                <div className="education__location">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>{edu.location}</span>
                                </div>

                                {/* Grade Badge */}
                                <div className="education__grade">
                                    <span className="education__grade-badge">{edu.grade}</span>
                                </div>

                                {/* Highlights */}
                                <ul className="education__highlights">
                                    {edu.highlights.map((highlight, idx) => (
                                        <li key={idx} className="education__highlight-item">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
