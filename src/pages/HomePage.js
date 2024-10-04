import React from 'react';

const TrainingDashboard = () => {
  return (
    <div>
      <h1>Training Dashboard</h1>
      <h2>Day 1 Challenge: Ride from Point A to Point B</h2>
      <p>
        Today's challenge is to ride your bike from Point A to Point B along the clear road.
        Follow the route shown on the map.
      </p>
      <button onClick={() => alert('Challenge Started!')}>Start Challenge</button>
      {/* Add a map or route details here */}
    </div>
  );
};

export default TrainingDashboard;
