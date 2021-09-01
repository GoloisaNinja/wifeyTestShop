import React from "react";
import { Checkbox } from "components";
import { CategoryFilterItemWrapper } from "./styles";
import queryString from "query-string";
import { navigate, useLocation } from "@reach/router";

export function CategoryFilterItem({ title, id }) {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(",").filter(c => !!c) || [];
  const checked = collectionIds?.find(cid => cid === id);
  const searchTerm = qs.s;
  const sortByWhat = qs.sort_by;
  const onClick = () => {
    let navigateTo = "/all-products";

    let newIds = [];
    if (checked) {
      newIds = collectionIds
        .filter(cid => cid !== id)
        .map(cid => encodeURIComponent(cid));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cid => encodeURIComponent(cid));
    }
    if (newIds.length && !searchTerm && !sortByWhat) {
      navigate(`${navigateTo}?c=${newIds.join(",")}&page=1`);
    } else if (newIds.length && !!searchTerm && !!sortByWhat) {
      navigate(
        `${navigateTo}?&c=${newIds.join(",")}&s=${encodeURIComponent(
          searchTerm
        )}&sort_by=${sortByWhat}&page=1`
      );
    } else if (newIds.length && !!searchTerm && !sortByWhat) {
      navigate(
        `${navigateTo}?&c=${newIds.join(",")}&s=${encodeURIComponent(
          searchTerm
        )}&page=1`
      );
    } else if (newIds.length && !searchTerm && !!sortByWhat) {
      navigate(
        `${navigateTo}?&c=${newIds.join(",")}&sort_by=${sortByWhat}&page=1`
      );
    } else if (!newIds.length && !!searchTerm && !!sortByWhat) {
      navigate(
        `${navigateTo}?s=${encodeURIComponent(
          searchTerm
        )}&sort_by=${sortByWhat}&page=1`
      );
    } else if (!newIds.length && !!searchTerm && !sortByWhat) {
      navigate(`${navigateTo}?s=${encodeURIComponent(searchTerm)}&page=1`);
    } else if (!newIds.length && !searchTerm && !!sortByWhat) {
      navigate(`${navigateTo}?&sort_by=${sortByWhat}&page=1`);
    } else {
      navigate(`${navigateTo}`);
    }
  };
  return (
    <CategoryFilterItemWrapper onClick={onClick}>
      <Checkbox checked={checked} />
      <div checked={checked}>{title}</div>
    </CategoryFilterItemWrapper>
  );
}
