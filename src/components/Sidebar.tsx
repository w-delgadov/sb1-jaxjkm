import React from 'react';
import { LayoutDashboard, FolderKanban, ListTodo, Wrench, Bell, MessageSquare } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-[240px] bg-white rounded-[20px] p-6 flex flex-col h-screen">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#0F172A] rounded flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rotate-45" />
          </div>
          <span className="font-bold text-lg">BRESS</span>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem icon={<FolderKanban size={20} />} label="Projects" />
          <NavItem icon={<ListTodo size={20} />} label="Task list" active />
          <NavItem icon={<Wrench size={20} />} label="Services" />
          <NavItem 
            icon={<Bell size={20} />} 
            label="Notifications" 
            badge={2} 
          />
          <NavItem icon={<MessageSquare size={20} />} label="Chat" />
        </ul>
      </nav>

      <div className="pt-6 mt-auto">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium">Emily Jonson</h3>
            <p className="text-sm text-gray-500">jonson@bress.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ 
  icon, 
  label, 
  active = false,
  badge
}: { 
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
          active 
            ? 'bg-[#0F172A] text-white' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span>{label}</span>
        {badge && (
          <span className="ml-auto bg-[#E5FBE9] text-[#16A34A] px-2 rounded-full text-sm">
            {badge}
          </span>
        )}
      </a>
    </li>
  );
};

export default Sidebar;