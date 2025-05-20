import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Job Match Platform</h1>
      <p className="text-lg mb-8 text-center text-gray-700 max-w-xl">
        Discover job opportunities matched to your skills. Explore AI-powered recommendations and manage your profile.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/jobs" className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition">
          View Jobs
        </Link>
        <Link to="/recommendations" className="px-6 py-3 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition">
          AI Recommendations
        </Link>
        <Link to="/profile" className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition">
          Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;
