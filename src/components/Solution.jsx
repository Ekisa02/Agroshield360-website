import React from 'react';
import { Camera, Smartphone, Brain, ShoppingBag, Database, BarChart, Download, Upload, ShieldCheck, Leaf, Wifi, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div;

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <Camera size={28} />,
      title: 'Capture',
      description: 'Farmers take photos of affected crops using their smartphone camera',
      features: ['High-resolution imaging', 'Built-in guidance', 'Auto-capture mode'],
      color: 'purple'
    },
    {
      number: '02',
      icon: <Brain size={28} />,
      title: 'Analyze',
      description: 'AI analyzes images offline to detect diseases and pests instantly',
      features: ['Real-time processing', '95% accuracy', 'Multiple crop support'],
      color: 'green'
    },
    {
      number: '03',
      icon: <ShoppingBag size={28} />,
      title: 'Treat',
      description: 'Get recommended treatments and connect with verified suppliers',
      features: ['Localized solutions', 'Affordable options', 'Direct purchase'],
      color: 'purple'
    },
    {
      number: '04',
      icon: <Database size={28} />,
      title: 'Sync',
      description: 'Data syncs automatically when internet becomes available',
      features: ['Secure backup', 'Progress tracking', 'Community data'],
      color: 'green'
    },
    {
      number: '05',
      icon: <BarChart size={28} />,
      title: 'Grow',
      description: 'Access analytics and insights for better farming decisions',
      features: ['Yield predictions', 'Market trends', 'Seasonal advice'],
      color: 'purple'
    }
  ];

  const keyFeatures = [
    { 
      icon: <Download size={20} />, 
      title: 'Offline First', 
      description: 'Works without internet' 
    },
    { 
      icon: <ShieldCheck size={20} />, 
      title: 'Data Secure', 
      description: 'Farmer-owned data' 
    },
    { 
      icon: <Leaf size={20} />, 
      title: 'Eco-Friendly', 
      description: 'Reduces chemical use' 
    },
    { 
      icon: <Wifi size={20} />, 
      title: 'Smart Sync', 
      description: 'Syncs when online' 
    }
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <MotionDiv
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How AgroShield360 Works</h2>
          <p className="section-subtitle">
            A seamless five-step process that transforms how farmers protect their crops
          </p>
        </MotionDiv>

        {/* Timeline Visualization */}
        <div className="process-timeline">
          <div className="timeline-line"></div>
          
          <MotionDiv
            className="timeline-steps"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {steps.map((step) => (
              <MotionDiv
                key={step.number}
                className="timeline-step"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`step-connector step-${step.color}`}>
                  <div className="connector-line"></div>
                </div>
                
                <div className="step-card">
                  <div className="step-number-glow">
                    <div className={`step-number step-${step.color}`}>
                      {step.number}
                    </div>
                  </div>
                  
                  <div className={`step-icon-container step-${step.color}`}>
                    <div className="step-icon">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  
                  <div className="step-features">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="step-feature">
                        <div className={`feature-dot step-${step.color}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>

        {/* Key Features Banner */}
        <MotionDiv
          className="key-features-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="banner-gradient"></div>
          
          <div className="banner-content">
            <h3 className="banner-title">Built for Real Farming Conditions</h3>
            <p className="banner-subtitle">
              Designed specifically for the challenges faced by smallholder farmers
            </p>
            
            <div className="features-grid">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-circle">
                    {feature.icon}
                  </div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* Offline/Online Demo */}
        <MotionDiv
          className="connection-demo"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="demo-header">
            <h3 className="demo-title">Smart Connectivity</h3>
            <p className="demo-subtitle">Works seamlessly in both online and offline modes</p>
          </div>
          
          <div className="demo-visualization">
            <div className="offline-mode">
              <div className="mode-icon">
                <WifiOff size={32} />
              </div>
              <h4>Offline Mode</h4>
              <p>Full functionality without internet</p>
              <ul className="mode-features">
                <li>Disease detection</li>
                <li>Treatment advice</li>
                <li>Local storage</li>
              </ul>
            </div>
            
            <div className="connection-arrows">
              <div className="arrow-left"></div>
              <div className="sync-animation">
                <div className="sync-dot"></div>
                <div className="sync-dot"></div>
                <div className="sync-dot"></div>
              </div>
              <div className="arrow-right"></div>
            </div>
            
            <div className="online-mode">
              <div className="mode-icon">
                <Wifi size={32} />
              </div>
              <h4>Online Sync</h4>
              <p>Automatic when connected</p>
              <ul className="mode-features">
                <li>Data backup</li>
                <li>Market access</li>
                <li>Community insights</li>
              </ul>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default HowItWorks;