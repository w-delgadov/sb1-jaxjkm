import React from 'react';
import { MessageSquare, FileText } from 'lucide-react';

const ProjectsProgress = () => {
  return (
    <div className="bg-[#0F172A] rounded-2xl p-6 text-white">
      <h2 className="text-xl font-semibold mb-6">Projects in progress:</h2>
      
      <div className="bg-white/10 rounded-xl p-4">
        <div className="flex gap-2 mb-2">
          <span className="px-3 py-1 rounded-full text-sm bg-white/10">Feedback</span>
          <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-600">Bug</span>
          <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-600">Design System</span>
        </div>
        
        <h3 className="text-lg font-medium mb-2">Improve cards readability</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>12 comments</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText size={16} />
            <span>0 files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsProgress;