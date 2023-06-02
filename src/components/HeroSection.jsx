import React from 'react';
import search from '../assets/search.svg';
import { ReactComponent as Telegram } from '../assets/telegram.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Discord } from '../assets/discord.svg';
import { ReactComponent as Youtube } from '../assets/youtube.svg';
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
                <Telegram className="icon" />
              </a>
              <a href="/">
                <Twitter className="icon" />
              </a>
              <a href="/">
                <Discord className="icon" />
              </a>
              <a href="/">
                <Youtube className="icon" />
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
