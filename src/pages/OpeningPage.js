import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpeningPage() {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/profile'); // Redirects to the Profile page
  };

  const handleFindCampgrounds = () => {
    navigate('/HomePage'); // Redirects to the HomePage
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Navbar */}
      <nav className="p-6 bg-gray-900 text-white fixed w-full z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <div className="text-4xl font-extrabold tracking-wide text-yellow-400">
            Training Arc
          </div>
          {/* Navigation Links */}
          <ul className="flex space-x-6 items-center">
            <li><a href="/leaderboard" className="hover:text-yellow-400 transition duration-200 text-lg">Leaderboard</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition duration-200 text-lg">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition duration-200 text-lg">Contact</a></li>
            
            {/* Login Button */}
            <li>
              <a href="/login">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md">
                  Login
                </button>
              </a>
            </li>

            {/* SignUp Button */}
            <li>
              <a href="/signup">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md">
                  Sign Up
                </button>
              </a>
            </li>

            {/* Profile Button */}
            <li>
              <button
                onClick={handleProfile}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full transition duration-300 shadow-md border-2 border-yellow-400"
              >
                Profile
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-12">
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              We will help you master the art of the road
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Join us to learn the skills to drive and deliver with confidence.
            </p>
            <button
              onClick={handleFindCampgrounds}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Start your arc
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div 
          className="flex-1 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
        </div>
      </div>
    </div>
  );
}

export default OpeningPage;
