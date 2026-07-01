import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import loginImage from "../../assets/images/login-illustration.png";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] =useState(false);

  const handleChange = (e) => {
    setError("");

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.email || !form.password) {
      setError("Please enter Email and Password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:5001/employee?email=${form.email}`
      );

      if (response.data.length === 0) {
        setError("Email not found.");
        return;
      }

      const employee = response.data[0];

      if (!employee.isRegistered) {
        setError("Please register first.");
        return;
      }

      if (employee.password !== form.password) {
        setError("Invalid password.");
        return;
      }

      localStorage.setItem(
        "user",
        JSON.stringify(employee)
      );

      if (employee.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/employee/dashboard");
      }
    } catch (err) {
      console.log(err);
      setError("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-5">

      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* Left Section */}

          <div className="bg-gradient-to-br from-slate-900 to-blue-800 text-white flex flex-col justify-center items-center p-10">

            <h1 className="text-4xl font-bold mb-4">
              Welcome Back 👋
            </h1>

            <p className="text-center text-gray-300 mb-8">
              Login to access your Employee Management System.
            </p>

            <img
              src={loginImage}
              alt="Login"
              className="w-80"
            />

          </div>

          {/* Right Section */}

          <div className="flex items-center justify-center p-10">

            <div className="w-full max-w-md">

              <h2 className="text-3xl font-bold text-center mb-8">
                Login
              </h2>

              {error && (
                <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">

                {/* Email */}

                <div>

                  <label className="font-medium">
                    Email Address
                  </label>

                  <div className="flex items-center border rounded-lg mt-2 px-3">

                    <FaEnvelope className="text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 outline-none"
                    />

                  </div>

                </div>

                {/* Password */}

                <div>

                  <label className="font-medium">
                    Password
                  </label>

                  <div className="flex items-center border rounded-lg mt-2 px-3">

                    <FaLock className="text-gray-400" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter Password"
                      value={form.password}
                      onChange={handleChange}
                      className="w-full p-3 outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-500" />
                      ) : (
                        <FaEye className="text-gray-500" />
                      )}
                    </button>

                  </div>

                </div>

                {/* Remember */}

                <div className="flex justify-between items-center">

                  <label className="flex items-center gap-2 text-sm">

                    <input
                      type="checkbox"
                      className="accent-blue-600"
                    />

                    Remember Me

                  </label>

                  <button
                    type="button"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Forgot Password?
                  </button>

                </div>

                {/* Button */}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

              </form>

              <p className="text-center mt-6">

                Don't have an account?

                <Link
                  to="/register"
                  className="text-blue-600 font-semibold ml-2"
                >
                  Register
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;