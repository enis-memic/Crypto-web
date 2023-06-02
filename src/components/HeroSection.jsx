import React from 'react';
import search from '../assets/search.svg';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';
import disocrd from '../assets/discord.png';
import youtube from '../assets/youtube.png';
import hero from '../assets/hero.svg';

function HeroSection() {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            The <span className="highlighted">Decentralized </span>Cross-Chain
            Exchange
          </h1>
          <p className="hero-info-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            eaque voluptatibus animi nemo fugit incidunt veritatis cumque
            eligendi sequi! Quidem ad molestiae in voluptatem dolorem officiis
            ut, amet non pariatur?
          </p>
          <div className="search-container">
            <div className="search-input-wrapper">
              <img className="search" src={search} alt="search" />
              <input
                type="text"
                className="search-input"
                placeholder="Search 5000+ tokens across 9 Chains..."
              />
            </div>
            <button className="search-btn primary">
              <span>Start Swapping</span>
            </button>
          </div>
          <div className="social-links-container">
            <div className="social-links">
              <a href="/">
                <img src={telegram} alt="" />
              </a>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
              <a href="/">
                <img src={disocrd} alt="" />
              </a>
              <a href="/">
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <div>
          <img src={hero} alt="blockchain" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
