import React from "react";
import TableRow from "./TableRow";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function EmployeesTable({ employees }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: "delete_employee",
    mutationFn: async (id) => axios.delete(`users/employee/delete/${id}`),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["get_employees"] });
    },
  });
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-amber-50 border-b border-amber-200 text-center"></div>

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
                <TableRow employee={employee} mutate={mutate} />
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
