import React from 'react';
import './Footer.css';
import KrytilLogo from '../../assets/krytill.png'; // Make sure this path is correct
import MailIcon from '../../assets/mail-contact.png'; // Assuming you have these icons
import PhoneIcon from '../../assets/phone-icon.png';
import LocationIcon from '../../assets/location-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import LinkedInIcon from '../../assets/linkedin.png';
import YoutubeIcon from '../../assets/youtube.png';
import GithubIcon from '../../assets/github.png';
import InstagramIcon from '../../assets/instagram.png';
import UpArrowIcon from '../../assets/up.png'; // Icon for scroll-to-top

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer__top-section">
        <div className="footer__top-content">
          <div className="footer__top-left">
            <span className="footer__badge">
              <img src={UpArrowIcon} alt="Stay Updated" className="footer__badge-icon" /> {/* Using UpArrowIcon for badge for now, replace if you have a specific "update" icon */}
              Stay Updated
            </span>
            <h2 className="footer__top-title">Get Career Tips & Updates</h2>
            <p className="footer__top-description">
              Join 10,000+ professionals receiving resume tips, job search strategies, and industry insights.
            </p>
          </div>
          <div className="footer__top-right">
            <div className="footer__newsletter">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="footer__newsletter-input" 
                aria-label="Enter your email for newsletter"
              />
              <button className="footer__newsletter-button">Subscribe →</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main-section">
        <div className="footer__main-content">
          <div className="footer__col footer__col--about">
            <img src={KrytilLogo} alt="Krytil Logo" className="footer__logo" />
            <p className="footer__description">
              Creating professional, ATS-friendly resumes that help you land your dream job faster. Join
              thousands of successful professionals who trust Krytil.
            </p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <img src={MailIcon} alt="Email" className="footer__contact-icon" />
                <span>Hello@krytil.com</span>
              </div>
              <div className="footer__contact-item">
                <img src={PhoneIcon} alt="Phone" className="footer__contact-icon" />
                <span>+91 9663959839</span>
              </div>
              <div className="footer__contact-item">
                <img src={LocationIcon} alt="Location" className="footer__contact-icon" />
                <span>Bengaluru</span>
              </div>
            </div>
          </div>

          <div className="footer__col footer__col--links">
            <h3 className="footer__col-title">Product</h3>
            <ul className="footer__links">
              <li><a href="#features">Features</a></li>
              <li><a href="#templates">Templates</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#affiliate">Affiliate</a></li>
            </ul>
          </div>

          <div className="footer__col footer__col--links">
            <h3 className="footer__col-title">Resources</h3>
            <ul className="footer__links">
              <li><a href="#blog">Blog</a></li>
              <li><a href="#community">Community</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="footer__col footer__col--links">
            <h3 className="footer__col-title">Legal</h3>
            <ul className="footer__links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookie">Cookie Policy</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom-section">
        <div className="footer__bottom-content">
          <p className="footer__copyright">© 2025 Krytil. All rights reserved.</p>
          <ul className="footer__legal-links">
            <li><a href="#privacy-small">Privacy</a></li>
            <li><a href="#terms-small">Terms</a></li>
            <li><a href="#cookies-small">Cookies</a></li>
          </ul>
          <div className="footer__social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src={YoutubeIcon} alt="YouTube" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={GithubIcon} alt="GitHub" />
            </a>
             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        <img src={UpArrowIcon} alt="Scroll to Top" />
      </button>
    </footer>
  );
};

export default Footer;