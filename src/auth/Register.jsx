import { Axios } from "axios";
import { Mail, Lock, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [data,setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",

  });
  const [error,seterror] = useState();
  const [loading,SetLoading] = useState(false);
  const handleChange = (e) =>{
      setData({
        ...data,
        [e.target.name]:e.target.value,
      });
    };
  const handleUserSignup = async (e) =>{
    e.preventDefault();
    seterror("");
    
   const {userName,email,password,confirmPassword} = data;
      
    if (!userName || !email || !password || !confirmPassword) {
          return seterror("please provide all information");      
    }
    if(password != confirmPassword){
      return seterror("Passwords do not match");
    }
    try { 
      SetLoading(true);
      const response = await Axios.post


      
    } catch (error) {
      seterror(error.message);
    }finally{
      SetLoading(false);
    }
  }
  return (
    
    
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border p-8">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create your account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join us and start shopping today
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="userName"
                value={data.userName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
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
                name="password"
                value={data.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-600">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium"
          onClick={handleUserSignup}>
            {loading ? "Creating...." : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
         <Link to={"/login"}>
            <span className="font-medium text-black cursor-pointer">
                Sign in
            </span>
         </Link>
        </p>
      </div>
    </div>
  );
}
