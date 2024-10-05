import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/leaderboard');

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setLeaderboardData(data);

    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-5xl font-bold text-blue-800 mt-10">
        Leaderboard <span className="text-yellow-500">🏆</span>
      </h1>

      {/* Leaderboard Table */}
      <div className="mt-10 w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-lg">
              <th className="py-3 px-6 border">Rank</th>
              <th className="py-3 px-6 border">Name</th>
              <th className="py-3 px-6 border">Time</th>
              <th className="py-3 px-6 border">Efficiency</th>
              <th className="py-3 px-6 border">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.length > 0 ? (
              leaderboardData.map((player, index) => (
                <tr
                  key={player.rank}
                  className={`${
                    index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                  } hover:bg-blue-100 transition-colors duration-200`}
                >
                  <td className="py-3 px-6 border text-blue-900">{player.rank}</td>
                  <td className="py-3 px-6 border text-blue-900">{player.name}</td>
                  <td className="py-3 px-6 border text-blue-900">{player.time}</td>
                  <td className="py-3 px-6 border text-blue-900">{player.efficiency}</td>
                  <td className="py-3 px-6 border text-blue-900">{player.points}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-600">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
