import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with the AgroShield360 team
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>Eldoret, Kenya</p>
              </div>
            </div>
            <div className="info-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>josephekisaopurongo@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+254 741 187 375</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;