import React, { useEffect, useState } from "react";
import EmployeesTabl from "../tables/EmployeesTable";
import Header from "../../ui/Header";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

function AllEmployees() {
  const [data, isLoading, isError] = useFetch("/users/employee/getallempolyees");

  console.log(data);
  //   const [employees, setEmployees] = useState([])
  //   const [togle,setTogle] = useState(false)

  //   async function getEmployees(){
  //     try{
  //       const {data} = await axios.get("/users/manager/getallempolyees")
  //       console.log(data)
  //       setEmployees(data.data)

  //     }catch(error){
  //       console.log(error)
  //     }
  //   }

  // async function deleteEmployee(id) {
  //   try {
  //     const {data} = await axios.delete(`/users/employee/delete/${id}`)
  //     console.log(data)
  //     if(data.success){
  //         setTogle(!togle)
  //     }

  //   }catch(error){
  //     console.log(error)
  //   }

  // }
  // useEffect(() => {
  //   getEmployees()
  // },[togle])
  return (
    <div className="w-[90%] mx-auto">
      <Header>employees table</Header>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError}</div>}
      {data && !data.length && <p>there are not emmployees in the company</p>}
      {data && data.length && <EmployeesTabl employees={data} />}
    </div>
  );
}

export default AllEmployees;
