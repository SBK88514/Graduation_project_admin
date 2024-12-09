// import React, { useState } from "react";

// const initialValue = {
//   user_email: "",
//   user_password: "",
// };

// function AddEmployeeForm() {
//   const [values, setValues] = useState(initialValue);
//   console.log(values);
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// useContext

const initialValue = {
  employeeName: "",
  employeeEmail: "",
  employeePassword: "",
};

function AddEmployeeForm() {
  const { handleEmployee } = useContext(AuthContext);
  const [values, setValues] = useState(initialValue);
  console.log(values);

  //   function handleChange(e) {
  //     const { value, name } = e.target;
  //     setValues({ ...values, [name]: value });
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     handleLogin(values); //
  //   }
  function handleSubmit(e) {
    e.preventDefault();
    handleEmployee(values);
  }

  //   return (
  //     <div className="bg-orange-50 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
  //       <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
  //         Add New Employee
  //       </h2>

  //       <form className="space-y-6" onSubmit={handleSubmit}>
  //         {/* Personal Information Section */}
  //         <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
  //           <h3 className="text-lg font-semibold text-amber-800 mb-4">
  //             Personal Information
  //           </h3>

  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //             <div>
  //               <label
  //                 className="block text-sm font-medium text-amber-700 mb-1"
  //                 htmlFor="user_first_name"
  //               >
  //                 First Name
  //               </label>
  //               <input
  //                 onChange={handleChange}
  //                 name="user_first_name"
  //                 id="user_first_name"
  //                 type="text"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //                 placeholder="Enter first name"
  //               />
  //             </div>

  //             <div>
  //               <label
  //                 className="block text-sm font-medium text-amber-700 mb-1"
  //                 htmlFor=""
  //               >
  //                 Last Name
  //               </label>
  //               <input
  //                 name=""
  //                 id=""
  //                 type="text"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //                 placeholder="Enter last name"
  //               />
  //             </div>

  //             <div>
  //               <label
  //                 className="block text-sm font-medium text-amber-700 mb-1"
  //                 htmlFor=""
  //               >
  //                 Email
  //               </label>
  //               <input
  //                 name=""
  //                 id=""
  //                 type="email"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //                 placeholder="Enter email address"
  //               />
  //             </div>

  //             <div>
  //               <label
  //                 className="block text-sm font-medium text-amber-700 mb-1"
  //                 htmlFor=""
  //               >
  //                 Phone Number
  //               </label>
  //               <input
  //                 name=""
  //                 id=""
  //                 type="tel"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //                 placeholder="Enter phone number"
  //               />
  //             </div>
  //           </div>
  //         </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label
        className="block text-sm font-medium text-amber-700 mb-1"
        htmlFor="employeeName"
      >
        Name
      </label>
      <input
        onChange={handleChange}
        name="employeeName"
        id="employeeName"
        type="text"
        className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        placeholder="Enter first name"
      />
    </div>

    <div>
      <label
        className="block text-sm font-medium text-amber-700 mb-1"
        htmlFor="employeeEmail"
      >
        Email
      </label>
      <input
        onChange={handleChange}
        name="employeeEmail"
        id="employeeEmail"
        type="email"
        className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        placeholder="Enter email address"
      />
    </div>

    <div>
      <label
        className="block text-sm font-medium text-amber-700 mb-1"
        htmlFor="employeePassword"
      >
        Password
      </label>
      <input
        onChange={handleChange}
        name="employeePassword"
        id="employeePassword"
        type="tel"
        className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
        placeholder="Enter phone number"
      />
    </div>
  </div>;
  // {/* Employment Details Section */}
  //         {/* <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
  //           <h3 className="text-lg font-semibold text-amber-800 mb-4">
  //             Employment Details
  //           </h3>

  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //             <div>
  //               <label className="block text-sm font-medium text-amber-700 mb-1">
  //                 Department
  //               </label>
  //               <select className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
  //                 <option value="">Select department</option>
  //                 <option value="sales">General</option>
  //                 <option value="it">Electricity</option>
  //                 <option value="hr">Plumbing</option>
  //                 <option value="marketing">Painter</option>
  //               </select>
  //             </div>

  //             <div>
  //               <label className="block text-sm font-medium text-amber-700 mb-1">
  //                 Position
  //               </label>
  //               <input
  //                 type="text"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //                 placeholder="Enter position"
  //               />
  //             </div>

  //             <div>
  //               <label className="block text-sm font-medium text-amber-700 mb-1">
  //                 Start Date
  //               </label>
  //               <input
  //                 type="date"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //               />
  //             </div>

  //             <div>
  //               <label className="block text-sm font-medium text-amber-700 mb-1">
  //                 Salary
  //               </label>
  //               <input
  //                 type="number"
  //                 className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
  //                 placeholder="Enter salary"
  //               />
  //             </div>
  //           </div>
  //         </div> */}

  //         {/* Submit Button */}
  //         <div className="flex justify-end space-x-4">
  //           <button
  //             type="button"
  //             className="px-6 py-2 border-2 border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
  //           >
  //             Cancel
  //           </button>
  //           <button
  //             type="submit"
  //             className="px-6 py-2 bg-amber-600 text-white rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
  //           >
  //             Add Employee
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }

  // export default AddEmployeeForm;
}
