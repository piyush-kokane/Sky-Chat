import { Routes, Route } from 'react-router-dom';
import { useAuth } from "react-oidc-context";

import Landing from '@pages/landing/Landing';
import Home from '@pages/home/Home';
import Chat from '@pages/chat/Chat';

import './App.css'



export default function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    // Wait for OIDC provider to finish processing code
    return <div>Loading...</div>;
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={auth.isAuthenticated ? <Home /> : <Landing />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}