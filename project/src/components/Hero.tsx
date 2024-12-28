import React from 'react';

const Hero: React.FC = () => {
  return (
    <div 
      className="h-[400px] bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070")'
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">SnackSpot</h1>
          <p className="text-xl">Authentic Indian Street Food & More</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;