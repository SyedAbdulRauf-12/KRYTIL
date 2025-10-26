import React, { useState, useRef, useEffect } from "react";
import "./Programs.css";
import program_1 from "../../assets/web-dev-icon.png";
import program_2 from "../../assets/resume-build.png";
import program_3 from "../../assets/AI-school.png";
import program_4 from "../../assets/comp-spec-trin.png"
import arrow_icon from "../../assets/arrow-icon.png";
import { useInView } from 'react-intersection-observer';

const Programs = () => {

    // --- JS DRAG LOGIC START ---
    const scrollContainerRef = useRef(null);
    const isDragging = useRef(false);
    const startPos = useRef(0);
    const scrollLeft = useRef(0);
    const isMoved = useRef(false); 
    const clickHoldTimer = useRef(null); 

    // --- NEW: Teleport Logic ---
    useEffect(() => {
        const slider = scrollContainerRef.current;
        if (!slider || !slider.firstElementChild) return;

        // Calculate the width of one full set of cards (the point to reset to)
        const itemWidth = slider.firstElementChild.offsetWidth + 
                          parseFloat(window.getComputedStyle(slider).gap);
        const originalSetWidth = itemWidth * programsData.length;

        const handleScroll = () => {
            // Check if user has scrolled past the end of the first set (past the halfway point)
            if (slider.scrollLeft >= originalSetWidth) {
                // Teleport back to the start of the duplicated set
                slider.scrollLeft = 0;
            } 
            // Optional: If user scrolls backward past the start, jump to the end of the duplicated set
            else if (slider.scrollLeft === 0 && originalSetWidth > 0) {
                 // Check if user is actively dragging or scrolled backward from 0
                 // This part often requires more complex logic, so we will focus on the forward loop
            }
        };

        // Attach the scroll listener
        slider.addEventListener('scroll', handleScroll);
        
        // Cleanup the scroll listener
        return () => {
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this runs once on mount
    // --- END NEW LOGIC ---

    // --- Existing Drag Handlers ---
    useEffect(() => {
        const slider = scrollContainerRef.current;
        if (!slider) return;

        const handleMouseDown = (e) => {
            isDragging.current = true;
            isMoved.current = false; 
            slider.classList.add('active-dragging');
            startPos.current = e.pageX - slider.offsetLeft;
            scrollLeft.current = slider.scrollLeft;

            clickHoldTimer.current = setTimeout(() => {
                 isMoved.current = true; 
            }, 150); 
        };

        const handleMouseLeave = () => {
            isDragging.current = false;
            slider.classList.remove('active-dragging');
        };

        const handleMouseUp = () => {
            isDragging.current = false;
            slider.classList.remove('active-dragging');
            clearTimeout(clickHoldTimer.current);
        };

        const handleMouseMove = (e) => {
            if (!isDragging.current) return;
            e.preventDefault();
            
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startPos.current) * 1.5; 
            
            if (Math.abs(walk) > 10) { 
                isMoved.current = true;
                clearTimeout(clickHoldTimer.current);
            }

            slider.scrollLeft = scrollLeft.current - walk;
        };

        slider.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('mouseleave', handleMouseLeave);
        
        return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    // --- JS DRAG LOGIC END ---


    // ... (rest of your state/ref declarations) ...
    const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });


    const handleLinkClick = (e) => {
        if (isMoved.current) {
            e.preventDefault(); 
            e.stopPropagation();
        }
    };
    
    // NOTE: Keep your programsData array here
    const programsData = [
        { id: 1, image: program_1, title: "Web Development", description: "We build beautiful, responsive, and secure websites designed to engage your audience, drive conversions, and deliver measurable results.", link: "https://www.krytil.com/web-dev", features: [] },
        { id: 2, image: program_2, title: "AI Resume Builder", description: "Create professional, ATS-optimized resumes powered by artificial intelligence. Get personalized suggestions and land more interviews.", link: "https://cv.krytil.com", features: [], },
        { id: 3, image: program_3, title: "AI School", description: "Master Artificial Intelligence and Machine Learning with hands-on projects. Learn from industry experts and build real-world AI solutions.", link: "https://www.krytil.com/ai-school", features: [], },
        { id: 4, image: program_4, title: "Corporate Training Solutions", description: "Upskill your team with our expert-led corporate training. We deliver practical, hands-on workshops designed to drive measurable results.", link: "https://www.krytil.com/corporate", features: [] }
    ];

    const handleScrollToContact = () => { /* ... */ };

    return (
        <section className="programs" id="program">
            <div className="programs__container">

                {/* Header Section */}
                <div className={`programs__header ${headerInView ? 'is-visible' : ''}`} ref={headerRef}>
                    <span className="programs__badge">Our Programs</span>
                    <h2 className="programs__title">
                        Transform Your Career with <span className="gradient-text">Cutting-Edge</span> Programs
                    </h2>
                    <p className="programs__subtitle">
                        Choose from our industry-designed programs that bridge the gap between learning and earning.
                    </p>
                </div>

                {/* --- Scrollable Grid Wrapper --- */}
                <div className="programs__scroll-wrapper">
                    {/* --- Attach ref here --- */}
                    <div className="programs__grid programs__grid--draggable" ref={scrollContainerRef}>
                        {/* --- Duplicated map for infinite effect --- */}
                        {[...programsData, ...programsData].map((program, index) => (
                            <div 
                                key={`${program.id}-${index}`} 
                                className={`programs__card`}
                                onClick={handleLinkClick}
                            >
                                {/* Program Image */}
                                <div className="programs__image-container">
                                    <img src={program.image} alt={program.title} className="programs__image" />
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
                                    
                                    <a 
                                        href={program.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="programs__cta"
                                    > 
                                        Explore Program
                                        <img src={arrow_icon} alt="Arrow" className="programs__cta-arrow" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 
                
            </div> 

            {/* Bottom CTA */}
            <div className="programs__container">
                <div className={`programs__bottom-cta ${ctaInView ? 'is-visible' : ''}`} ref={ctaRef}>
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