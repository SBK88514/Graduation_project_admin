import React, { useState } from "react";
import Header from "../../ui/Header";
import axios from "axios";
import ManagersTable from "../tables/managers/ManagerTable";
import { useQuery } from "@tanstack/react-query";
import Paginaiton from "../../ui/Paginaiton";

function AllManagers() {

  const [page, setPage] = useState(1)
  const [limit] = useState(2)

  const url = `/users/manager/getallmanagers?page=${page}&limit=${limit}`;


  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_managers", page],
    queryFn: async () =>(await axios.get(url)).data,
    select: (data) => ({
      AllManagers: data.data,
      count: data.count,
    }),
    
  });
  console.log(data);

  
  return (
    <div className="w-[90%] mx-auto">
      <Header>managers Table</Header>
      <div dir="rtl"></div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.AllManagers.length && <p>No Categories Yet, please add Categories</p>}
      {data && data?.AllManagers.length && !isLoading && <ManagersTable managers={data.AllManagers} />}
      {/* {Pagination} */}
      <Paginaiton listLength={data?.count} limit={limit} setPage={setPage}/>
    </div>
  );
}

export default AllManagers;
