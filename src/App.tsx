import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'

function Home() {
  return <h1 className="text-3xl font-bold">Home Page</h1>;
}

function About() {
  return <h1 className="text-3xl font-bold">About Page</h1>;
}

function Contact() {
  return <h1 className="text-3xl font-bold">Contact Page</h1>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="flex gap-4 mb-6">
        <Link className="text-blue-500 hover:underline" to="/">Home</Link>
        <Link className="text-blue-500 hover:underline" to="/about">About</Link>
        <Link className="text-blue-500 hover:underline" to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}