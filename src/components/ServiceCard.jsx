import React from 'react';
import { ArrowUpRight, MapPin, Sun, Zap, Truck, CheckCircle2, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const iconMap = {
  MapPin,
  Sun,
  Zap,
  Truck,
  CheckCircle2,
  Radio
};

export default function ServiceCard({ item, index, linkTo }) {
  const IconComponent = iconMap[item.icon] || Zap;

  return (
    <div className="service-card group">
      <div className="service-card-media">
        <img 
          src={item.image} 
          alt={item.title} 
          loading="lazy"
          className="service-card-img" 
        />
        <div className="service-card-overlay"></div>
        {item.badge && (
          <span className="service-step-badge">{item.badge}</span>
        )}
      </div>

      <div className="service-card-body">
        <div className="service-icon-wrap">
          <IconComponent size={22} />
        </div>

        <h3 className="service-card-title">{item.title}</h3>
        <p className="service-card-desc">{item.description}</p>

        {linkTo ? (
          <Link to={linkTo} className="service-card-btn">
            <span>Explore Solution</span>
            <div className="card-arrow-circle">
              <ArrowUpRight size={15} />
            </div>
          </Link>
        ) : (
          <div className="service-card-indicator">
            <span className="indicator-label">Standard SolEnergi Protocol</span>
            <div className="indicator-dot"></div>
          </div>
        )}
      </div>
    </div>
  );
}
