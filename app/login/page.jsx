"use client";
import React, { useState } from "react";
import Image from "next/image";
import "@/app/styles/Login.css"; // Import your CSS

export default function Login() {
  const [username, setUsername] = useState("");

  // Focus effects
  const handleFocus = (e) => {
    e.target.parentElement.parentElement.classList.add("focus");
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentElement.parentElement.classList.remove("focus");
    }
  };

  return (
    <div className="container">
      <Image
        src="/assets/images/wave.png"
        alt="wave"
        className="wave"
        width={500}
        height={500}
      />
      <div className="img">
        <Image
          src="/assets/images/bg.svg"
          alt="bg"
          width={500}
          height={500}
        />
      </div>
      <div className="login-content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Logged In!");
          }}
        >
          <Image
            src="/assets/images/avatar.svg"
            alt="avatar"
            width={100}
            height={100}
          />
          <h2 className="title">Welcome</h2>

          <div className="input-div one">
            <div className="i">
              <i className="fas fa-user"></i>
            </div>
            <div className="div">
              <h5>Username</h5>
              <input
                type="text"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>
          </div>

          <div className="input-div pass">
            <div className="i">
              <i className="fas fa-lock"></i>
            </div>
            <div className="div">
              <h5>Password</h5>
              <input
                type="password"
                className="input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
            </div>
          </div>

          <a href="#">Forgot Password?</a>
          <input type="submit" className="btn" value="Login" />
        </form>
      </div>
    </div>
  );
}
