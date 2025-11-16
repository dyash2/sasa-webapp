import React from 'react';

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">

         
          <div className="slider-item">
            <img 
              src="/images/banner-1.jpg" 
              alt="women's latest fashion sale" 
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">MEGA DISCOUNTS! </p>
              <h2 className="banner-title">FALL COLLECTION: WOMEN'S PREMIUM WEAR</h2>
              <p className="banner-text">
                starting at $ <b>49</b>.99
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>

          <div className="slider-item">
            <img 
              src="/images/10681.jpg" 
              alt="modern sunglasses" 
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">✨   NEW ARRIVALS</p>
              <h2 className="banner-title">LUXURY EYEWEAR & ACCESSORIES</h2>
              <p className="banner-text">
                starting at $ <b>75</b>.00
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>

          <div className="slider-item">
            <img 
              src="/images/banner-2.jpg" 
              alt="new fashion summer sale" 
              className="banner-img"
            />
            <div className="banner-content">
              <p className="banner-subtitle">⭐ LIMITED TIME DEAL</p>
              <h2 className="banner-title">THE ULTIMATE HOME OFFICE ESSENTIALS</h2>
              <p className="banner-text">
                starting at $ <b>199</b>.00
              </p>
              <a href="#" className="banner-btn">Shop now</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};