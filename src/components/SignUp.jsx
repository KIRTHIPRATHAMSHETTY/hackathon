import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('User Info:', { name, email, password });
    alert('Sign-up successful!');

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setPassword('');

    // Hide the form after submission
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      {!submitted ? (
        <>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </>
      ) : (
        <p className="text-center text-green-500 text-2xl font-semibold">Thank you for signing up!</p>
      )}
    </div>
  );
};

export default SignUp;
