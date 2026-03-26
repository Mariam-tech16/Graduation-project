import { useState } from "react";

export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="relative w-[768px] max-w-full min-h-[480px] bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* SIGN IN */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ${
            isActive ? "translate-x-full opacity-0 z-10" : "z-20"
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-12 h-full text-center w-full">
            <h1 className="text-2xl font-bold">Sign in</h1>

            <div className="flex my-5 space-x-2">
              <SocialIcon>F</SocialIcon>
              <SocialIcon>G</SocialIcon>
              <SocialIcon>in</SocialIcon>
            </div>

            <span className="text-xs">or use your account</span>

            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />

            <a href="#" className="text-sm my-2">Forgot your password?</a>

            <button className="btn">Sign In</button>
          </form>
        </div>

        {/* SIGN UP */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ${
            isActive ? "translate-x-full opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <form className="bg-white flex flex-col items-center justify-center px-12 h-full text-center w-full">
            <h1 className="text-2xl font-bold">Create Account</h1>

            <div className="flex my-5 space-x-2">
              <SocialIcon>F</SocialIcon>
              <SocialIcon>G</SocialIcon>
              <SocialIcon>in</SocialIcon>
            </div>

            <span className="text-xs">or use your email</span>

            <input className="input" type="text" placeholder="Name" />
            <input className="input" type="email" placeholder="Email" />
            <input className="input" type="password" placeholder="Password" />

            <button className="btn">Sign Up</button>
          </form>
        </div>

        {/* OVERLAY */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 z-30 ${
            isActive ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`bg-gradient-to-r from-red-500 to-pink-500 text-white relative left-[-100%] w-[200%] h-full flex transition-all duration-700 ${
              isActive ? "translate-x-1/2" : ""
            }`}
          >

            {/* LEFT PANEL */}
            <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center">
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm my-4">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost-btn" onClick={() => setIsActive(false)}>
                Sign In
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center">
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm my-4">
                Enter your personal details and start journey with us
              </p>
              <button className="ghost-btn" onClick={() => setIsActive(true)}>
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Small reusable components */

function SocialIcon({ children }) {
  return (
    <div className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100">
      {children}
    </div>
  );
}
