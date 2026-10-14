import React from 'react';
import { Sun, Award, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';
import './Ticker.css';

export default function Ticker({ theme = 'light' }) {
  const tickerItems = [
    { icon: Globe, text: "PAN India Portfolio in 20+ States" },
    { icon: Award, text: "World's Largest Solar Tree Manufacturer (11 KWp MOIL)" },
    { icon: ShieldCheck, text: "DIPP Recognised by Ministry of Commerce & Industry" },
    { icon: Zap, text: "25,000 LTR Solar Water Heater at Northern Railway" },
    { icon: Sun, text: "Specialised Turnkey Team for Industrial & GAS Plants" },
    { icon: Sparkles, text: "40% Accelerated Tax Depreciation Under IT Sec 32" }
  ];

  // Duplicate items for infinite seamless looping
  const duplicated = [...tickerItems, ...tickerItems];

  return (
    <div className={`ticker-container ${theme === 'dark' ? 'ticker-dark' : 'ticker-light'}`}>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {duplicated.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="ticker-item">
                <div className="ticker-icon-box">
                  <Icon size={16} />
                </div>
                <span className="ticker-text">{item.text}</span>
                <span className="ticker-star">★</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
