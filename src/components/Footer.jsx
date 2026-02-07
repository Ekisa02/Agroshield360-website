import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Leaf size={24} />
            <span>AgroShield360</span>
          </div>
          
          <p className="footer-tagline">
            Building climate-smart, data-driven agriculture for Africa.
          </p>
          
          <div className="footer-copyright">
            © {currentYear} AgroShield360. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;