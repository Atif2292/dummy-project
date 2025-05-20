import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); // for redirection
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      navigate('/'); // go to home after login
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {/* App Title */}
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">JobMatch</h1>
        
        {/* Login Title */}
        <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mb-2">
          Login
        </button>

        {/* Signup Button */}
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Don't have an account? Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
