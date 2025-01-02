import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <button 
            onClick={onMenuClick}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <div className="ml-4 text-blue-600 font-bold text-xl">College Space</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;