"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SixtHeader from "@/components/SixtHeader";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Daten:", { username, password });
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-900 text-white overscroll-none"
      style={{ overscrollBehavior: "none" }}
    >
      <SixtHeader />
      <div
        className="w-full max-w-5xl mx-auto px-6 flex items-center justify-center"
        style={{ minHeight: "80vh" }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <label className="block mb-2 text-sm font-medium">Benutzername</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 mb-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
          />

          <label className="block mb-2 text-sm font-medium">Passwort</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-6 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 transition py-2 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
