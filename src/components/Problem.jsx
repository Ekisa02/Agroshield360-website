import React from 'react';
import { AlertCircle, WifiOff, ShoppingBag, Thermometer, CloudOff, Database, TrendingUp, Target, Users, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const MotionDiv = motion.div;

const Problem = () => {
  const challenges = [
    {
      icon: <AlertCircle size={28} />,
      title: 'Late detection of crop diseases',
      description: 'Farmers often identify diseases too late, leading to massive crop losses and reduced yields.',
      color: 'bg-purple-500',
      delay: 0.1
    },
    {
      icon: <CloudOff size={28} />,
      title: 'Limited access to agricultural experts',
      description: 'Remote locations make it difficult to get timely expert advice and support.',
      color: 'bg-green-500',
      delay: 0.2
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'Fake or low-quality agro-inputs',
      description: 'Farmers struggle with counterfeit seeds, fertilizers, and pesticides affecting crop quality.',
      color: 'bg-purple-600',
      delay: 0.3
    },
    {
      icon: <WifiOff size={28} />,
      title: 'Poor connectivity in rural areas',
      description: 'Limited internet access hinders adoption of digital farming solutions and market access.',
      color: 'bg-green-600',
      delay: 0.4
    },
    {
      icon: <Database size={28} />,
      title: 'Exclusion from agricultural data value',
      description: 'Farmers generate valuable data but don\'t benefit from its commercial applications.',
      color: 'bg-purple-500',
      delay: 0.5
    },
    {
      icon: <Thermometer size={28} />,
      title: 'Climate change impacts',
      description: 'Increasing pests, diseases, and land degradation due to changing climate patterns.',
      color: 'bg-green-500',
      delay: 0.6
    }
  ];

  const impactStats = [
    { value: '40%', label: 'Average Crop Loss', icon: <TrendingUp />, color: 'text-purple-600' },
    { value: '500M+', label: 'Smallholder Farmers', icon: <Users />, color: 'text-green-600' },
    { value: '60%', label: 'Food Production', icon: <Target />, color: 'text-purple-600' },
    { value: '$300B', label: 'Annual Economic Loss', icon: <Leaf />, color: 'text-green-600' }
  ];

  return (
    <section className="section problem" id="problem">
      <div className="container">
        <MotionDiv
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">The Challenge</h2>
          <p className="section-subtitle">
            Smallholder farmers face daily challenges that limit productivity and threaten food security
          </p>
        </MotionDiv>

        {/* Impact Stats */}
        <MotionDiv
          className="impact-stats-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {impactStats.map((stat, index) => (
            <div key={index} className="impact-stat-card">
              <div className={`impact-stat-icon ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="impact-stat-content">
                <div className={`impact-stat-value ${stat.color}`}>{stat.value}</div>
                <div className="impact-stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </MotionDiv>

        {/* Challenges Grid */}
        <MotionDiv
          className="problem-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {challenges.map((challenge, index) => (
            <MotionDiv
              key={index}
              className="problem-card"
              variants={fadeInUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: challenge.delay, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="problem-card-border"></div>
              <div className={`problem-icon ${challenge.color}`}>
                {challenge.icon}
              </div>
              <h3 className="problem-title">{challenge.title}</h3>
              <p className="problem-description">{challenge.description}</p>
              <div className="problem-index">
                <span>0{index + 1}</span>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Conclusion */}
        <MotionDiv
          className="problem-conclusion"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="conclusion-gradient-border">
            <div className="conclusion-content">
              <div className="conclusion-icon">
                <AlertCircle size={32} />
              </div>
              <div>
                <h3 className="conclusion-title">The Urgent Need</h3>
                <p className="conclusion-text">
                  These interconnected challenges lead to <strong>crop losses up to 40%</strong>, 
                  <strong> reduced farmer income</strong>, and <strong>increased food insecurity</strong>. 
                  Without intervention, millions of smallholder farmers remain trapped in cycles of 
                  poverty despite being the backbone of our food systems.
                </p>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Problem;