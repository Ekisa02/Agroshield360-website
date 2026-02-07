import React from 'react';
import { 
  University, Building, Users, Rocket, Globe, Briefcase 
} from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      icon: <University size={24} />,
      name: 'Universities & Research Institutions',
      description: 'Academic partnerships for AI model development and agricultural research'
    },
    {
      icon: <Building size={24} />,
      name: 'Agrovet Suppliers',
      description: 'Verified suppliers of quality seeds, fertilizers, and pesticides'
    },
    {
      icon: <Users size={24} />,
      name: 'Farmer Cooperatives',
      description: 'Local farmer groups for ground-level implementation and feedback'
    },
    {
      icon: <Rocket size={24} />,
      name: 'Innovation Hubs & Accelerators',
      description: 'Tech innovation centers supporting agricultural technology development'
    },
    {
      icon: <Globe size={24} />,
      name: 'NGOs & Development Partners',
      description: 'International organizations supporting sustainable agriculture initiatives'
    },
    {
      icon: <Briefcase size={24} />,
      name: 'Corporate Partners',
      description: 'Private sector companies investing in agricultural innovation'
    }
  ];

  return (
    <section className="section partners" id="partners">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Partners & Ecosystem</h2>
          <p className="section-subtitle">
            Building a collaborative network to transform agriculture in Africa
          </p>
          <p className="section-note">
            *This section showcases our partner categories. Actual partner logos would be displayed here.
          </p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-icon">
                {partner.icon}
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
            </div>
          ))}
        </div>
        
        <div className="partnership-cta">
          <h3 className="cta-title">Interested in Partnering with Us?</h3>
          <p className="cta-text">
            We're always looking to expand our network of partners who share our vision 
            for climate-smart, data-driven agriculture in Africa.
          </p>
          <a href="#contact" className="partner-button">
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;