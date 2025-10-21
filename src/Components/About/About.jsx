import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // Add your video play logic here
    console.log("Play video clicked");
  };

  return (
    <section className="about" id="about">
      <div className="about__container">
        {/* Left Column - Image */}
        <div className="about__left">
          <div className="about__image-wrapper">
            <img 
              src={about_img} 
              alt="Krytil team working together" 
              className="about__image" 
            />
            <div className="about__image-overlay"></div>
            
            {/* Play Button */}
            <button 
              className="about__play-btn" 
              onClick={handlePlayVideo}
              aria-label="Play introduction video"
            >
              <img 
                src={play_icon} 
                alt="Play" 
                className="about__play-icon" 
              />
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="about__right">
          <div className="about__content">
            <span className="about__badge">ABOUT KRYTIL</span>
            
            <h2 className="about__title">
              Our Vision: Where Tech Careers Get <span className="highlight">Real.</span>
            </h2>
            
            <div className="about__description">
              <p className="about__text">
                At KRYTIL, we exist to bridge the critical gap between academic theory
                and real-world tech industry demands. We are tired of the traditional
                "learn theory, get confused, repeat" cycle. We skip the outdated
                material and teach the essential, in-demand skills that companies are
                actively hiring for—today.
              </p>
              
              <p className="about__text">
                From <strong>Artificial Intelligence</strong> to <strong>Cybersecurity</strong>, 
                from <strong>Cloud Infrastructure</strong> to <strong>Full Stack Development</strong>, 
                we transform motivated students and recent graduates into highly skilled, 
                job-ready tech professionals.
              </p>
              
              <p className="about__text">
                If your ambition is a high-paying tech career or to successfully
                launch your own venture, Krytil is your focused and direct pathway.
              </p>
            </div>

            {/* Stats Section */}
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">1000+</span>
                <span className="about__stat-label">Students Trained</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">95%</span>
                <span className="about__stat-label">Placement Rate</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">50+</span>
                <span className="about__stat-label">Industry Partners</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="about__cta-btn">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;