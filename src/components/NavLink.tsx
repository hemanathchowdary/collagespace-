import React from 'react';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const NavLink = ({ href, icon, children }: NavLinkProps) => (
  <a 
    href={href}
    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg w-full"
  >
    {icon}
    <span>{children}</span>
  </a>
);

export default NavLink;