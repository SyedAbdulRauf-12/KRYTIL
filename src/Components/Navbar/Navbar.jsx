import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/krytill.png';

const Navbar = ({ theme, toggleTheme }) => { // Props are already here
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const navItems = [
    { to: 'hero', label: 'Home', offset: 0 },
    { to: 'program', label: 'Program', offset: -30 },
    { to: 'about', label: 'About Us', offset: -15 },
    { to: 'carrer', label: 'Careers', offset: -20 },
    //{ to: 'testimonials', label: 'Testimonials', offset: -260 },
  ];

  return (
    <>
      <nav className={`navbar ${sticky ? 'navbar--sticky' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__brand">
            <img src={logo} alt="Company Logo" className="navbar__logo" />
          </div>

          <ul className="navbar__menu">
            {navItems.map((item) => (
              <li key={item.to} className="navbar__item">
                <Link
                  to={item.to}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  spy={true}
                  onSetActive={handleSetActive}
                  className={`navbar__link ${
                    activeLink === item.to ? 'navbar__link--active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* --- NEW THEME TOGGLE (Desktop) --- */}
            <li className="navbar__item">
              <button 
                onClick={toggleTheme} 
                className="navbar__theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
            {/* --- END OF NEW BLOCK --- */}

            <li className="navbar__item">
              <Link
                to="contact"
                smooth={true}
                offset={-30}
                duration={500}
                className="navbar__cta"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <button 
            className={`navbar__hamburger ${mobileMenu ? 'navbar__hamburger--active' : ''}`}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`navbar__mobile ${mobileMenu ? 'navbar__mobile--active' : ''}`}>
          <ul className="navbar__mobile-menu">
            {navItems.map((item) => (
              <li key={item.to} className="navbar__mobile-item">
                <Link
                  to={item.to}
                  // ... (all other props)
                  className={`navbar__mobile-link ${
                    activeLink === item.to ? 'navbar__mobile-link--active' : ''
                  }`}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            
            {/* --- NEW THEME TOGGLE (Mobile) --- */}
            <li className="navbar__mobile-item">
              <button 
                onClick={toggleTheme} 
                className="navbar__mobile-theme-toggle"
              >
                {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
              </button>
            </li>
            {/* --- END OF NEW BLOCK --- */}

            <li className="navbar__mobile-item">
              <Link
                to="contact"
                // ... (all other props)
                className="navbar__mobile-cta"
                onClick={() => setMobileMenu(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {mobileMenu && (
        <div 
          className="navbar__overlay" 
          onClick={() => setMobileMenu(false)}
        />
      )}
    </>
  );
};

export default Navbar;