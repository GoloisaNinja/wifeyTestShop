import React, { useContext } from "react";
import queryString from "query-string";
import { useLocation } from "@reach/router";
import ProductContext from "../context/ProductContext";
import {
  LayoutPadding,
  ProductGrid,
  GradientH4,
  Filters,
  Button,
} from "../components";

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
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          marginBottom: "35px",
        }}
      >
        <span
          style={{
            display: "flex",
            background: "#ff00f7",
            borderRadius: "50px",
            padding: "5px 10px",
            marginRight: "5px",
            color: "#fff",
            fontSize: "1.15rem",
            fontWeight: "bold",
            fontFamily: `'Lato', sans-serif`,
          }}
        >
          {filteredProducts.length}
        </span>{" "}
        <GradientH4
          style={{ marginTop: "0", marginBottom: "0", fontWeight: "bold" }}
          font={"'Lato', sans-serif"}
          color={"#f700ff, #7000a1"}
        >
          products
        </GradientH4>
      </div>

      <div
        style={{
          display: "grid",
          gridGap: "20px",
          marginTop: "20px",
          gridTemplateColumns: "1fr 3fr",
        }}
      >
        <Filters />
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Heckin Bamboozled! No matches for</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              Here are some tips:
              <br />
              <br />
              <br />
              <ul>
                <li>Don't be weird</li>
                <li>Search for real things</li>
                <li>We don't sell Graphics Cards</li>
                <li>Unplug the search bar and reboot</li>
                <li>Check your spelling</li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <div>
            <ProductGrid products={filteredProducts} />
          </div>
        )}
      </div>
    </LayoutPadding>
  );
};
export default AllProductsPage;
