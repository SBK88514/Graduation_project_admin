import React from "react";

function ProfessionsTableRow(profession) {
  const { profession_name } = profession;
  console.log(profession);
  return (
    <tr className="hover:bg-amber-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-amber-900">
        {profession_name}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
        <button
          onClick={() => handleEdit(profession)}
          className="text-amber-600 hover:text-amber-900 font-medium px-3 py-1 rounded-lg
             hover:bg-amber-100 transition-colors duration-200 mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteProfessions(_id)}
          className="text-red-600 hover:text-red-900 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors duration-200"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ProfessionsTableRow;
