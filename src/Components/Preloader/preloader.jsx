import React from 'react';
import './preloader.css';
import krytilLogo from '../../assets/krytill.png'; // <-- Adjust this path to your logo

// We pass in 'isLoading' as a prop to control when it fades out
function Preloader({ isLoading }) {
  return (
    <div className={`preloader ${!isLoading ? 'preloader--hidden' : ''}`}>
      <img 
        src={krytilLogo} 
        alt="KRYTIL Logo" 
        className="preloader__logo" 
      />
      <div className="preloader__spinner"></div>
    </div>
  );
}

export default Preloader;