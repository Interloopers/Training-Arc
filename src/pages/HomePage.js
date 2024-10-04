import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const lessons = [
    {
      title: "Lesson 1: Basic Road Safety",
      theory: "Learn about basic road safety rules, traffic signs, and riding precautions.",
      quiz: "What should you do when approaching a pedestrian crossing?",
      challengeLink: "/quiz/Lesson1Quiz" // Points to the Lesson1Quiz component
    },
    {
      title: "Lesson 2: Navigating with GPS",
      theory: "Introduction to using GPS for navigation during deliveries.",
      quiz: "What is the most efficient way to avoid traffic jams using GPS?",
      challengeLink: "/challenge/lesson2"
    },
    {
      title: "Lesson 3: Handling Deliveries",
      theory: "How to handle and secure different types of deliveries safely.",
      quiz: "How should you secure a fragile item during delivery?",
      challengeLink: "/challenge/lesson3"
    },
    {
      title: "Lesson 4: Time Management",
      theory: "Learn how to manage your time effectively to complete deliveries on time.",
      quiz: "How can you optimize your delivery route to save time?",
      challengeLink: "/challenge/lesson4"
    },
    {
      title: "Lesson 5: Traffic Awareness",
      theory: "Understand traffic patterns and how to navigate through high-traffic areas.",
      quiz: "What should you do when approaching a congested intersection?",
      challengeLink: "/challenge/lesson5"
    },
    {
      title: "Lesson 6: Emergency Situations",
      theory: "How to handle emergencies during deliveries, such as breakdowns or accidents.",
      quiz: "What is the first step you should take in case of a vehicle breakdown?",
      challengeLink: "/challenge/lesson6"
    }
  ];

  const [completedLessons, setCompletedLessons] = useState([]);

  const handleQuizComplete = (lessonIndex) => {
    setCompletedLessons([...completedLessons, lessonIndex]);
    // Optionally, you can display a message indicating that the quiz is completed
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Delivery Training Curriculum</h1>
      <p className="text-xl text-gray-700 mt-4 max-w-2xl text-center">
        Complete each lesson, quiz, and challenge to master delivery skills!
      </p>

      <div className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700">{lesson.title}</h2>
            <p className="text-gray-600 mt-3">
              <strong>Theory:</strong> {lesson.theory}
            </p>

            <div className="mt-5">
              <p className="text-gray-600 mb-2">
                <strong>Quiz:</strong> {lesson.quiz}
              </p>
              <Link to={lesson.challengeLink}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300">
                  Start Quiz
                </button>
              </Link>
            </div>

            {completedLessons.includes(index) && (
              <p className="mt-5 text-green-600 font-semibold">
                Quiz Completed ✅
              </p>
            )}

            <Link to={lesson.challengeLink}>
              <button className="mt-5 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
                Start Challenge
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
