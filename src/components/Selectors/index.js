import React from "react";
import { navigate, useLocation } from "@reach/router";
import queryString from "query-string";
import { Button } from "../Button";
import { SelectorsWrapper, SortSelect } from "./styles";

export function Selectors({ numberOfFilters, toggleFilters }) {
  const { origin, pathname, search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(",").filter(c => !!c) || [];
  const searchTerm = qs.s;
  const currentPage = parseInt(qs.page) || 1;
  const handleToggle = () => {
    toggleFilters();
  };
  const handleSelection = e => {
    let cIds = [];
    const navigateTo = `/all-products`;
    if (collectionIds.length > 0) {
      collectionIds.forEach(cid => {
        cIds.push(encodeURIComponent(cid));
      });
    }
    if (collectionIds.length > 0 && !searchTerm) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(",")}&sort_by=${
          e.target.value
        }&page=${currentPage}`
      );
    } else if (collectionIds.length && !!searchTerm) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(",")}&s=${searchTerm}&sort_by=${
          e.target.value
        }&page=${currentPage}`
      );
    } else if (!collectionIds.length && !!searchTerm) {
      navigate(
        `${origin}${pathname}?s=${searchTerm}&sort_by=${e.target.value}&page=${currentPage}`
      );
    } else {
      navigate(`${navigateTo}?sort_by=${e.target.value}`);
    }
  };
  return (
    <SelectorsWrapper>
      <Button
        width={"100%"}
        onClick={handleToggle}
      >{`Filters (${numberOfFilters})`}</Button>
      {/* <Button width={"100%"}>Sort</Button> */}
      <SortSelect onChange={handleSelection}>
        <option value="">SORT BY</option>
        <option value="alphaAsc">ALPHABETICALLY A-Z</option>
      </SortSelect>
    </SelectorsWrapper>
  );
}
