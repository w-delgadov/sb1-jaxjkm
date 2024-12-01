import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex gap-6 p-6">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;