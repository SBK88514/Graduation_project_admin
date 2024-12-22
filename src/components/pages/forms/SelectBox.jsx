import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import WaveLoader from "../../ui/Loader";

function SelectBox({ handleChange }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_professions"],
    queryFn: async () => await axios.get("/professions/getallprofessions"),
    select: (data) => data.data.data,
  });
  console.log(data);
  return (
    <div>
      <select
        id="employeeId"
        name="employeeId"
        className="w-full rounded-xl border-2
         border-amber-200 bg-amber-50 py-2 px-3 
         focus:outline-none focus:ring-2 focus:ring-amber-500
          focus:border-amber-500"
        onChange={handleChange}
      >
        <option value="">Select Profession</option>
        {isLoading && (
          <div className="flex justify-center items-center h-[50vh]">
            <WaveLoader />
          </div>
        )}
        {isError && <div>{error}</div>}
        {data?.map((profession) => (
          <option key={profession._id} value={profession._id}>
            {profession.profession_name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
