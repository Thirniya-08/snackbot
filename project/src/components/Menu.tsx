import React from 'react';
import MenuItem from './MenuItem';
import { menuItems } from '../data/menuItems';

const Menu: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;