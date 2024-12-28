import React from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-orange-50">
      <Hero />
      <InfoSection />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;