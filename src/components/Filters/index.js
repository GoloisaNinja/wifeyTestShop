import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import { CategoryFilterItem } from "./CategoryFilterItem";
import { OverlayWrapper } from "../Overlay";
import { Input } from "../Input";
import { FiltersWrapper } from "./styles";
import ProductContext from "../../context/ProductContext";

export function Filters({ toggleFilters }) {
  const { collections } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleToggle = () => {
    toggleFilters();
  };
  return (
    <>
      <FiltersWrapper id="filters">
        <div>
          <p>Filter Categories</p>
          <FaTimes onClick={handleToggle} />
        </div>
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Input
            style={{ marginBottom: "15px" }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.currentTarget.value)}
            placeholder="Search categories"
          />
          <Link
            to={`/all-products`}
            alt={`Removes filters and returns all products`}
          >
            Clear Filters
          </Link>
        </div>
        {collections
          .sort(function (a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1;
            }
          })
          .map(
            collection =>
              collection.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                -1 && (
                <CategoryFilterItem
                  title={collection.title}
                  id={collection.storefrontId}
                  key={collection.storefrontId}
                />
              )
          )}
      </FiltersWrapper>
      <OverlayWrapper id="overlay" zvalue={"5"}></OverlayWrapper>
    </>
  );
}
