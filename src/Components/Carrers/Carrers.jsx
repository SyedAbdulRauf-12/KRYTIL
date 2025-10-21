import React from "react";
import "./Carrers.css";
import career_icon from "../../assets/career-path.png";
import resume_icon from "../../assets/resume.png";
import network_icon from "../../assets/network.png";
import interview_icon from "../../assets/interview.png";
import salary_icon from "../../assets/salary.png";
import internship_icon from "../../assets/internship.png";
import alumni_icon from "../../assets/alumni.png";

const Careers = () => {
  const jobReadinessFeatures = [
    {
      icon: resume_icon,
      title: "Resume & Portfolio Engineering",
      description: "We move beyond generic templates. You will create an impact-focused portfolio built around the real-world projects you completed, ensuring your application gets noticed."
    },
    {
      icon: network_icon,
      title: "LinkedIn Professional Branding",
      description: "We guide you through optimizing your digital presence to attract recruiters, building a narrative around your new, in-demand technical expertise."
    },
    {
      icon: interview_icon,
      title: "Mock Interviews & Tech Screening",
      description: "Experience realistic behavioral and technical interviews (including whiteboarding and debugging challenges) led by industry veterans."
    },
    {
      icon: salary_icon,
      title: "Negotiation Coaching",
      description: "Learn how to accurately value your new skills and negotiate compensation packages, maximizing your starting salary."
    }
  ];

  const industryConnections = [
    {
      icon: career_icon,
      title: "Direct Connects to Hiring Partners",
      description: "We facilitate introductions and exclusive hiring events with our network of dynamic startups and established Multinational Corporations (MNCs)."
    },
    {
      icon: internship_icon,
      title: "Internship Opportunities",
      description: "Gain necessary on-the-job experience. We help place qualifying students in internships that serve as a direct bridge to full-time employment."
    },
    {
      icon: alumni_icon,
      title: "Alumni Network Advantage",
      description: "Join a rapidly growing community of Krytil graduates who are actively working in leading tech roles, providing ongoing referrals and mentorship."
    }
  ];

  const successStats = [
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Hiring Partners" },
    { number: "1000+", label: "Alumni Network" },
    { number: "₹12L+", label: "Average Starting Salary" }
  ];

  return (
    <section className="careers" id="carrer">
      <div className="careers__container">
        {/* Header Section */}
        <div className="careers__header">
          <span className="careers__badge">Career Acceleration</span>
          <h1 className="careers__title">
            The Krytil <span className="gradient-text">Skill-to-Paycheck</span> Pipeline
          </h1>
          <p className="careers__subtitle">
            At KRYTIL, our mission is simple: to transform dedicated learners into highly compensated, 
            job-ready technology professionals. We don't promise placements; we deliver skill-to-paycheck 
            pipelines engineered for maximum career acceleration.
          </p>
        </div>

        {/* Success Stats */}
        <div className="careers__stats">
          {successStats.map((stat, index) => (
            <div key={index} className="careers__stat-item">
              <div className="careers__stat-number">{stat.number}</div>
              <div className="careers__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Job Readiness Section */}
        <div className="careers__section">
          <div className="careers__section-header">
            <h2 className="careers__section-title">
              The Job Readiness <span className="highlight">Guarantee</span>
            </h2>
            <p className="careers__section-description">
              We ensure every Krytil graduate is not just qualified but is the candidate 
              companies actively seek to hire. Our career services are built into the core of the curriculum.
            </p>
          </div>

          <div className="careers__features-grid">
            {jobReadinessFeatures.map((feature, index) => (
              <div key={index} className="careers__feature-card">
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
        <div className="careers__section">
          <div className="careers__section-header">
            <h2 className="careers__section-title">
              Industry Connections <span className="highlight">& Outreach</span>
            </h2>
            <p className="careers__section-description">
              Your success is our network's success. We actively work to put our graduates 
              in front of companies looking for talent that can deploy code on Day 1.
            </p>
          </div>

          <div className="careers__connections-grid">
            {industryConnections.map((connection, index) => (
              <div key={index} className="careers__connection-card">
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
        <div className="careers__cta">
          <div className="careers__cta-content">
            <h2 className="careers__cta-title">
              Ready to Launch Your Tech Career?
            </h2>
            <p className="careers__cta-description">
              Join thousands of successful graduates who transformed their careers with Krytil's proven pipeline.
            </p>
            <div className="careers__cta-buttons">
              <button className="careers__cta-btn careers__cta-btn--primary">
                Apply Now
              </button>
              <button className="careers__cta-btn careers__cta-btn--secondary">
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