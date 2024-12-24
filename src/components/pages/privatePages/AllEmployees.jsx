import React, { useState, useContext } from "react";
import EmployeesTable from "../tables/employees/EmployeesTable";
import Header from "../../ui/Header";
import NotEmployees from "./NotEmployees";
import axios from "axios";
import Paginaiton from "../../ui/Paginaiton";
import { useQuery } from "@tanstack/react-query";
import Button from "../../ui/Button";
import SearchInput from "../tables/managers/SearchInput";
import { ActionContext } from "../../contexts/ActionContext";
import ExportButton from "../../ui/ExportButton.jsx";
import { Filter, ChevronDown } from "lucide-react";

function AllEmployees() {
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
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
    <div className="w-[80%] mx-auto mt-5 p-4 shadow-md rounded-xl mb-6 animate-slide-down">
      <div className=" bg-white border-solid border-2 border-amber-300  my-auto p-4 shadow-md rounded-xl mb-6 animate-slide-down flex flex-wrap gap-4 items-center justify-between">
        <ExportButton />
        <SearchInput
          setSearchInput={setSearchInput}
          suggestions={suggestions}
        />
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold text-amber-900">
            Employee Management
          </h1>
        </div>
        <button
          className="flex justify-center items-center gap-2 px-4 py-2 h-10 bg-amber-100 text-amber-700 rounded-xl
                         hover:bg-amber-200 transition-all duration-200"
        >
          <Filter className="w-3 h-3" />
          <span>Filter</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        <Button name="Add New Employee" onClick={() => handleAddEmployee()} />
        {/* <Button name="Add New Employee" onClick={() => handleAddEmployee()} /> */}
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
      {data?.count > limit && (
        <Paginaiton listLength={data?.count} limit={limit} setPage={setPage} />
      )}
    </div>
  );
}

export default AllEmployees;
