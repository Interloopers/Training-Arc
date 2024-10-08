import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-12">Rewards & Achievements</h1>

        {/* Achievement System Section */}
        <section className="mb-16 bg-gray-100 p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Achievement System</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            Unlock badges and rewards as you complete delivery quests. The more quests you finish, the higher your rank, and the better your rewards!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Rookie Deliverer</h3>
              <p className="text-lg text-gray-600 text-center">Complete your first 10 deliveries to earn this badge.</p>
              <div className="mt-4">
                <progress className="w-full" value="6" max="10"></progress>
                <p className="text-center text-gray-500 mt-2">6/10 Deliveries Completed</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Speed Demon</h3>
              <p className="text-lg text-gray-600 text-center">Complete 5 deliveries in under 30 minutes each.</p>
              <div className="mt-4">
                <progress className="w-full" value="2" max="5"></progress>
                <p className="text-center text-gray-500 mt-2">2/5 Speed Deliveries Completed</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Elite Status</h3>
              <p className="text-lg text-gray-600 text-center">Deliver 100 orders to unlock the Elite badge!</p>
              <div className="mt-4">
                <progress className="w-full" value="45" max="100"></progress>
                <p className="text-center text-gray-500 mt-2">45/100 Deliveries Completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Platform Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Quest Variety</h3>
            <p className="text-lg text-gray-600 text-center">
              Choose from daily, weekly, and special event quests to keep earning.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Exclusive Rewards</h3>
            <p className="text-lg text-gray-600 text-center">
              Unlock unique items and rewards like gift cards, gear, and special discounts.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Community Leaderboard</h3>
            <p className="text-lg text-gray-600 text-center">
              Compete with fellow deliverers and see how you rank on the leaderboard!
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;