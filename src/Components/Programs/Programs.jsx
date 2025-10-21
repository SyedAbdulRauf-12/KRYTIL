import React, { useState } from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import arrow_icon from "../../assets/arrow-icon.png";

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const programsData = [
    {
      id: 1,
      image: program_1,
      icon: program_icon_1,
      title: "AI Resume Builder",
      description: "Create professional, ATS-optimized resumes powered by artificial intelligence. Get personalized suggestions and land more interviews.",
      features: [
        "ATS Optimization",
        "Real-time Feedback",
        "Industry Templates",
        "Cover Letter Generator"
      ],
      duration: "Instant",
      level: "All Levels"
    },
    {
      id: 2,
      image: program_2,
      icon: program_icon_2,
      title: "AI School",
      description: "Master Artificial Intelligence and Machine Learning with hands-on projects. Learn from industry experts and build real-world AI solutions.",
      features: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing"
      ],
      duration: "6 Months",
      level: "Intermediate"
    },
    {
      id: 3,
      image: program_3,
      icon: program_icon_3,
      title: "Full Stack Development",
      description: "Become a complete developer by mastering both frontend and backend technologies. Build scalable web applications from scratch.",
      features: [
        "React & Node.js",
        "Database Design",
        "API Development",
        "Cloud Deployment"
      ],
      duration: "8 Months",
      level: "Beginner Friendly"
    }
  ];

  return (
    <section className="programs" id="program">
      <div className="programs__container">
        {/* Header Section */}
        <div className="programs__header">
          <span className="programs__badge">Our Programs</span>
          <h2 className="programs__title">
            Transform Your Career with <span className="gradient-text">Cutting-Edge</span> Programs
          </h2>
          <p className="programs__subtitle">
            Choose from our industry-designed programs that bridge the gap between learning and earning. 
            Get job-ready with hands-on projects and expert mentorship.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs__grid">
          {programsData.map((program) => (
            <div 
              key={program.id}
              className={`programs__card ${activeProgram === program.id ? 'programs__card--active' : ''}`}
              onMouseEnter={() => setActiveProgram(program.id)}
              onMouseLeave={() => setActiveProgram(null)}
            >
              {/* Program Image */}
              <div className="programs__image-container">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="programs__image" 
                />
                <div className="programs__image-overlay"></div>
                
                {/* Program Icon */}
                <div className="programs__icon">
                  <img src={program.icon} alt={`${program.title} icon`} />
                </div>

                {/* Program Level Badge */}
                <div className="programs__level">
                  {program.level}
                </div>
              </div>

              {/* Program Content */}
              <div className="programs__content">
                <h3 className="programs__card-title">{program.title}</h3>
                <p className="programs__card-description">{program.description}</p>

                {/* Features List */}
                <ul className="programs__features">
                  {program.features.map((feature, index) => (
                    <li key={index} className="programs__feature">
                      <span className="programs__feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Program Meta */}
                <div className="programs__meta">
                  <div className="programs__duration">
                    <span className="programs__meta-label">Duration:</span>
                    <span className="programs__meta-value">{program.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="programs__cta">
                  Explore Program
                  <img src={arrow_icon} alt="Arrow" className="programs__cta-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="programs__bottom-cta">
          <p className="programs__cta-text">
            Not sure which program is right for you? 
            <span className="programs__cta-highlight"> Speak with our career advisor</span>
          </p>
          <button className="programs__advisor-btn">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;