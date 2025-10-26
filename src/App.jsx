import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// --- Import All Your Components ---
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Careers from './Components/Carrers/Carrers';
import Preloader from './Components/Preloader/preloader';
// import Testimonials from './Components/Testimonials/Testimonials'; // Still commented out

// --- 1. HELPER FUNCTION: Gets the user's saved or preferred theme ---
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const App = () => {

  // --- PRELOADER LOGIC (Unchanged) ---
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // 1.5-second minimum
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []); // This empty array is correct, it runs once on mount.

  // --- 2. THEME LOGIC (Newly Added) ---
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // This effect applies the theme to the <body> and saves it
  useEffect(() => {
    document.body.className = ''; // Clear old theme classes
    document.body.classList.add(theme); // Add 'light' or 'dark'
    localStorage.setItem('theme', theme);
  }, [theme]); // This runs *only* when the 'theme' state changes.

  // --- 3. MAIN RETURN (with Router) ---
  return (
    <>
      {/* The Preloader sits on top of everything, controlled by state */}
      <Preloader isLoading={isLoading} />

      {/* The Navbar is OUTSIDE <Routes> so it stays on every page.
        We pass the theme state and toggle function down to it as props.
      */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* <Routes> is the "page switcher" */}
      <Routes>

        {/* Route 1: The Homepage (path="/") */}
        <Route path="/" element={
          <>
            <Hero />
            <div className="container">
              <div id="program">
                <Programs />
              </div>
              <div id="about"> {/* <-- I added an ID here in case you want to link to it */}
                <About />
              </div>
              <div id="careers">
                <Careers />
              </div>
              
              {/* <Title subTitle='TESTIMONIALS' title='What Student Says' />
              <Testimonials /> */}
              <div id="contact">
                <Contact />
              </div>
            </div>
          </>
        } />

        {/* Route 2: The Contact Page (path="/Contact") */}
        <Route path="/Contact" element={
          <div className="container">
            <Title title='Get in Touch' />
            <Contact />
          </div>
        } />

      </Routes>

      <Footer />
    </>
  );
}

export default App;