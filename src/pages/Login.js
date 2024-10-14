import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setError('Please fill in all the fields.');
        return;
      }
  
      setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError('');
      alert('Login Successful!');
      navigate('/');
    },2000);
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover " style={{
        backgroundImage: "url('images/loginpage.jpg')",
      }}>
        <div className="relative bg-white p-8 rounded-lg shadow-lg border border-gray-300 max-w-md w-full">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={() => navigate('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl text-green-800 font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email or Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your credentials'
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              className="text-sm text-green-500"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
            <a href="/forgot-password" className="text-sm text-green-500">
              Forgot Password?
            </a>
          </div>
          <button 
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-blue-600"
          disabled={loading}
          >
          {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;