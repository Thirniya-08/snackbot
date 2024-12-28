import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-white shadow-lg mx-4 md:mx-auto max-w-6xl -mt-10 relative rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center justify-center gap-2">
        <MapPin className="text-orange-500" />
        <p>Ghandhiji Road, Madurai</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Clock className="text-orange-500" />
        <p>Open: 5 PM - 9 PM</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Phone className="text-orange-500" />
        <p>+91 98765 43210</p>
      </div>
    </div>
  );
};

export default InfoSection;