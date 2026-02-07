import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Globe, Award, Users, Target } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Destructure specific motion components
const MotionDiv = motion.div;

const TeamPhotos = () => {
  const teamMembers = [
    {
      name: 'Ekisa Joseph Opurong\'o',
      role: 'Founder & CEO',
      description: 'Passionate about applying AI and data to solve real-world agricultural challenges with 4+ years in tech innovation.',
      image: 'src/assets/images/Founder.jpeg',
      social: {
        linkedin: 'www.linkedin.com/in/ekisa-joseph-opurongo',
        twitter: '#',
        email: 'josephekisaopurongo@gmail.com'
      },
      expertise: ['AI & Machine Learning', 'Agricultural Technology', 'Social Entrepreneurship'],
      isFounder: true,
      achievements: ['4th Year IT Student', 'University Innovation Leader']
    },
    {
      name: 'Marion Jebet',
      role: 'CTO & Co-founder',
      description: 'BSc Information Technology | Leading tech innovation and system architecture for AgroShield360 with backend expertise.',
      image: 'src/assets/images/Marion.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'Marionjebet886@gmail.com'
      },
      expertise: ['Software Development', 'System Architecture', 'AI Integration'],
      isCoFounder: true,
      achievements: ['4th Year IT Student', 'Quality Assurance Lead']
    },
    {
      name: 'Caroli Ikileng',
      role: 'COO & Co-founder',
      description: 'BSc Hotel & Hospitality Management | Expert in market strategy, operations, and customer relationship management.',
      image: 'src/assets/images/caroli.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ikilengcaroli@gmail.com'
      },
      expertise: ['Operations Management', 'Market Strategy', 'Customer Relations'],
      isCoFounder: true,
      achievements: ['4th Year Hospitality', 'Business Development']
    },
    {
      name: 'Fridah Nkatha',
      role: 'CPO & Co-founder',
      description: 'BSc Project Planning & Management | Strategic planning, project execution, and product development specialist.',
      image: 'src/assets/images/fridah.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'Frinkatha38@gmail.com'
      },
      expertise: ['Project Management', 'Strategic Planning', 'Product Development'],
      isCoFounder: true,
      achievements: ['3rd Year Management', 'Project Coordinator']
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
            A passionate team dedicated to transforming agriculture in Africa through innovation
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
              className="team-card-photo"
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 } 
              }}
            >
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                  loading="lazy"
                />
                <div className="team-image-overlay">
                  <div className="social-links">
                    <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.twitter} className="social-link" aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="social-link" aria-label="Email">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                
                {/* Role Badge */}
                <div className={`role-badge ${member.isFounder ? 'founder' : 'cofounder'}`}>
                  <span>{member.isFounder ? 'Founder' : 'Co-founder'}</span>
                </div>
                
                {/* Achievement Indicators */}
                <div className="achievement-indicators">
                  <span className="achievement-dot"></span>
                  <span className="achievement-dot"></span>
                  <span className="achievement-dot"></span>
                </div>
              </div>
              
              <div className="team-content">
                <div className="team-header">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
                
                <p className="team-description">{member.description}</p>
                
                {/* Achievements */}
                <div className="team-achievements">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement-item">
                      <Award size={14} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
                
                {/* Expertise */}
                <div className="team-expertise">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="expertise-tag">{skill}</span>
                  ))}
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
            <div className="team-stat-icon">
              <Users size={24} />
            </div>
            <div className="team-stat-number">4</div>
            <div className="team-stat-label">Dedicated Team Members</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-icon">
              <Globe size={24} />
            </div>
            <div className="team-stat-number">3+</div>
            <div className="team-stat-label">Academic Disciplines</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-icon">
              <Award size={24} />
            </div>
            <div className="team-stat-number">100%</div>
            <div className="team-stat-label">University of Eldoret</div>
          </div>
          <div className="team-stat-item">
            <div className="team-stat-icon">
              <Target size={24} />
            </div>
            <div className="team-stat-number">AgroShield360</div>
            <div className="team-stat-label">Innovation Challenge Project</div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default TeamPhotos;