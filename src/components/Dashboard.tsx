import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import ProductivityChart from './ProductivityChart';
import ProjectsProgress from './ProjectsProgress';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">
      <Header />
      <TaskList />
      <div className="grid grid-cols-2 gap-6 mt-6">
        <ProductivityChart />
        <ProjectsProgress />
      </div>
    </div>
  );
};

export default Dashboard;