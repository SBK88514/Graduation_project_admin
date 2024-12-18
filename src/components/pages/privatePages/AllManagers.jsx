import React, { useContext, useEffect, useState } from "react";
import Header from "../../ui/Header";
import axios from "axios";
import ManagersTable from "../tables/managers/ManagerTable";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../tables/managers/SearchInput";
import { debounce } from "../../../lib/Index";
import Paginaiton from "../../ui/Paginaiton";
import Button from "../../ui/Button";
import { ActionContext } from "../../contexts/ActionContext";

function AllManagers() {
  const { handleAddManager } = useContext(ActionContext);
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

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestion = async (source) => {
    try {
      if (searchInput) {
        const { data } = await axios.get(
          `/users/autocomplete?query=${searchInput}`,
          {
            cancelToken: source.token,
          }
        );
        setSuggestions(data.result);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error fetching suggestions:", error);
      }
    }
  };
  useEffect(() => {
    const source = axios.CancelToken.source();

    const processChange = debounce(() => getSuggestion(source));
    processChange();

    return () => {
      source.cancel("operation cancelled by the user.");
    };
  }, [searchInput]);

  console.log(data);

  return (
    <div className="w-[80%] mx-auto mt-5 ">
      <div className="flex justify-between items-center rounded-xl p-6 py-6 bg-amber-50 border-b border-amber-200 text-center">
        <SearchInput
          setSearchInput={setSearchInput}
          suggestions={suggestions}
        />
        <h2 className="text-2xl font-semibold text-amber-950 ">Manager List</h2>

        <Button
          name="Add New Maneger"
          //   link="/addmanager"
          onClick={() => handleAddManager()}
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
