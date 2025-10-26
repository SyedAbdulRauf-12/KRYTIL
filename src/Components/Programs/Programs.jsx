import React, { useState } from "react"; // Removed useRef as it's not needed for CSS animation
import "./Programs.css";
import program_1 from "../../assets/web-dev-icon.png";
import program_2 from "../../assets/resume-build.png";
import program_3 from "../../assets/AI-school.png";
import program_4 from "../../assets/comp-spec-trin.png"
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import arrow_icon from "../../assets/arrow-icon.png";
import { useInView } from 'react-intersection-observer'; // Keep for header/CTA animations

const Programs = () => {
  // Removed activeProgram state
  // const [activeProgram, setActiveProgram] = useState(null);

  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const programsData = [
    {
      id: 1,
      image: program_1,
      icon: program_icon_1,
      title: "Web Development",
      description: "We build beautiful, responsive, and secure websites designed to engage your audience, drive conversions, and deliver measurable results.",
      features: []
    },
    {
      id: 2,
      image: program_2,
      icon: program_icon_2,
      title: "AI Resume Builder",
      description: "Create professional, ATS-optimized resumes powered by artificial intelligence. Get personalized suggestions and land more interviews.",
      features: [],
      link: "http://cv.krytil.com/"
    },
    {
      id: 3,
      image: program_3,
      icon: program_icon_3,
      title: "AI School",
      description: "Master Artificial Intelligence and Machine Learning with hands-on projects. Learn from industry experts and build real-world AI solutions.",
      features: [],
    },
    {
      id: 4,
      image: program_4,
      //icon: program_icon_1,
      title: "Corporate Training Solutions",
      description: "Upskill your team with our expert-led corporate training. We deliver practical, hands-on workshops designed to drive measurable results.",
      features: []
    }
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="programs" id="program"> {/* Removed ref */}
      {/* Container */}
      <div className="programs__container">

        {/* Header Section */}
        <div
          className={`programs__header ${headerInView ? 'is-visible' : ''}`}
          ref={headerRef} // Apply ref here for header animation
        >
          <span className="programs__badge">Our Programs</span>
          <h2 className="programs__title">
            Transform Your Career with <span className="gradient-text">Cutting-Edge</span> Programs
          </h2>
          <p className="programs__subtitle">
            Choose from our industry-designed programs that bridge the gap between learning and earning.
            Get job-ready with hands-on projects and expert mentorship.
          </p>
        </div>

        {/* --- 1. Wrapper for the autoscroll --- */}
        <div className="programs__scroll-wrapper">
          {/* --- 2. Grid with autoscroll class --- */}
          {/* --- 3. Map over data TWICE for seamless loop --- */}
          <div className="programs__grid programs__grid--autoscroll">
            {[...programsData, ...programsData].map((program, index) => (
              <div
                key={`${program.id}-${index}`} // Unique key
                className={`programs__card`} // Simplified className
                // Removed hover handlers
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
                  <div className="programs__meta">
                    <div className="programs__duration">
                      <span className="programs__meta-value">{program.duration}</span>
                    </div>
                  </div>
                  <a href={program.link} // Use the unique link property
                      target="_blank"     // Recommended: Opens link in a new tab
                      rel="noopener noreferrer" 
                      className="programs__cta" // Keep the class name for styling
                  >
                        Explore Program
                        <img src={arrow_icon} alt="Arrow" className="programs__cta-arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> {/* <-- End of scroll-wrapper --> */}
      </div> {/* <-- End of programs__container --> */}

      {/* Bottom CTA (needs its own container for centering) */}
      <div className="programs__container">
        <div
          className={`programs__bottom-cta ${ctaInView ? 'is-visible' : ''}`}
          ref={ctaRef} // Apply ref here for CTA animation
        >
          <p className="programs__cta-text">
            Not sure which program is right for you?
            <span className="programs__cta-highlight"> Speak with our career advisor</span>
          </p>
          <button className="programs__advisor-btn" onClick={handleScrollToContact}>
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;