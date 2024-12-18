import React, { useContext, useEffect, useState } from "react";
import Header from "../../ui/Header";
import axios from "axios";
import ManagersTable from "../tables/managers/ManagerTable";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../tables/managers/SearchInput";

import Paginaiton from "../../ui/Paginaiton";
import useSuggestions from "../../hooks/useSuggestions";
import { ActionContext } from "../../contexts/ActionContext";


function AllManagers() {
  const [page, setPage] = useState(1);
  const [limit] = useState(2);

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
  const {handleEditManager} = useContext(ActionContext)

  return (
    <div className="w-[90%] mx-auto">
      {/* <Header>managers Table</Header> */}
      <div dir="rtl">
        <SearchInput
          setSearchInput={setSearchInput}
          suggestions={suggestions}
          suggestionKey={"manager_name"}
          onClick={(current) => {
            handleEditManager({ ...current, bySearch: true })}}
        />
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.AllManagers.length && (
        <p>No Categories Yet, please add Categories</p>
      )}
      {data && data?.AllManagers.length && !isLoading && (
        <ManagersTable managers={data.AllManagers} />
      )}
      {/* {Pagination} */}
      <Paginaiton listLength={data?.count} limit={limit} setPage={setPage} />
    </div>
  );
}

export default AllManagers;
