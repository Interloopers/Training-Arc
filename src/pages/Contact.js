import React from 'react';

function Quests() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-12">Your Delivery Quests</h1>

        {/* Quest Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Daily Quest 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Quest: Fast Food Frenzy</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Description:</strong> Complete 5 food deliveries in under 30 minutes each.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Objective:</strong> Deliver to 5 different customers before their food gets cold!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Rewards:</strong> 50 XP, 100 Bonus Points
            </p>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <p className="text-sm text-gray-600 mb-2">Progress: 3/5 deliveries completed</p>
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>
            <button 
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
              Continue Quest
            </button>
          </div>

          {/* Daily Quest 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Quest: Customer Satisfaction</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Description:</strong> Receive 3 5-star ratings from customers.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Objective:</strong> Ensure timely and polite service to earn high ratings.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Rewards:</strong> 100 XP, 50 Bonus Points
            </p>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <p className="text-sm text-gray-600 mb-2">Progress: 2/3 ratings received</p>
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-yellow-200">
                <div style={{ width: "67%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
              </div>
            </div>
            <button 
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
              Continue Quest
            </button>
          </div>

          {/* Weekly Quest 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Quest: Long Haul Hero</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Description:</strong> Complete 50 deliveries by the end of the week.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Objective:</strong> Keep those wheels turning and complete as many orders as possible.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Rewards:</strong> 500 XP, Exclusive Badge, 300 Bonus Points
            </p>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <p className="text-sm text-gray-600 mb-2">Progress: 30/50 deliveries completed</p>
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
              Continue Quest
            </button>
          </div>

          {/* Weekly Quest 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Quest: Safe Driver</h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Description:</strong> Complete 25 deliveries without any customer complaints.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Objective:</strong> Maintain safe driving practices and ensure food is delivered in perfect condition.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Rewards:</strong> 400 XP, Safety Award Badge
            </p>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <p className="text-sm text-gray-600 mb-2">Progress: 15/25 deliveries completed</p>
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-red-200">
                <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
              </div>
            </div>
            <button 
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
              Continue Quest
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Quests;
