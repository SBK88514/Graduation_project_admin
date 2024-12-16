import React, { useEffect, useState } from "react";
import Header from "../../ui/Header";
import axios from "axios";
import ManagersTable from "../tables/managers/ManagerTable";
import { useQuery } from "@tanstack/react-query";
import SearchInput from "../tables/managers/SearchInput";
import { debounce } from "../../../lib/Index";

function AllManagers() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_managers"],
    queryFn: async () => axios.get("users/manager/getallmanagers"),
    select: (data) => data.data.data,
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
      // else setSuggestions([]);
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

    // Call the function
    const processChange = debounce(() => getSuggestion(source));
    processChange();

    return () => {
      source.cancel("operation cancelled by the user.");
    };
  }, [searchInput]);

  return (
    <div className="w-[90%] mx-auto">
      <Header>managers Table</Header>
      <div dir="rtl">
        <SearchInput setSearchInput={setSearchInput} suggestions={suggestions}/>
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}
      {data && !data.length && <p>No Categories Yet, please add Categories</p>}
      {data && data?.length && !isLoading && <ManagersTable managers={data} />}
    </div>
  );
}

export default AllManagers;
