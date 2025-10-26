import React, { useState } from "react";
import "./Programs.css";
import program_1 from "../../assets/web-dev-icon.png";
import program_2 from "../../assets/resume-build.png";
import program_3 from "../../assets/AI-school.png";
import program_4 from "../../assets/comp-spec-trin.png"
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import arrow_icon from "../../assets/arrow-icon.png";
import { useInView } from 'react-intersection-observer';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Adjust as needed, 0.1 means 10% visible
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const programsData = [
    {
      id: 1,
      image: program_1,
      icon: program_icon_1,
      title: "Web Development",
      description: "We build beautiful, responsive, and secure websites designed to engage your audience, drive conversions, and deliver measurable results.",
      features: [ /* Features are no longer displayed, but data can stay */ ]
    },
    {
      id: 2,
      image: program_2,
      icon: program_icon_2,
      title: "AI Resume Builder",
      description: "Create professional, ATS-optimized resumes powered by artificial intelligence. Get personalized suggestions and land more interviews.",
      features: [ /* Features are no longer displayed */ ],
    },
    {
      id: 3,
      image: program_3,
      icon: program_icon_3,
      title: "AI School",
      description: "Master Artificial Intelligence and Machine Learning with hands-on projects. Learn from industry experts and build real-world AI solutions.",
      features: [ /* Features are no longer displayed */ ],
    },
    {
      id: 4,
      image: program_4,
      //icon: program_icon_1,
      title: "Corporate Training Solutions",
      description: "Upskill your team with our expert-led corporate training. We deliver practical, hands-on workshops designed to drive measurable results.",
      features: [ /* Features are no longer displayed */ ]
    }
  ];
  
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="programs" id="program" ref={ref}>
      {/* Container is back to normal */}
      <div className="programs__container">
        
        {/* Header Section */}
        <div className={`programs__header ${inView ? 'is-visible' : ''}`}>
          <span className="programs__badge">Our Programs</span>
          <h2 className="programs__title">
            Transform Your Career with <span className="gradient-text">Cutting-Edge</span> Programs
          </h2>
          <p className="programs__subtitle">
            Choose from our industry-designed programs that bridge the gap between learning and earning. 
            Get job-ready with hands-on projects and expert mentorship.
          </p>
        </div>

        {/* Programs Grid (no ref or arrows) */}
        <div className="programs__grid">
          {programsData.map((program, index) => (
            <div 
              key={program.id}
              className={`programs__card ${inView ? 'is-visible' : ''} ${activeProgram === program.id ? 'programs__card--active' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }} // Stagger animation
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
              </div>

              {/* Program Content */}
              <div className="programs__content">
                <h3 className="programs__card-title">{program.title}</h3>
                <p className="programs__card-description">{program.description}</p>

                {/* --- FEATURES LIST REMOVED --- */}

                {/* Program Meta */}
                <div className="programs__meta">
                  <div className="programs__duration">
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

        {/* Bottom CTA (Stays full-width) */}
      <div className={`programs__bottom-cta ${ctaInView ? 'is-visible' : ''}`} ref={ctaRef}>
        <p className="programs__cta-text">
          Not sure which program is right for you? 
          <span className="programs__cta-highlight"> Speak with our career advisor</span>
        </p>
        <button className="programs__advisor-btn" onClick={handleScrollToContact}>
          Get Free Consultation
        </button>
      </div>
      
      </div> {/* <-- End of programs__container */}
    </section>
  );
};

export default Programs;