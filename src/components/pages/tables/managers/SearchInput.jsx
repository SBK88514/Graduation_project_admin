import React from "react";
import { FaSearchengin } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
function SearchInput() {
  const { mutate } = useMutation({
    mutationFn: async (searchInput) =>
      await axios.get(`/users/autocomplete?query=${searchInput}`),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        onChange={(e) => mutate(e.target.value)}
        type="text"
        className="grow"
        placeholder="search"
        name="search"
      />

      <FaSearchengin />
    </label>
  );
}

export default SearchInput;
