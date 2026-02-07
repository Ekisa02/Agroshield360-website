import React from 'react';
import { 
  Camera, Sprout, ShoppingBag, Wifi, 
  BarChart3, MapPin, Database, Shield 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera size={24} />,
      title: 'AI Crop Disease Detection',
      description: 'Instant diagnosis and treatment guidance using leaf images with 95% accuracy.',
      highlight: true
    },
    {
      icon: <Sprout size={24} />,
      title: 'Plant Species Classification',
      description: 'Ensures accurate diagnosis and correct treatment pathways for different crops.',
      highlight: false
    },
    {
      icon: <ShoppingBag size={24} />,
      title: 'Agrovet Marketplace Access',
      description: 'Connects farmers to trusted agro-input suppliers with quality guarantees.',
      highlight: false
    },
    {
      icon: <Wifi size={24} />,
      title: 'Offline & Online Multi-Agent System',
      description: 'Works in low-connectivity rural environments with automatic data sync.',
      highlight: true
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Farm Data Monitoring & Analytics',
      description: 'Track crop performance, inputs, and outcomes for data-driven decisions.',
      highlight: false
    },
    {
      icon: <MapPin size={24} />,
      title: 'Environmental & Risk Reporting',
      description: 'Report pests, land degradation, and deforestation using geotagged data.',
      highlight: false
    },
    {
      icon: <Database size={24} />,
      title: 'Farmer Data Inclusion',
      description: 'Ethical data use with transparency and fair value sharing with farmers.',
      highlight: false
    },
    {
      icon: <Shield size={24} />,
      title: 'Climate Resilience Tools',
      description: 'Early warning systems and climate-smart farming recommendations.',
      highlight: true
    }
  ];

  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Features</h2>
          <p className="section-subtitle">
            Comprehensive tools designed specifically for smallholder farmers' needs
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.highlight ? 'highlighted' : ''}`}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.highlight && (
                <div className="feature-badge">Premium Feature</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;