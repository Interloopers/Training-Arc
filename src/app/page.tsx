import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-4">Your Project Title</h1>
            <p className="text-lg text-center mb-8">
                Welcome to our delivery platform! Hire a delivery person to get your items delivered quickly and safely.
            </p>
            <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Login
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                    Signup
                </button>
            </div>
        </div>
    );
};

export default Page;
