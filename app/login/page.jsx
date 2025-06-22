"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || (isSignup && (!email.trim() || !password.trim()))) {
      alert("Please fill all fields");
      return;
    }

    // Simulate successful login/signup
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-indigo-900 text-center">
          {isSignup ? "Sign Up" : "Login"}
        </h1>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          className="mb-6 p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-400 w-full text-lg"
        />

        {/* Show Email & Password only in Signup */}
        {isSignup && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-6 p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-400 w-full text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-6 p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-indigo-400 w-full text-lg"
            />
          </>
        )}

        <button
          type="submit"
          className="btn btn-primary w-full text-lg font-bold"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <div className="mt-6 text-center text-gray-600">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(false)}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsSignup(true)}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
