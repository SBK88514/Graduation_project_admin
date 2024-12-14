import React from "react";
import Header from "../../ui/Header";

// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManagersTable from "../tables/managers/ManagerTable";
import { useQuery } from "@tanstack/react-query";

function AllManagers() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_managers"],
    queryFn: async () => axios.get("users/manager/getallmanagers"),
    select: (data) => data.data.data,
  });

 

  return (
    <div className="w-[90%] mx-auto">
      <Header>managers Table</Header>
      <div dir="rtl"></div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.length && <p>No Categories Yet, please add Categories</p>}
      {data && data?.length && !isLoading && <ManagersTable managers={data} />}
    </div>
  );
}

export default AllManagers;
