import React, { useState, useEffect } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import play_icon from '../../assets/play-icon.png'

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Job-Ready", "Industry-Aligned", "Future-Proof", "High-Growth"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleExploreClick = () => {
    // Smooth scroll to programs section
    const programsSection = document.getElementById('program');
    programsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchVideo = () => {
    // Add video modal or redirect logic here
    console.log("Play video clicked");
  };

  return (
    <section className="hero" id="hero">
      {/* Background Elements */}
      <div className="hero__background">
        <div className="hero__gradient-overlay"></div>
        <div className="hero__pattern"></div>
      </div>

      <div className="hero__container container">
        {/* Main Content */}
        <div className="hero__content">
          {/* Badge */}
          <div className="hero__badge">
            <span>🚀 Trusted by 10,000+ Career Changers</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero__title">
            We Ensure 
            <span className="hero__typing">
              {" "}{words[currentWord]}{" "}
            </span>
            Expertise For A Better Career
          </h1>

          {/* Description */}
          <p className="hero__description">
            Our cutting-edge curriculum is designed to empower you with the real-world skills, 
            industry projects, and direct connections needed to excel in the dynamic field of tech.
          </p>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">95%</span>
              <span className="hero__stat-label">Placement Rate</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">12L+</span>
              <span className="hero__stat-label">Avg. Starting Salary</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">6 Months</span>
              <span className="hero__stat-label">To Your Dream Job</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero__buttons">
            <button className="hero__btn hero__btn--primary" onClick={handleExploreClick}>
              Start Your Journey
              <img src={dark_arrow} alt="" className="hero__btn-icon" />
            </button>
            
            <button className="hero__btn hero__btn--secondary" onClick={handleWatchVideo}>
              <img src={play_icon} alt="" className="hero__play-icon" />
              Watch Success Story
            </button>
          </div>

          {/* Trust Badges */}
          <div className="hero__trust">
            <span className="hero__trust-label">Trusted by graduates at</span>
            <div className="hero__companies">
              <span className="hero__company">Google</span>
              <span className="hero__company">Amazon</span>
              <span className="hero__company">Microsoft</span>
              <span className="hero__company">Meta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero