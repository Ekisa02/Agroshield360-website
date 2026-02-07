import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Download, Phone, ChevronRight } from "lucide-react";

const { div: MotionDiv, a: MotionA } = motion;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "problem",
        "solution",
        "how-it-works",
        "features",
        "team",
        "partners",
        "download",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        // Check if click is on mobile toggle button
        if (!event.target.closest(".mobile-toggle")) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#hero", icon: "🏠" },
    { name: "Problem", href: "#problem", icon: "⚠️" },
    { name: "Solution", href: "#solution", icon: "💡" },
    { name: "How it Works", href: "#how-it-works", icon: "⚙️" },
    { name: "Features", href: "#features", icon: "✨" },
    { name: "Team", href: "#team", icon: "👥" },
    { name: "Partners", href: "#partners", icon: "🤝" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Logo with Animation */}
          <MotionDiv
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="logo-icon">
              <img
                src="/src/assets/images/logo.jpeg"
                alt="AgroShield360 Logo"
                className="custom-logo"
              />
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
                  className={`nav-link ${isActive ? "active" : ""}`}
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
                handleNavClick("#download");
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
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
            initial={false}
            animate={isOpen ? "open" : "closed"}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <>
                <Menu size={24} />
                <span className="menu-label">Menu</span>
              </>
            )}
          </MotionButton>
        </div>
      </nav>

      {/* Mobile Menu with Animation - Using AnimatePresence for proper exit animation */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            ref={mobileMenuRef}
            className="mobile-menu-container"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu">
              <div className="mobile-header">
                <div className="mobile-logo">
                  <img
                    src="/src/assets/images/logo.jpeg"
                    alt="AgroShield360 Logo"
                    className="mobile-custom-logo"
                  />
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
                      className={`mobile-nav-link ${isActive ? "active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.name.length * 0.05 }}
                    >
                      <span className="mobile-nav-icon">{item.icon}</span>
                      <span className="mobile-nav-text">{item.name}</span>
                      <ChevronRight size={18} className="mobile-nav-arrow" />
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Download size={20} />
                  <span>Download App on Google Play</span>
                </MotionA>

                <div className="mobile-contact-info">
                  <p className="contact-email">josephekisaopurongo@gmail.com</p>
                  <p className="contact-location">Eldoret, Kenya</p>
                </div>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

// MotionButton component
const MotionButton = ({
  children,
  className,
  onClick,
  ariaLabel,
  whileTap,
  initial,
  animate,
}) => (
  <motion.button
    className={className}
    onClick={onClick}
    aria-label={ariaLabel}
    whileTap={whileTap}
    initial={initial}
    animate={animate}
  >
    {children}
  </motion.button>
);

export default Navigation;
