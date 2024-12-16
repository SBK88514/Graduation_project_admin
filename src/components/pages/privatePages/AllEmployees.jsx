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
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-[90%] mx-auto text-amber-900">
        {isLoading && <div>Loading...</div>}
        {isError && <div>{error}</div>}

        {data && !data.allEmployees?.length ? (
          <NotEmployees />
        ) : (
          data &&
          data.allEmployees?.length &&
          !isLoading && <EmployeesTable employees={data.allEmployees} />
        )}

        <Paginaiton listLength={data?.count} limit={limit} setPage={setPage} />
      </div>
    </div>
  );
}

export default AllEmployees;
