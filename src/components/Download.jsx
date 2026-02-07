import React from 'react';
import { Download, Smartphone } from 'lucide-react';

const DownloadComponent = () => {
  return (
    <section className="section download" id="download">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Download the App</h2>
          <p className="section-subtitle">
            AgroShield360 is live and available on Google Play
          </p>
        </div>
        <div className="download-content">
          <div className="download-card">
            <Smartphone size={48} />
            <h3 className="download-title">Get AgroShield360</h3>
            <p className="download-description">
              Download our mobile app to access AI-powered crop disease detection, 
              farm management tools, and marketplace access—all optimized for offline use.
            </p>
            <a 
              href="https://play.google.com/store/apps/details?id=com.Joseph.agroshieldapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="download-button"
            >
              <Download size={20} />
              Download on Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadComponent;