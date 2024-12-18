import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProfessionsTable from "../tables/professions/ProfessionsTable";


function AllProfessions() {
  const url = "/professions/getallprofessions";

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_professions"],
    queryFn: async () => (await axios.get(url)).data,
    select: (data) => ({
      AllProfession: data.data,
      count: data.count,
    }),
  });

  // הדפס את הנתונים בקונסול
  useEffect(() => {
    if (data) {
      console.log("All Professions:", data.AllProfession);
      console.log("Count:", data.count);
    }
  }, [data]);

  return (
    <div className="w-[90%] mx-auto">
      {/* {data.AllProfession} */}
      {/* <ProfessionsTable profession={data.AllProfession} /> */}
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.AllProfession.length && (
        <p>No Categories Yet, please add Categories</p>
      )}
      {data && data?.AllProfession.length && !isLoading && (
        <ProfessionsTable profession={data.AllProfession} />
      )}
    </div>
  );
}

export default AllProfessions;
