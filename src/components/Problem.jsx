import React from 'react';
import { AlertCircle, WifiOff, ShoppingBag, Thermometer, CloudOff, Database } from 'lucide-react';

const Problem = () => {
  const challenges = [
    {
      icon: <AlertCircle size={24} />,
      title: 'Late detection of crop diseases',
      description: 'Farmers often identify diseases too late, leading to massive crop losses.'
    },
    {
      icon: <CloudOff size={24} />,
      title: 'Limited access to agricultural experts',
      description: 'Remote locations make it difficult to get timely expert advice.'
    },
    {
      icon: <ShoppingBag size={24} />,
      title: 'Fake or low-quality agro-inputs',
      description: 'Farmers struggle with counterfeit seeds, fertilizers, and pesticides.'
    },
    {
      icon: <WifiOff size={24} />,
      title: 'Poor connectivity in rural areas',
      description: 'Limited internet access hinders digital farming solutions.'
    },
    {
      icon: <Database size={24} />,
      title: 'Exclusion from agricultural data value',
      description: 'Farmers generate data but don\'t benefit from its commercial value.'
    },
    {
      icon: <Thermometer size={24} />,
      title: 'Climate change impacts',
      description: 'Increasing pests, diseases, and land degradation due to climate change.'
    }
  ];

  return (
    <section className="section problem" id="problem">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Problem</h2>
          <p className="section-subtitle">
            Smallholder farmers face daily challenges that limit productivity and income
          </p>
        </div>
        
        <div className="problem-grid">
          {challenges.map((challenge, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">
                {challenge.icon}
              </div>
              <h3 className="problem-title">{challenge.title}</h3>
              <p className="problem-description">{challenge.description}</p>
            </div>
          ))}
        </div>
        
        <div className="problem-conclusion">
          <div className="conclusion-box">
            <h3 className="conclusion-title">The Impact</h3>
            <p className="conclusion-text">
              These challenges lead to <strong>crop losses, reduced income, and food insecurity</strong>, 
              disproportionately affecting smallholder farmers and their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;