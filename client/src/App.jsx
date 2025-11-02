
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddFood from './pages/AddFood';

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white shadow">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">FoodHub</h1>
          <div className="space-x-3">
            <Link to="/" className="text-sm">Home</Link>
            <Link to="/add-food" className="text-sm">Add Food</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-food" element={<AddFood/>} />
        </Routes>
      </main>
    </div>
  );
}
