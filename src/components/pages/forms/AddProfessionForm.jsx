import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AddProfessionForm() {
  const [profession_name, setProfession_name] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["add_profession"],
    mutationFn: async (formData) =>
      await axios.post("/professions/addProfession", formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_professions"] });
      setProfession_name("");
      document.getElementById("profession_modal").close();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ profession_name });
  };

  return (
    <div className="bg-orange-50 p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
        Add Profession
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-amber-700 mb-1"
                htmlFor="profession_name"
              >
                Profession Name
              </label>
              <input
                name="profession_name"
                id="profession_name"
                type="text"
                onChange={(e) => setProfession_name(e.target.value)}
                className="w-full rounded-xl border-2 border-amber-200 bg-amber-50 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Enter Profession"
              />
            </div>
          </div>
        </div>

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
            Submit Profession
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProfessionForm;
