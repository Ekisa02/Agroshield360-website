import React from 'react';
import { Camera, Cpu, Lightbulb, Users, TrendingUp, Globe, RefreshCw } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: <Camera size={24} />,
      title: 'Capture Leaf Image',
      description: 'Farmer captures a leaf image using smartphone camera'
    },
    {
      number: '2',
      icon: <Cpu size={24} />,
      title: 'AI Disease Detection',
      description: 'AI analyzes the image and detects disease, classifying plant species'
    },
    {
      number: '3',
      icon: <Lightbulb size={24} />,
      title: 'Treatment Recommendations',
      description: 'Instant treatment recommendations and guidance provided'
    },
    {
      number: '4',
      icon: <Users size={24} />,
      title: 'Connect to Agrovets',
      description: 'Farmer connects to verified agrovets and suppliers'
    },
    {
      number: '5',
      icon: <TrendingUp size={24} />,
      title: 'Track Farm Data',
      description: 'Farm data is tracked and analyzed for better decisions'
    },
    {
      number: '6',
      icon: <Globe size={24} />,
      title: 'Environmental Reporting',
      description: 'Report environmental risks using geotagged data'
    }
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How AgroShield360 Works</h2>
          <p className="section-subtitle">
            A seamless process from problem identification to solution implementation
          </p>
        </div>
        
        <div className="steps-container">
          <div className="steps-line"></div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="sync-notice">
          <RefreshCw size={20} />
          <p>Offline data syncs automatically when connectivity is available</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;