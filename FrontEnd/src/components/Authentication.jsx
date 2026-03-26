import { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

export default function AuthPage() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields ⚠️");
      return;
    }

    console.log({ email, password });
  };

  return (


    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white font-sans">
      <div className="relative w-[768px] max-w-full min-h-[500px] bg-[#111827] rounded-2xl shadow-[0_0_40px_rgba(255,75,43,0.2)] overflow-hidden">

        {/* SIGN IN */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ${
            isActive ? "translate-x-full opacity-0 z-10" : "z-20"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-10 w-full">
            <h1 className="text-3xl font-bold mb-2">Sign In</h1>

            <SocialRow />

            <span className="text-xs text-gray-400">or use your account</span>

            <Input type="email" placeholder="Email" setValue={setEmail} />
            <Input type="password" placeholder="Password" setValue={setPassword} />

            <a href="#" className="text-xs text-gray-400 mt-2 hover:text-red-400">
              Forgot password?
            </a>

            <button className="btn-primary">Sign In</button>
          </form>
        </div>

        {/* SIGN UP */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ${
            isActive ? "translate-x-full opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <form className="flex flex-col items-center justify-center px-10 w-full">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>

            <SocialRow />

            <span className="text-xs text-gray-400">or use your email</span>

            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />

            <button className="btn-primary">Sign Up</button>
          </form>
        </div>

        {/* OVERLAY */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 z-30 ${
            isActive ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`relative left-[-100%] w-[200%] h-full flex transition-all duration-700 ${
              isActive ? "translate-x-1/2" : ""
            }`}
          >

            {/* LEFT PANEL */}
            <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center bg-gradient-to-r from-red-600 to-pink-600">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-sm my-4 text-white/80">
                Login to continue your metro journey 🚇
              </p>
              <button className="btn-ghost" onClick={() => setIsActive(false)}>
                Sign In
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-1/2 flex flex-col items-center justify-center px-10 text-center bg-gradient-to-r from-red-600 to-pink-600">
              <h1 className="text-2xl font-bold">Hello, Passenger</h1>
              <p className="text-sm my-4 text-white/80">
                Start your digital ticket journey today
              </p>
              <button className="btn-ghost" onClick={() => setIsActive(true)}>
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
 
  );
}

/* 🔹 Components */

function Input({ type, placeholder, setValue }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => setValue && setValue(e.target.value)}
      className="bg-gray-800 text-white px-4 py-2 my-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
}

function SocialRow() {
  return (
    <div className="flex my-4 space-x-3">
      <SocialIcon><FaFacebookF /></SocialIcon>
      <SocialIcon><FaGoogle /></SocialIcon>
      <SocialIcon><FaLinkedinIn /></SocialIcon>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="border border-gray-600 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition">
      {children}
    </div>
  );
}