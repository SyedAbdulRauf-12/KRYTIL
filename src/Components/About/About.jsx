import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/GIF/letters-fall.gif";
//import play_icon from "../../assets/play-icon.png";

// --- 1. Import the hook from the library you just installed ---
import { useInView } from 'react-intersection-observer';

const About = () => {
 // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  /*const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // Add your video play logic here
    console.log("Play video clicked");
  };*/

  // --- 2. Set up the hook to watch the section ---
  const { ref, inView } = useInView({
    triggerOnce: false,  // Only animates once
    threshold: 0.1,     // Triggers when 10% of the section is visible
  });

  return (
    // --- 3. Attach the 'ref' to your main section ---
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        
        {/* --- 4. Add the conditional 'is-visible' class to each element --- */}

        <span className={`about__badge ${inView ? 'is-visible' : ''}`}>
          ABOUT KRYTIL
        </span>

        {/* Left Column - Image */}
        <div className={`about__left ${inView ? 'is-visible' : ''}`}>
          <div className="about__image-wrapper">
            <img 
              src={about_img} 
              alt="Krytil team working together" 
              className="about__image" 
            />
            <div className="about__image-overlay"></div>
            
            {/* Play Button 
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
            </button>*/}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className={`about__right ${inView ? 'is-visible' : ''}`}>
          <div className="about__content">
            <h2 className="about__title">
              Our Vision: Where Tech Careers Get <span className="highlight">Real.</span>
            </h2>
            
            <div className="about__description">
              <p className="about__text">
                At Krytil, we're closing the gap between academic learning and real-world tech demands by 
                building AI-powered products that help learners master industry-ready skills fast. 
                From AI and Cybersecurity to Cloud and Full Stack Development, 
                we turn ambition into capability — empowering future innovators to land 
                high-impact roles or launch their own ventures. 
                With Krytil, you don’t just learn tech — you become part of it.
              </p>
            </div>

            {/* Stats Section 
            <div className="about__stats">
              ...
            </div>*/}

            {/* CTA Button */}
            <a href="#contact">
              <button className="about__cta-btn">
                Start Your Journey
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;