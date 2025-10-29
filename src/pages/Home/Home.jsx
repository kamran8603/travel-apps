import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="discover-india-container">
      {/* Left Side - Discover India Content */}
      <div className="left-section">
        <h1 className="discover-title">Discover India</h1>
        <p className="journey-text">
          A Journey Through Culture, Nature<br />
          & Heritage
        </p>
        <button className="start-button">Start Experting</button>
      </div>

      {/* Right Side - 4 Image Boxes */}
      <div className="right-section">
        <div className="image-boxes">
          <div className="image-box">Heritage</div>
          <div className="image-box">Nature</div>
          <div className="image-box">Spiritual</div>
          <div className="image-box">Food</div>
        </div>
      </div>
    </div>
  );
};

export default Home;