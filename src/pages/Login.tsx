import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useAuthStore } from "../store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Existing auth store login function
    login("admin");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white text-[#0F1D33]">
      {/* HEADER */}
      <header className="border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F1D33]">
              <Shield
                size={24}
                strokeWidth={2}
                className="text-[#00C7A5]"
              />
            </div>

            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-[#0F1D33]">RE</span>
              <span className="text-[#2563EB]">settle</span>
              <span className="text-[#2563EB]">AI</span>
            </div>
          </Link>

          {/* NAVIGATION */}
          {/* <nav className="hidden items-center gap-7 text-sm font-semibold text-[#5F6B7A] sm:flex">

            <Link
              to="/login"
              className="text-[#0F1D33]"
            >
              Authority Login
            </Link>

            <Link
              to="/signup"
              className="rounded-lg bg-[#14233B] px-5 py-3 text-white transition hover:bg-[#0F1D33]"
            >
              Authority Sign Up
            </Link>
          </nav> */}
          <nav className="flex items-center space-x-8">
            <a href="/home" className="text-sm font-medium text-slate-600 hover:text-[#0A192F] transition-colors">
              Home
            </a>
            <a href="/about" className="text-sm font-medium text-slate-600 hover:text-[#0A192F] transition-colors">
              About
            </a>
            <button
              onClick={() => navigate('/login')}
              className="text-sm font-medium text-slate-700 hover:text-[#0A192F] transition-colors"
            >
              Authority Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="text-sm font-medium bg-[#0A192F] text-white px-4 py-2.5 rounded-md hover:bg-slate-800 transition-all shadow-sm"
            >
              Authority Sign Up
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">


          {/* TOP LABEL */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F1D33] shadow-lg">
              <Shield
                size={34}
                strokeWidth={2}
                className="text-[#00C7A5]"
              />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Authority Access
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0F1D33]">
              Welcome back to REsettleAI
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#5F6B7A]">
              Sign in to access the disaster management command portal and
              monitor relocation operations.
            </p>
          </div>

          {/* LOGIN CARD */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_12px_40px_rgba(15,29,51,0.07)] sm:p-8">


            {/* ERROR MESSAGE */}
            {error && (
              <div className="mb-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#0F1D33]"
                >
                  Official Email
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A3]"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your official email"
                    className="w-full rounded-xl border border-[#D9DEE7] bg-[#F9FAFB] py-3.5 pl-11 pr-4 text-sm text-[#0F1D33] outline-none transition placeholder:text-[#8A94A3] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-[#0F1D33]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A94A3]"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#D9DEE7] bg-[#F9FAFB] py-3.5 pl-11 pr-12 text-sm text-[#0F1D33] outline-none transition placeholder:text-[#8A94A3] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A94A3] transition hover:text-[#0F1D33]"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* FORGOT PASSWORD */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-semibold text-[#2563EB] transition hover:text-[#1D4ED8]"
                  onClick={() => {
                    alert("Please contact the system administrator.");
                  }}
                >
                  Forgot password?
                </button>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#14233B] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0F1D33] active:scale-[0.98]"
              >
                Sign in to Command Portal

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* SIGNUP LINK */}
            <div className="mt-7 border-t border-[#E5E7EB] pt-6 text-center text-sm text-[#5F6B7A]">
              Don't have authority access?{" "}
              <Link
                to="/signup"
                className="font-bold text-[#2563EB] transition hover:text-[#1D4ED8]"
              >
                Request access
              </Link>
            </div>
          </div>

          {/* FOOTER NOTE */}
          <p className="mt-6 text-center text-xs leading-5 text-[#8A94A3]">
            Authorized personnel only. All activities are monitored for
            operational security.
          </p>
        </div>
      </main>
    </div>
  );
}