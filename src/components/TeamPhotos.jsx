import React from 'react';
import { motion } from 'framer-motion';

// Destructure specific motion components
const { div: MotionDiv } = motion;

import { Linkedin, Twitter, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const TeamPhotos = () => {
  const teamMembers = [
    {
      name: 'Ekisa Joseph Opurong\'o',
      role: 'Founder & CEO',
      description: 'Passionate about applying AI and data to solve real-world agricultural challenges.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'josephekisaopurongo@gmail.com'
      },
      featured: true
    },
    {
      name: 'Marion Jebet',
      role: 'Technology & Systems',
      description: 'BSc Information Technology | Leading tech innovation and system architecture.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Caroli Ikiling',
      role: 'Market & Operations',
      description: 'BSc Hotel & Hospitality Management | Expert in market strategy and operations.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      name: 'Fridah Nkatha',
      role: 'Planning & Strategy',
      description: 'BSc Project Planning & Management | Strategic planning and project execution.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    }
  ];

  return (
    <section className="section team-photos" id="team">
      <div className="container">
        <MotionDiv 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Meet the Visionaries</h2>
          <p className="section-subtitle">
            A passionate team dedicated to transforming agriculture in Africa
          </p>
        </MotionDiv>

        <MotionDiv 
          className="team-grid-photos"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member, index) => (
            <MotionDiv 
              key={index} 
              className={`team-card-photo ${member.featured ? 'featured' : ''}`}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                  loading="lazy"
                />
                {member.featured && (
                  <div className="featured-badge">
                    <span>Founder & CEO</span>
                  </div>
                )}
                <div className="team-image-overlay">
                  <div className="social-links">
                    <a href={member.social.linkedin} className="social-link">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="social-link">
                      <Twitter size={18} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="social-link">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                
                <div className="team-expertise">
                  {member.featured && (
                    <>
                      <span className="expertise-tag">AI & Machine Learning</span>
                      <span className="expertise-tag">Agricultural Technology</span>
                      <span className="expertise-tag">Social Entrepreneurship</span>
                    </>
                  )}
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Team Stats */}
        <MotionDiv 
          className="team-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="team-stat-item">
            <div className="team-stat-number">4+</div>
            <div className="team-stat-label">Years Experience</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">10+</div>
            <div className="team-stat-label">Projects Completed</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">50k+</div>
            <div className="team-stat-label">Farmers Impacted</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-number">5+</div>
            <div className="team-stat-label">Countries Reached</div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default TeamPhotos;