import React from 'react';
import { motion } from 'framer-motion';

// Destructure specific motion components
const { div: MotionDiv, h1: MotionH1, p: MotionP, a: MotionA, button: MotionButton } = motion;

import { Download, Mail, Shield, Sparkles, ArrowRight, Award, Smartphone, Brain, Wifi } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Gradient background */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="container">
        <MotionDiv 
          className="hero-content"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Badge with animation */}
          <MotionDiv 
            className="hero-badge"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <Shield size={18} />
            <span>Transforming Agriculture with AI</span>
            <Sparkles size={16} className="sparkle" />
          </MotionDiv>
          
          {/* Main Title with animation */}
          <MotionH1 
            className="hero-title"
            variants={fadeInUp}
          >
            <span className="title-line">Smart Farming.</span>
            <span className="title-line">Real Solutions.</span>
            <span className="title-line highlight-text">Zero Guesswork.</span>
          </MotionH1>
          
          {/* Subtitle with animation */}
          <MotionP 
            className="hero-subtitle"
            variants={fadeInUp}
          >
            AgroShield360 combines <strong>artificial intelligence</strong>, <strong>computer vision</strong>, and <strong>offline-first technology</strong> to empower African farmers with instant crop disease detection and trusted agrovet solutions.
          </MotionP>

          {/* Feature Highlights */}
          <MotionDiv 
            className="feature-highlights"
            variants={fadeInUp}
          >
            <div className="feature-item">
              <div className="feature-icon">
                <Brain size={20} />
              </div>
              <span>AI-Powered Diagnosis</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Smartphone size={20} />
              </div>
              <span>Mobile-First Platform</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Wifi size={20} />
              </div>
              <span>Works Offline</span>
            </div>
          </MotionDiv>

          {/* Stats Section */}
          <MotionDiv 
            className="hero-stats"
            variants={fadeInUp}
          >
            <div className="stat-item">
              <div className="stat-number">95<span className="percent">%</span></div>
              <div className="stat-label">Detection Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50<span className="plus">k+</span></div>
              <div className="stat-label">Farmers Empowered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">60<span className="percent">%</span></div>
              <div className="stat-label">Yield Increase</div>
            </div>
          </MotionDiv>
          
          {/* CTA Buttons with animation */}
          <MotionDiv 
            className="hero-cta"
            variants={fadeInUp}
          >
            <MotionA 
              href="https://play.google.com/store/apps/details?id=com.Joseph.agroshieldapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download App</span>
              <ArrowRight size={16} className="arrow-icon" />
            </MotionA>
            
            <MotionA 
              href="#demo" 
              className="demo-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Live Demo</span>
            </MotionA>
            
            <MotionA 
              href="#contact" 
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Partner With Us</span>
            </MotionA>
          </MotionDiv>

          {/* Trust Badges */}
          <MotionDiv 
            className="trust-badges"
            variants={fadeInUp}
          >
            <div className="badge">
              <div className="badge-icon">🏆</div>
              <span>African Agritech Award Winner</span>
            </div>
            <div className="badge">
              <div className="badge-icon">🌍</div>
              <span>10+ African Countries</span>
            </div>
            <div className="badge">
              <Award size={16} />
              <span>Google Impact Finalist</span>
            </div>
          </MotionDiv>
        </MotionDiv>
      </div>

      {/* Animated Plant Illustration */}
      <div className="hero-illustration">
        <div className="plant-animation">
          <div className="leaf leaf-1"></div>
          <div className="leaf leaf-2"></div>
          <div className="leaf leaf-3"></div>
          <div className="stem"></div>
          <div className="pot"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="indicator-text">Discover More</div>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </MotionDiv>
    </section>
  );
};

export default Hero;