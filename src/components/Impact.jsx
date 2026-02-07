import React from 'react';
import { TrendingDown, Shield, TreePine, Users, BarChart3, DollarSign } from 'lucide-react';

const Impact = () => {
  const impacts = [
    { icon: <TrendingDown size={24} />, title: 'Reduced crop losses', description: 'Early disease detection prevents up to 80% of crop losses' },
    { icon: <Shield size={24} />, title: 'Early disease & pest response', description: 'Real-time alerts enable immediate action against threats' },
    { icon: <TreePine size={24} />, title: 'Climate-smart decision-making', description: 'Data-driven recommendations for climate-resilient farming' },
    { icon: <Users size={24} />, title: 'Sustainable land management', description: 'Promoting practices that protect soil and water resources' },
    { icon: <BarChart3 size={24} />, title: 'Data-driven agriculture', description: 'Farmers make informed decisions based on real analytics' },
    { icon: <DollarSign size={24} />, title: 'Farmer economic inclusion', description: 'Increased income through better yields and market access' }
  ];

  return (
    <section className="section impact" id="impact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Impact & Climate Resilience</h2>
          <p className="section-subtitle">AgroShield360 contributes to sustainable agriculture development</p>
        </div>
        <div className="impact-grid">
          {impacts.map((impact, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon">{impact.icon}</div>
              <h3 className="impact-title">{impact.title}</h3>
              <p className="impact-description">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;