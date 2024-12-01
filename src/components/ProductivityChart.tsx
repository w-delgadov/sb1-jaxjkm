import React from 'react';

const ProductivityChart = () => {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Productivity</h2>
        <button className="text-gray-500">01-07 May</button>
      </div>
      
      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>Research</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span>Design</span>
        </div>
      </div>

      <div className="text-xs text-gray-400 mt-2">
        Data updates every 3 hours
      </div>
    </div>
  );
};

export default ProductivityChart;