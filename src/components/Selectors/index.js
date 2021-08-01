import React from "react";
import { Button } from "../Button";
import { SelectorsWrapper } from "./styles";

export function Selectors({ numberOfFilters, toggleFilters }) {
  const handleToggle = () => {
    toggleFilters();
  };
  return (
    <SelectorsWrapper>
      <Button
        width={"100%"}
        onClick={handleToggle}
      >{`Filters (${numberOfFilters})`}</Button>
      <Button width={"100%"}>Sort</Button>
    </SelectorsWrapper>
  );
}
