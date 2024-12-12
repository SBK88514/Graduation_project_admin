import React, { useEffect, useState } from "react";
import EmployeesTabl from "../tables/employees/EmployeesTable";
import Header from "../../ui/Header";
import useFetch from "../../hooks/useFetch";
import NotEmployees from "./NotEmployees";

function AllEmployees() {
  const [data, isLoading, isError] = useFetch(
    "/users/employee/getallempolyees"
  );


 


  return (
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
    </div>
  );
}

export default AllEmployees;
