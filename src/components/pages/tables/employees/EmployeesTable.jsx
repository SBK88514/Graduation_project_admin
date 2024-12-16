import React from "react";
import TableRow from "./TableRow";
// import { useQuery } from "@tanstack/react-query";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

function EmployeesTable({ employees }) {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-amber-50 border-b border-amber-200 text-center">
          <h2 className="text-2xl font-semibold text-amber-950 ">
            Employees List
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
              {employees.map((employee) => (
                <TableRow {...employee} />
              ))}
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
