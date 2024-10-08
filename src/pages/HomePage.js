import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const lessons = [
    {
      title: "Lesson 1: Basic Road Safety",
      theory: "Learn about basic road safety rules, traffic signs, and riding precautions.",
      challengeLink: "/theory/L1Theory"
    },
    {
      title: "Lesson 2: Understanding Traffic Signals",
      theory: "Explore the meanings of traffic signals and how to respond to them correctly.",
      challengeLink: "/theory/L2Theory"
    },
    {
      title: "Lesson 3: Safe Riding Techniques",
      theory: "Learn about essential riding techniques for a safe delivery experience.",
      challengeLink: "/theory/L3Theory"
    },
    {
      title: "Lesson 4: Dealing with Adverse Weather",
      theory: "Understand how to handle riding in different weather conditions safely.",
      challengeLink: "/theory/L4Theory"
    },
    {
      title: "Lesson 5: Navigating Urban Areas",
      theory: "Get tips on navigating through urban areas effectively and safely.",
      challengeLink: "/theory/L5Theory"
    },
    {
      title: "Lesson 6: Handling Delivery Challenges",
      theory: "Learn strategies for overcoming common delivery challenges.",
      challengeLink: "/theory/L6Theory"
    },
  ];

  const [completedLessons, setCompletedLessons] = useState([]);

  // Check if the user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleQuizComplete = (lessonIndex) => {
    setCompletedLessons([...completedLessons, lessonIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mt-10">Delivery Training Curriculum</h1>
      <p className="text-lg text-gray-700 mt-4 max-w-xl text-center">
        Master your delivery skills by completing each lesson and challenge!
      </p>

      <div className="mt-12 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lessons.map((lesson, index) => (
          <div 
            key={index} 
            className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{lesson.title}</h2>
            <p className="text-gray-600 mb-4">
              <strong>Overview:</strong> {lesson.theory}
            </p>

            <Link to={lesson.challengeLink}>
              <button className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300">
                Start Lesson
              </button>
            </Link>

            {completedLessons.includes(index) && (
              <p className="mt-4 text-green-600 font-semibold">
                Quiz Completed ✅
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
