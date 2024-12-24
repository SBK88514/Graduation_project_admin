import React, { useContext, useEffect, useState } from "react";
import Header from "../../ui/Header";
import axios from "axios";
import ManagersTable from "../tables/managers/ManagerTable";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../tables/managers/SearchInput";

import { debounce, exportToXL } from "../../../lib";

import Paginaiton from "../../ui/Paginaiton";
import useSuggestions from "../../hooks/useSuggestions";
import { ActionContext } from "../../contexts/ActionContext";

import Button from "../../ui/Button";
// import { ActionContext } from "../../contexts/ActionContext";

import ExportButton from "../../ui/ExportButton.jsx";
// import {ActionContext} from "../../contexts/ActionContext.jsx"

import { Filter, ChevronDown, Plus } from "lucide-react";
function AllManagers() {
  const { handleAddManager } = useContext(ActionContext);
  const { getAllDetails } = useContext(ActionContext);

  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  const url = `/users/manager/getallmanagers?page=${page}&limit=${limit}`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_managers", page],
    queryFn: async () => (await axios.get(url)).data,
    select: (data) => ({
      AllManagers: data.data,
      count: data.count,
    }),
  });

  const [suggestions, setSearchInput] = useSuggestions("users");
  const { handleEditManager } = useContext(ActionContext);

  async function downloadXl() {
    const result = await getAllDetails("/users/manager/getallmanagers");
    console.log(result);

    if (!result) return;

    exportToXL(result, "managersSheet");
  }

  return (
    <div className="w-[80%] mx-auto mt-5 p-4 shadow-md rounded-xl mb-6 animate-slide-down">
      <div className=" bg-white border-solid border-2 border-amber-300  my-auto p-4 shadow-md rounded-xl mb-6 animate-slide-down flex flex-wrap gap-4 items-center justify-between">
        <ExportButton download={downloadXl} />
        <SearchInput
          setSearchInput={setSearchInput}
          suggestions={suggestions}
          suggestionKey={"manager_name"}
          onClick={(current) => {
            handleEditManager({ ...current, bySearch: true });
          }}
        />
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold text-amber-900">
            Manager Management
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            className="flex justify-center items-center gap-2 px-4 py-2 h-10 bg-amber-100 text-amber-700 rounded-xl
                         hover:bg-amber-200 transition-all duration-200"
          >
            <Filter className="w-3 h-3" />
            <span>Filter</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <Button name="Add New Maneger" onClick={() => handleAddManager()} />
        </div>
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.AllManagers.length && (
        <p>No Categories Yet, please add Categories</p>
      )}
      {data && data?.AllManagers.length && !isLoading && (
        <ManagersTable managers={data.AllManagers} />
      )}
      {data?.count > limit && (
        <Paginaiton listLength={data?.count} limit={limit} setPage={setPage} />
      )}
    </div>
  );
}

export default AllManagers;
