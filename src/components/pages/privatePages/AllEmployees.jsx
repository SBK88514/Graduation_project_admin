import React, { useState } from "react";
import EmployeesTable from "../tables/employees/EmployeesTable";
import Header from "../../ui/Header";
import NotEmployees from "./NotEmployees";
import axios from "axios";
import Paginaiton from "../../ui/Paginaiton";
import { useQuery } from "@tanstack/react-query";

function AllEmployees() {
  const [page, setPage] = useState(1);
  const [limit] = useState(2);

  const url = `/users/employee/getallempolyees?page=${page}&limit=${limit}`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_employees", page],
    queryFn: async () => (await axios.get(url)).data,
    select: (data) => ({
      allEmployees: data.allEmployees,
      count: data.count,
    }),
  });
  
  return (
    <div className="w-[90%] mx-auto text-amber-900">
      <Header>employees table</Header>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
          
      {data && !data?.allEmployees?.length ? (
        <NotEmployees />
      ) : (
        data && data?.allEmployees?.length && !isLoading && (
        <EmployeesTable employees={data.allEmployees} />
        )
      )}
      {/* {Pagination} */}
      <Paginaiton listLength={data?.count} limit={limit} setPage={setPage} />
    </div>
  );
}

export default AllEmployees;
