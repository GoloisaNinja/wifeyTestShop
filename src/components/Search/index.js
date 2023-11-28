import React, { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
import queryString from "query-string";
import { FaSearch } from "react-icons/fa";
import { SearchForm } from "./styles";

export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || "";
  const sortByWhat = queryString.parse(search)?.sort_by;

  const handleSubmit = e => {
    e.preventDefault();
    if (c && !!sortByWhat) {
      navigate(
        `/all-products?c=${encodeURIComponent(c)}&s=${encodeURIComponent(
          searchTerm
        )}&sort_by=${sortByWhat}`
      );
    } else if (c && !sortByWhat) {
      navigate(
        `/all-products?c=${encodeURIComponent(c)}&s=${encodeURIComponent(
          searchTerm
        )}`
      );
    } else if (!c && !!sortByWhat) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&sort_by=${sortByWhat}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        value={searchTerm}
        onChange={e => setSearchTerm(e.currentTarget.value)}
        placeholder="Search products"
      />
      <Button $inverse="true">
        <FaSearch />
      </Button>
    </SearchForm>
  );
}
