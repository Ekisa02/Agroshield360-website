import React from 'react';
import { Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="section vision-mission" id="vision">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-subtitle">
            Our guiding principles for transforming agriculture
          </p>
        </div>
        
        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="vision-icon">
              <Compass size={24} />
            </div>
            <h3 className="vision-title">Vision</h3>
            <p className="vision-text">
              To build a future where every farmer—regardless of location—has access to 
              intelligent tools that enable resilient, sustainable, and profitable agriculture.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">
              <Target size={24} />
            </div>
            <h3 className="mission-title">Mission</h3>
            <p className="mission-text">
              To empower smallholder farmers through AI-driven insights, climate-smart 
              practices, and inclusive digital platforms that reduce crop losses and 
              strengthen food systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;