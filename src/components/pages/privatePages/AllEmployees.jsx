import React, { useEffect, useState } from "react";
import EmployeesTabl from "../tables/employees/EmployeesTable";
import Header from "../../ui/Header";
import useFetch from "../../hooks/useFetch";
import NotEmployees from "./NotEmployees";
// import Paginaiton from "../../ui/Paginaiton";
// import { useQuery } from "@tanstack/react-query";

function AllEmployees() {
  const [data, isLoading, isError] = useFetch(
    "/users/employee/getallempolyees"
  );

  // const [page, setPage] = useState(1)
  // const [limit] = useState(2)

  // const url = `/users/employee/getallempolyees?page=${page}&limit=${limit}`;

  // const {data, isLoading, isError, error} = useQuery({
  //   queryKey: ["get_employees", page],
  //   queryFn: async () => await axios.get(url),
  //   select: (data) => ({
  //     allEmployees: data.allEmployees,
  //     count: data.count,
  //   }),

  // });

  //   const [employees, setEmployees] = useState([])
  //   const [togle,setTogle] = useState(false)

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-[90%] mx-auto text-amber-900">
        <Header>employees table</Header>
        {isLoading && <div>Loading...</div>}
        {isError && <div>{isError}</div>}
        {data && !data.length ? (
          <NotEmployees />
        ) : (
          <EmployeesTabl employees={data} />
        )}
        {/* {data && data.length && <EmployeesTabl employees={data} />} */}

        {/* {isError && <div>{error}</div>}
      {data && !data.allEmployees?.length ? (
        <NotEmployees />
      ) : (
        <EmployeesTabl employees={data.allEmployees} />
      )} */}
        {/* {data && data.length && <EmployeesTabl employees={data} />} */}
        {/* {Pagination} */}
        {/* <Paginaiton employeesLength={data?.count} limit={limit} setPage={setPage}/> */}
      </div>
    </div>
  );
}

export default AllEmployees;
