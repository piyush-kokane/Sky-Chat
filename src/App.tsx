import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "react-oidc-context";
import type { ReactElement } from "react";

import Landing from "@pages/landing/Landing";
import Home from "@pages/home/Home";
import Chat from "@pages/chat/Chat";

import "./App.css";

function ProtectedRoute({ element }: { element: ReactElement }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <p>Loading...</p>;

  if (isAuthenticated) {
    toast.success("Please Login first");
    return <Navigate to="/" replace />;
  }

  return element;
}

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/chat/:username" element={<ProtectedRoute element={<Chat />} />} />
      </Routes>
    </>
  );
}
