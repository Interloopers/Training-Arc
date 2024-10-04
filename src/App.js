import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Your original homepage with the map
import CampgroundDetail from './pages/CampgroundDetail';
import OpeningPage from './pages/OpeningPage'; // New opening page
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage'; // Ensure correct import
import SignupPage from './pages/SignupPage'; // Ensure correct import
import Profile from './pages/Profile'; // Ensure correct import
import Lesson1Quiz from './pages/quiz/Lesson1Quiz'; // Import your quiz component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} /> {/* Default route */}
        <Route path="/campgrounds" element={<HomePage />} /> {/* Redirects to the original functionality */}
        <Route path="/campgrounds/:id" element={<CampgroundDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz/Lesson1Quiz" element={<Lesson1Quiz />} /> {/* Fixed here */}
      </Routes>
    </Router>
  );
}

export default App;
