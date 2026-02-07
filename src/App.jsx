
import React from 'react';
import './App.css';
import './styles/components.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import VisionMission from './components/VisionMission';
import Impact from './components/Impact';
//import Team from './components/Team';
import Partners from './components/Partners'; 
import Download from './components/Download';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TeamPhotos from './components/TeamPhotos';   


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <VisionMission />
      <Impact />
      <TeamPhotos />
      <Partners /> 
      <Download />
      <Contact />
      <Footer />
   
    </div>
  );
}

export default App;