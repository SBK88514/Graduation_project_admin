import React, { useContext } from "react";
import ProfessionsTableRow from "./ProfessionsTableRow";
import { ActionContext } from "../../../contexts/ActionContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function ProfessionsTable({ professions }) {

  // console.log(professions);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: "delete_profession",
    mutationFn: async (id) =>
      axios.delete(`/professions/deleteprofession/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_professions"] });
    },
  });

  const { handleAddProfession } = useContext(ActionContext);

  return (
    <div className="p-6 w-3/4 m-auto">
      <button
        onClick={() => handleAddProfession()}
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {/* {props.name} */}
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
              {professions.map((profession) => (
                <ProfessionsTableRow profession={profession} mutate={mutate} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProfessionsTable;
