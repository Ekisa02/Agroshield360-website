// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' }
    
  ];

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo">
          <Leaf size={28} color="#22c55e" />
          <span className="logo-text">AgroShield360</span>
        </div>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;