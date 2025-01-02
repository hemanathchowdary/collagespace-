import React from 'react';
import { Home, Map, MessageCircle, GraduationCap, Github, Linkedin, Code2, X } from 'lucide-react';
import NavLink from './Navlink';
import ProfileDropdown from './ProfileDropdown';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <span className="text-blue-600 font-bold text-xl">College Space</span>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2">
            <NavLink href="/home" icon={<Home size={20} />}>Home</NavLink>
            <NavLink href="/roadmaps" icon={<Map size={20} />}>Roadmaps</NavLink>
            <NavLink href="/globalchat" icon={<MessageCircle size={20} />}>Global Chat</NavLink>
            <NavLink href="/exams" icon={<GraduationCap size={20} />}>Exams</NavLink>
          </div>

          <div className="absolute bottom-8 left-0 right-0 px-4">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;