import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student</h1>
          <p className="text-gray-600 mt-2">Here's what's happening in your college today.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Exams</h2>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
              <p className="text-sm text-gray-500 mt-1">Next exam in 5 days</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Active Courses</h2>
              <p className="text-3xl font-bold text-gray-900 mt-2">4</p>
              <p className="text-sm text-gray-500 mt-1">All courses on track</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Study Streak</h2>
              <p className="text-3xl font-bold text-gray-900 mt-2">7 days</p>
              <p className="text-sm text-gray-500 mt-1">Keep it up!</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-lg">
                <span className="text-blue-700">Join Study Group</span>
              </button>
              <button className="p-4 text-left bg-green-50 hover:bg-green-100 rounded-lg">
                <span className="text-green-700">View Roadmap</span>
              </button>
              <button className="p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-lg">
                <span className="text-purple-700">Practice Questions</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;