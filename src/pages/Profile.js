import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [xp, setXp] = useState(300); // Example XP, can be fetched from API or user state
  const [totalXp] = useState(1000); // XP needed to level up
  const [deliveries, setDeliveries] = useState(120); // Example delivery stat
  const [streak, setStreak] = useState(10); // Example delivery streak

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (!loggedInUser) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const xpPercentage = (xp / totalXp) * 100; // XP progress bar calculation

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Profile</h1>
        
        {user && (
          <>
            {/* User Info Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name: Yash</label>
              <p className="text-gray-600 font-semibold">{user.name}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email: yash@gmail.com</label>
              <p className="text-gray-600 font-semibold">{user.email}</p>
            </div>
            
            {/* XP Progress Bar */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">XP Progress:</label>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${xpPercentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{xp}/{totalXp} XP</p>
            </div>

            {/* Delivery Statistics */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Deliveries:</label>
              <p className="text-gray-600 font-semibold">{deliveries}</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Delivery Streak:</label>
              <p className="text-gray-600 font-semibold">{streak} days</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Completion Rate:</label>
              <p className="text-gray-600 font-semibold">98%</p>
            </div>

            {/* Additional Delivery Stats */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Average Delivery Time:</label>
              <p className="text-gray-600 font-semibold">22 minutes</p>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Perfect Deliveries:</label>
              <p className="text-gray-600 font-semibold">85 (5-star ratings)</p>
            </div>

            {/* Edit Profile Button */}
            <button className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
