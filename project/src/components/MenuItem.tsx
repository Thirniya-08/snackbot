import React from 'react';

interface MenuItemProps {
  name: string;
  price: number;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-orange-600 font-bold">₹{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;