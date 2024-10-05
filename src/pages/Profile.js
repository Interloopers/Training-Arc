import React from 'react';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Profile</h1>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
          <p className="text-gray-600 font-semibold">Shubham Bendre</p>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
          <p className="text-gray-600 font-semibold">bendre@example.com</p>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Training Progress:</label>
          <p className="text-gray-600 font-semibold">Beginner - Day 1 Completed</p>
        </div>
        <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
