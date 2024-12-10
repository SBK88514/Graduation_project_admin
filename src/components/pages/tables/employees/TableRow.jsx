import React, { useContext } from "react";
import { ActionContext } from "../../../contexts/ActionContext";

function TableRow(employee) {
    const {_id,employeeName, employeeEmail} = employee
   console.log(employee)

    const { deleteEmployee, handleEdit} = useContext(ActionContext)
  return (
    <tr className="hover:bg-amber-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">
      {employeeName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
      {employeeEmail}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
      *********
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <button 
        onClick={() => handleEdit(employee)}
        className="text-amber-600 hover:text-amber-900 font-medium px-3 py-1 rounded-lg
         hover:bg-amber-100 transition-colors duration-200 mr-2">
          Edit
        </button>
        <button 
        onClick={() => deleteEmployee(_id)}
        className="text-red-600 hover:text-red-900 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
