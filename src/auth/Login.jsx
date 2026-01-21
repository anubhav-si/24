import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-8">
        
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back, please enter your details
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <button className="text-gray-600 hover:underline">
              Forgot password?
            </button>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link to={"/register"}>
              <span className="font-medium text-blue-600 cursor-pointer">
                Create one
              </span>
          </Link>
          
        </p>
      </div>
    </div>
  );
}
