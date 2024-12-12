import React from "react";

function TableRow({ manager_name, manager_email }) {
  return (
    <tr className="hover:bg-amber-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">
        {manager_name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
        {manager_email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-800">
        *********
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <button
          onClick={() => document.getElementById("manager_modal").showModal()}
          className="text-amber-600 hover:text-amber-900 font-medium px-3 py-1 rounded-lg
         hover:bg-amber-100 transition-colors duration-200 mr-2"
        >
          Edit
        </button>
        <button className="text-red-600 hover:text-red-900 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
