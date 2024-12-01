import React from 'react';
import { Clock } from 'lucide-react';

const tasks = [
  {
    name: 'ClientOnboarding - Circle',
    admin: {
      name: 'Samanta J.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    },
    members: 3,
    status: 'in progress',
    runTime: '6 hours',
    finishDate: '6 Mon'
  },
  {
    name: 'Meeting with Webflow & Notion',
    admin: {
      name: 'Bob P.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    members: 4,
    status: 'done',
    runTime: '2 hours',
    finishDate: '7 Tue'
  },
  // Add more tasks as needed
];

const TaskList = () => {
  return (
    <div className="bg-white rounded-2xl p-6 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Last tasks</h2>
          <p className="text-gray-500"><span className="font-medium">117 total</span>, proceed to resolve them</p>
        </div>
        <div className="flex gap-16">
          <div className="text-right">
            <span className="text-4xl font-semibold">94</span>
            <p className="text-gray-500">Done</p>
          </div>
          <div className="text-right">
            <span className="text-4xl font-semibold">23</span>
            <p className="text-gray-500">In progress</p>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-4 font-medium">Name</th>
            <th className="pb-4 font-medium">Admin</th>
            <th className="pb-4 font-medium">Members</th>
            <th className="pb-4 font-medium">Status</th>
            <th className="pb-4 font-medium">Run time</th>
            <th className="pb-4 font-medium">Finish date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border-b last:border-0">
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>{task.name}</span>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <img src={task.admin.avatar} alt={task.admin.name} className="w-6 h-6 rounded-full" />
                  <span>{task.admin.name}</span>
                </div>
              </td>
              <td>{task.members}</td>
              <td>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-sm ${
                  task.status === 'in progress' 
                    ? 'bg-blue-50 text-blue-600'
                    : 'bg-green-50 text-green-600'
                }`}>
                  {task.status === 'in progress' && <Clock size={14} />}
                  {task.status}
                </span>
              </td>
              <td>{task.runTime}</td>
              <td>{task.finishDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;