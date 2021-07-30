import React, { useContext } from "react";
import { CategoryFilterItem } from "./CategoryFilterItem";
import { FiltersWrapper } from "./styles";
import ProductContext from "../../context/ProductContext";

export function Filters() {
  const { collections } = useContext(ProductContext);

  return (
    <FiltersWrapper>
      <p>Categories</p>
      {collections.map(collection => (
        <CategoryFilterItem
          title={collection.title}
          id={collection.storefrontId}
          key={collection.storefrontId}
        />
      ))}
    </FiltersWrapper>
  );
}
