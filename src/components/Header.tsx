import React from 'react';
import { Search, Calendar, LayoutGrid, List } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl p-3">
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-gray-600">
          <Calendar size={20} />
          <span>Monday, 6th March</span>
        </button>

        <div className="flex items-center gap-2 bg-[#0F172A] text-white rounded-lg p-1">
          <button className="p-2 rounded bg-white/10">
            <LayoutGrid size={18} />
          </button>
          <button className="p-2">
            <List size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;