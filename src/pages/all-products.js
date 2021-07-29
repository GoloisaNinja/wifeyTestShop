import React, { useContext } from "react";
import queryString from "query-string";
import { useLocation } from "@reach/router";
import ProductContext from "../context/ProductContext";
import { LayoutPadding, ProductGrid, GradientH3 } from "../components";

const AllProductsPage = () => {
  const { products, collections } = useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(",").filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.storefrontId] = {};

      collection.products.forEach(product => {
        collectionProductMap[collection.storefrontId][
          product.storefrontId
        ] = true;
      });
    });
  }

  const filterByCategory = product => {
    if (Object.keys(selectedCollectionIdsMap).length) {
      for (let key in selectedCollectionIdsMap) {
        if (collectionProductMap[key]?.[product.storefrontId]) {
          return true;
        }
      }
      return false;
    }
    return true;
  };

  const filteredProducts = products.filter(filterByCategory);

  return (
    <LayoutPadding>
      <div style={{ marginBottom: "35px", borderBottom: "2px solid #7000a1" }}>
        <GradientH3
          style={{ marginTop: "0" }}
          font={"'Abril Fatface', cursive"}
          color={"#7000a1, #f700ff"}
        >
          Neon Unicorn's unique product line is eclectic, trendy, and sexy. Just
          like you!
        </GradientH3>
      </div>

      <ProductGrid products={filteredProducts} />
    </LayoutPadding>
  );
};
export default AllProductsPage;
