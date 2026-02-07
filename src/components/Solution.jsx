import React from 'react';
import { Brain, Eye, Cpu, ShoppingCart, Wifi, BarChart } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: <Brain size={24} />,
      title: 'Artificial Intelligence',
      description: 'AI-powered disease detection and predictive analytics'
    },
    {
      icon: <Eye size={24} />,
      title: 'Computer Vision',
      description: 'Instant plant disease identification from leaf images'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Offline & Online Multi-Agent Systems',
      description: 'Works seamlessly with or without internet connectivity'
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'Digital Market Access',
      description: 'Direct connection to verified agrovet suppliers'
    },
    {
      icon: <Wifi size={24} />,
      title: 'Real-time Data Sync',
      description: 'Automatic synchronization when connectivity is available'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Farm Analytics',
      description: 'Comprehensive tracking and data-driven insights'
    }
  ];

  return (
    <section className="section solution" id="solution">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solution</h2>
          <p className="section-subtitle">
            AgroShield360 is a mobile-first, AI-powered platform designed to work in real farming conditions
          </p>
        </div>
        
        <div className="solution-highlight">
          <div className="highlight-content">
            <h3 className="highlight-title">
              Timely insights, trusted treatments, and data-driven decisions—even with limited internet
            </h3>
            <p className="highlight-text">
              We combine cutting-edge technology with practical farming needs to create a comprehensive 
              solution that addresses the root causes of agricultural challenges in developing regions.
            </p>
          </div>
        </div>
        
        <div className="solution-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;