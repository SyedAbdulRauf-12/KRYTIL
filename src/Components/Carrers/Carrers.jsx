import React from "react";
// Removed Link import since it wasn't used for navigation here
import "./Carrers.css";
import career_icon from "../../assets/career-path-1.png";
import resume_icon from "../../assets/resume.png";
import network_icon from "../../assets/network-icon-1.png";
import interview_icon from "../../assets/interview-1.png";
import salary_icon from "../../assets/nego-update.png";
import internship_icon from "../../assets/internship.png";
import alumni_icon from "../../assets/alumin-1.png";

// --- 1. Import the hook ---
import { useInView } from 'react-intersection-observer';

const Careers = () => {

  // --- 2. Set up observer hook for the main section ---
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // --- 3. Set up separate observers for subsections if needed (optional, for more control) ---
  const { ref: readinessRef, inView: readinessInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: connectionsRef, inView: connectionsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  const jobReadinessFeatures = [
    { icon: resume_icon, title: "Resume & Portfolio Engineering", description: "We move beyond generic templates. You will create an impact-focused portfolio built around the real-world projects you completed, ensuring your application gets noticed." },
    { icon: network_icon, title: "LinkedIn Professional Branding", description: "We guide you through optimizing your digital presence to attract recruiters, building a narrative around your new, in-demand technical expertise." },
    { icon: interview_icon, title: "Mock Interviews & Tech Screening", description: "Experience realistic behavioral and technical interviews (including whiteboarding and debugging challenges) led by industry veterans." },
    { icon: salary_icon, title: "Negotiation Coaching", description: "Learn how to accurately value your new skills and negotiate compensation packages, maximizing your starting salary." }
  ];

  const industryConnections = [
    { icon: career_icon, title: "Direct Connects to Hiring Partners", description: "We facilitate introductions and exclusive hiring events with our network of dynamic startups and established Multinational Corporations (MNCs)." },
    { icon: internship_icon, title: "Internship Opportunities", description: "Gain necessary on-the-job experience. We help place qualifying students in internships that serve as a direct bridge to full-time employment." },
    { icon: alumni_icon, title: "Alumni Network Advantage", description: "Join a rapidly growing community of Krytil graduates who are actively working in leading tech roles, providing ongoing referrals and mentorship." }
  ];

  const handleScrollToProgram = () => { // Renamed from handleScrollToContact
    const programsSection = document.getElementById('program');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToContact = () => { // Added for the second button
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // --- 4. Attach the main ref ---
    <section className="careers" id="carrer" ref={sectionRef}>
      <div className="careers__container">
        
        {/* Header Section */}
        {/* --- 5. Add conditional classes --- */}
        <div className={`careers__header ${sectionInView ? 'is-visible' : ''}`}>
          <span className="careers__badge">Career Acceleration</span>
          <h1 className="careers__title">
            The Krytil <span className="gradient-text">Skill-to-Paycheck</span> Pipeline
          </h1>
          <p className="careers__subtitle">
            At KRYTIL, our mission is simple: to transform dedicated learners into highly compensated, 
            job-ready technology professionals...
          </p>
        </div>

        {/* Job Readiness Section */}
        {/* --- Attach ref and conditional classes --- */}
        <div className="careers__section" ref={readinessRef}>
          <div className={`careers__section-header ${readinessInView ? 'is-visible' : ''}`}>
            {/*<h2 className="careers__section-title">
              The Job Readiness <span className="highlight">Guarantee</span>
            </h2>*/}
            <p className="careers__section-description">
              We ensure every Krytil graduate is not just qualified but is the candidate 
              companies actively seek to hire...
            </p>
          </div>

          <div className="careers__features-grid">
            {jobReadinessFeatures.map((feature, index) => (
              // Add delay based on index for stagger effect
              <div 
                key={index} 
                className={`careers__feature-card ${readinessInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }} 
              >
                <div className="careers__feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="careers__feature-title">{feature.title}</h3>
                <p className="careers__feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Connections Section */}
        {/* --- Attach ref and conditional classes --- */}
        <div className="careers__section" ref={connectionsRef}>
          <div className={`careers__section-header ${connectionsInView ? 'is-visible' : ''}`}>
            <h2 className="careers__section-title">
              Industry Connections <span className="highlight">& Outreach</span>
            </h2>
            <p className="careers__section-description1">
              Your success is our network's success. We actively work to put our graduates 
              in front of companies looking for talent...
            </p>
          </div>

          <div className="careers__connections-grid">
            {industryConnections.map((connection, index) => (
               <div 
                key={index} 
                className={`careers__connection-card ${connectionsInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }} 
              >
                <div className="careers__connection-icon">
                  <img src={connection.icon} alt={connection.title} />
                </div>
                <div className="careers__connection-content">
                  <h3 className="careers__connection-title">{connection.title}</h3>
                  <p className="careers__connection-description">{connection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* --- Attach ref and conditional classes --- */}
        <div className={`careers__cta ${ctaInView ? 'is-visible' : ''}`} ref={ctaRef}>
          <div className="careers__cta-content">
            <h2 className="careers__cta-title">
              Ready to Launch Your Tech Career?
            </h2>
            <p className="careers__cta-description">
              Join thousands of successful graduates who transformed their careers with Krytil's proven pipeline.
            </p>
            <div className="careers__cta-buttons">
              <button className="careers__cta-btn careers__cta-btn--primary" onClick={handleScrollToProgram}>
                Explore Now
              </button>
              <button className="careers__cta-btn careers__cta-btn--secondary" onClick={handleScrollToContact}>
                Speak with Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;