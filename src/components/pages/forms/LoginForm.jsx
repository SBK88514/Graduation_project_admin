import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const initialValue = {
  user_email: "",
  user_password: "",
};

function Login() {
  const { handleLogin } = useContext(AuthContext);
  const [values, setValues] = useState(initialValue);
  console.log(values);

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values);
  }

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-amber-900 tracking-tight">
          Welcome Back
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="manager_email"
              className="block text-sm font-semibold text-amber-800 tracking-wide"
            >
              Email
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                name="manager_email"
                type="email"
                id="manager_email"
                className="block w-full pl-10 rounded-xl border-2 border-amber-200 bg-amber-50 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="manager_password"
              className="block text-sm font-semibold text-amber-800 tracking-wide"
            >
              Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                name="manager_password"
                type="password"
                id="manager_password"
                className="block w-full pl-10 rounded-xl border-2 border-amber-200 bg-amber-50 py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 text-white rounded-xl py-3 px-4 font-semibold hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors duration-200"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
