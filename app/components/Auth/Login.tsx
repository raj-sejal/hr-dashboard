"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Add this props type:
type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(); // ✅ Call parent state update
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-indigo-900 text-center">HR Dashboard Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          className="mb-6 p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-400 w-full text-lg"
        />
        <button type="submit" className="btn btn-primary w-full text-lg font-bold">Login</button>
      </form>
    </div>
  );
}
