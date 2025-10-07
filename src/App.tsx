import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';

import Default from './pages/landing/Landing';
import Home from './pages/home/Home';
import Chat from './pages/chat/Chat';

import './App.css'



export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="flex gap-4 mb-6">
        <Link className="text-blue-500 hover:underline" to="/">Home</Link>
        <Link className="text-blue-500 hover:underline" to="/about">About</Link>
        <Link className="text-blue-500 hover:underline" to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Default />} />
        {/* <Route path="/login" element={<Login />} /> */} // Redirect to AWS login
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}