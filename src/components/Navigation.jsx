import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Leaf, Download, Phone } from 'lucide-react';

const { div: MotionDiv, a: MotionA } = motion;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'problem', 'solution', 'how-it-works', 'features', 'team', 'partners', 'download', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: '🏠' },
    { name: 'Problem', href: '#problem', icon: '⚠️' },
    { name: 'Solution', href: '#solution', icon: '💡' },
    { name: 'How it Works', href: '#how-it-works', icon: '⚙️' },
    { name: 'Features', href: '#features', icon: '✨' },
    { name: 'Team', href: '#team', icon: '👥' },
    { name: 'Partners', href: '#partners', icon: '🤝' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo with Animation */}
        <MotionDiv 
          className="nav-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-icon">
            <Leaf size={28} color="#22c55e" />
            <div className="logo-pulse"></div>
          </div>
          <div className="logo-content">
            <span className="logo-text">AgroShield</span>
            <span className="logo-number">360</span>
          </div>
        </MotionDiv>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <MotionA 
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
                {isActive && <div className="nav-indicator"></div>}
              </MotionA>
            );
          })}
          
          {/* Call to Action Button */}
          <MotionA
            href="#download"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#download');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            <span>Get App</span>
          </MotionA>
        </div>

        {/* Mobile Toggle Button */}
        <MotionButton 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MotionButton>
      </div>

      {/* Mobile Menu with Animation */}
      {isOpen && (
        <MotionDiv
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-header">
            <div className="mobile-logo">
              <Leaf size={24} color="#22c55e" />
              <span>AgroShield360</span>
            </div>
            <div className="mobile-contact">
              <Phone size={16} />
              <span>+254 741 187 375</span>
            </div>
          </div>
          
          <div className="mobile-nav-items">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <MotionA
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span className="mobile-nav-text">{item.name}</span>
                  {isActive && <div className="mobile-nav-indicator"></div>}
                </MotionA>
              );
            })}
          </div>
          
          <div className="mobile-footer">
            <MotionA
              href="https://play.google.com/store/apps/details?id=com.Joseph.agroshieldapp"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta"
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Download App</span>
            </MotionA>
          </div>
        </MotionDiv>
      )}
    </nav>
  );
};

// MotionButton component since we need to use motion for the mobile toggle button

const MotionButton = ({ children, className, onClick, ariaLabel, whileTap }) => (
  <motion.button
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
    whileTap={whileTap}
  >
    {children}
  </motion.button>
);

export default Navigation;