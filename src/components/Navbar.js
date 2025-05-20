import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">JobMatch</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700">Home</Link>
        <Link to="/jobs" className="text-gray-700">Jobs</Link>
        <Link to="/profile" className="text-gray-700">Profile</Link>
        <Link to="/recommendations" className="text-gray-700">Find My Matches</Link>
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/signup" className="text-blue-500">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
