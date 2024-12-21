import React, { useState } from "react";
import EmployeesTable from "../tables/employees/EmployeesTable";
import Header from "../../ui/Header";
import NotEmployees from "./NotEmployees";
import axios from "axios";
import Paginaiton from "../../ui/Paginaiton";
import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import SearchInput from "../tables/managers/SearchInput";
import { ActionContext } from "../../contexts/ActionContext";

function AllEmployees() {
  const [page, setPage] = useState(1);
  const [limit] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { handleAddEmployee } = useContext(ActionContext);

  const url = `/users/employee/getallempolyees?page=${page}&limit=${limit}`;
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_employees", page],
    queryFn: async () => (await axios.get(url)).data,
    select: (data) => ({
      allEmployees: data.allEmployees,
      count: data.count,
    }),
  });

  return (
    <div className="w-[80%] mx-auto mt-5">
      <div className="flex justify-between items-center rounded-xl p-6 py-6 bg-amber-50 border-b border-amber-200 text-center">
        <SearchInput
          setSearchInput={setSearchInput}
          suggestions={suggestions}
        />
        <h2 className="text-2xl font-semibold text-amber-950 ">
          Employee List
        </h2>

        <Button name="Add New Employee" onClick={() => handleAddEmployee()} />
      </div>

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
  );
}

export default AllEmployees;
