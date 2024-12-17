import React, { useContext } from "react";
import ProfessionsTableRow from "./ProfessionsTableRow";
import { ActionContext } from "../../../contexts/ActionContext";

const obj = [
  {
    _id: "676154d058a7f50e80949b50",
    profession_name: "Tiler",
    createdAt: "2024-12-17T10:39:12.781Z",
    updatedAt: "2024-12-17T10:39:12.781Z",
    __v: 0,
  },
  {
    _id: "6761551658a7f50e80949b52",
    profession_name: "Electrician",
    createdAt: "2024-12-17T10:40:22.141Z",
    updatedAt: "2024-12-17T10:40:22.141Z",
    __v: 0,
  },
  {
    _id: "6761552858a7f50e80949b54",
    profession_name: "Plumber",
    createdAt: "2024-12-17T10:40:40.271Z",
    updatedAt: "2024-12-17T10:40:40.271Z",
    __v: 0,
  },
];

function ProfessionsTable() {
  const { handleAddProfession } = useContext(ActionContext);
  return (
    <div className="p-6 w-3/4 m-auto">
      <button
        onClick={() => handleAddProfession()}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add Profession
      </button>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-amber-50 border-b border-amber-200 text-center">
          <h2 className="text-2xl font-semibold text-amber-950 ">
            Professions List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-200">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-amber-800 uppercase tracking-wider">
                  Profession
                </th>
                <th className="px-6 py-3 text-right text-sm font-medium text-amber-800 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-amber-100">
              {/* Row 1 */}
              {obj.map((profession) => (
                <ProfessionsTableRow {...profession} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfessionsTable;
