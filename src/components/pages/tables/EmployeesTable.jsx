import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

function EmployeesTable() {
//   const { data, isLoading, isError, error } = useQuery({
//     queryKey: ["get_employees"],
//     queryFn: async () => await axios.get("/users/manager/getallempolyees"),
//     select: (data) => data.data.data,
//   });
//   console.log(data);
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-amber-50 border-b border-amber-200">
          <h2 className="text-xl font-semibold text-amber-900">
            Managers List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-200">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">
                  Password
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-amber-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-amber-100">
              {/* Row 1 */}
              <tr className="hover:bg-amber-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">
                  john.manager
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
                  john.manager@company.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
                  ••••••••
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-amber-600 hover:text-amber-900 font-medium px-3 py-1 rounded-lg hover:bg-amber-100 transition-colors duration-200 mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200">
                    Delete
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-amber-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">
                  sarah.admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
                  sarah.admin@company.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
                  ••••••••
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-amber-600 hover:text-amber-900 font-medium px-3 py-1 rounded-lg hover:bg-amber-100 transition-colors duration-200 mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200">
                    Delete
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-amber-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">
                  mike.supervisor
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
                  mike.supervisor@company.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
                  ••••••••
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-amber-600 hover:text-amber-900 font-medium px-3 py-1 rounded-lg hover:bg-amber-100 transition-colors duration-200 mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>} */}
    </div>
  );
}

export default EmployeesTable;
