import React from 'react';
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex">
      <div className="w-1/6 bg-green-800 text-white p-4">
        <ul>
        <li className="py-2 cursor-pointer" onClick={() => navigate('/dashboard')}>Dashboard</li>
          <li className="py-2 cursor-pointer" onClick={() => navigate('/login')}>Profile</li>
          <li className="py-2 cursor-pointer">Settings</li>
        </ul>
      </div>
      
      <div className="w-5/6 p-6 bg-cover" style={{
        backgroundImage: "url('images/fresh-vegetables-basket.jpg')",
      }}>
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-4xl font-bold text-green-600">Grocery Store</h1>
          <div className="cursor-pointer" onClick={() => navigate('/login')}>
            User Profile
          </div>
        </header>
        <main className="mt-6">
        <h3 className="text-3xl font-bold">
                Hello, Welcome to the{""}
                <span className="text-green-500"> Grocery Store!!!</span>
            </h3>
          <p className='py-3 text-xl text-green-500'>Think Food, Think Fresh.</p>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
