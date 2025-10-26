import React from 'react';
import Slider from "react-slick"; // Import the slider component

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Hero.css'; // Your custom styles
import dark_arrow from '../../assets/dark-arrow.png';
// Removed slide background imports

const Hero = () => {

  const handleExploreClick = () => {
    const programsSection = document.getElementById('program');
    programsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Slider settings updated
  const settings = {
    dots: false, // Hide navigation dots
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Keep autoplay enabled
    autoplaySpeed: 5000, // Change slide every 5 seconds (adjust as needed)
    fade: false,
    pauseOnHover: true,
    arrows: false,
    // Removed appendDots and customPaging
  };

  return (
    // The background GIF is now applied via CSS to this section
    <section className="hero" id="hero">

      {/* Slider Component */}
      <Slider {...settings} className="hero__slider">

        {/* === Slide 1 === */}
        <div className="hero__slide">
           <div className="hero__container container">
            <div className="hero__content hero__content--slide2">
              <h1 className="hero__title">
                 <div>Welcome to <span className="hero__typing-alt">Krytil</span> </div>
               </h1>
               <p className="hero__description">
                 <div>The software that moves you forward. <br/>Krytil is where tech meets ambition.
We’re a next-gen software company creating AI-powered products that help you learn faster, work smarter, and grow like a pro.</div>
               </p>
               <div className="hero__buttons">
                 <button className="hero__btn hero__btn--primary" onClick={handleExploreClick}>
                   Get Started
                 </button>
               </div>
             </div>
           </div>
        </div>
        {/* Removed slide-specific class */}
        <div className="hero__slide">
          <div className="hero__container container">
            <div className="hero__content hero__content--slide2">
              <h1 className="hero__title">
                <div>We Build Software</div>
                <div>That Builds <span className="hero__typing-alt">You.</span></div>
              </h1>
              <p className="hero__description">
                Tech meets ambition at Krytil — where smart tools help you learn faster, work smarter, and grow like a pro.
              </p>
              <div className="hero__buttons">
                <button className="hero__btn hero__btn--primary" onClick={handleExploreClick}>
                  Start Your Journey
                  <img src={dark_arrow} alt="" className="hero__btn-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* === Slide 2 === */}
        {/* Removed slide-specific class */}
        <div className="hero__slide">
           <div className="hero__container container">
            <div className="hero__content hero__content--slide2">
              <h1 className="hero__title">
                 <div>Unlock Your Potential</div>
                 <div>With <span className="hero__typing-alt">AI-Driven</span> Learning</div>
               </h1>
               <p className="hero__description">
                 Experience personalized learning paths and career guidance powered by cutting-edge AI technology.
               </p>
               <div className="hero__buttons">
                 <button className="hero__btn hero__btn--primary" onClick={handleExploreClick}>
                   Explore Programs
                 </button>
               </div>
             </div>
           </div>
        </div>

        {/* Add more slides here if needed */}


      </Slider>

      {/* Scroll Indicator (kept outside slider) */}
      <div className="hero__scroll-indicator">
        <span>Scroll to explore</span>
        <div className="hero__scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero;