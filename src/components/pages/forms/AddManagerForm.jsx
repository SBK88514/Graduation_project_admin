import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const initialValue = {
  manager_name: "",
  manager_email: "",
  manager_password: "",
};

function AddManagerForm() {
  const navigate = useNavigate();
  const { handleManager } = useContext(AuthContext);
  const [values, setValues] = useState(initialValue);

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await handleManager(values);
    if (result) {
      navigate("/allmanagers/");
    }
  }

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="bg-orange-50 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
          Add New Manager
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-4">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="manager_name"
                >
                  Name
                </label>
                <input
                  onChange={handleChange}
                  name="manager_name"
                  id="manager_name"
                  type="text"
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="manager_email"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  name="manager_email"
                  id="manager_email"
                  type="email"
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter Email"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-amber-700 mb-1"
                  htmlFor="manager_password"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  name="manager_password"
                  id="manager_password"
                  type="password"
                  className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border-2 border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Add Manager
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddManagerForm;
