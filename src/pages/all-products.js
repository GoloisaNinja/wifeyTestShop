import React, { useContext, useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation, navigate } from "@reach/router";
import ProductContext from "../context/ProductContext";
import styled from "styled-components";
import {
  Layout,
  ProductGrid,
  GradientH4,
  Filters,
  Selectors,
  PaginationButtons,
  ScrollToTopButton,
} from "../components";

const NoMatchWrapper = styled.div`
  font-family: "Lato", sans-serif;
  color: #9905f5;
  > h3 {
    margin-top: 0;
    margin-bottom: 25px;
  }
`;
const ScrollElementDiv = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 1200px;
  left: 0;
`;

const ScrollRemoveElementDiv = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 250px;
  left: 0;
`;

export default function AllProductsPage() {
  const { products, collections } = useContext(ProductContext);
  const collectionProductMap = {};
  const { search, origin, pathname } = useLocation();
  const qs = queryString.parse(search);
  const selectedCollectionIds = qs.c?.split(",").filter(c => !!c) || [];
  const selectedCollectionIdsMap = {};
  const searchTerm = qs.s;
  const sortByWhat = qs.sort_by;
  const queryPage = parseInt(qs.page) || 1;
  const [page, setPage] = useState(queryPage);
  const [clicked, setClicked] = useState(true);
  // Pagination reqs
  const limit = 15;
  let skip = (page - 1) * limit;
  useEffect(() => {
    setPage(queryPage);
  }, [queryPage]);

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

  const filterBySearchTerm = product => {
    if (searchTerm) {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    }
    return true;
  };

  let filteredProducts = products
    .filter(filterByCategory)
    .filter(filterBySearchTerm);

  if (sortByWhat) {
    if (sortByWhat === "alphaAsc") {
      filteredProducts = filteredProducts.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (sortByWhat === "alphaDesc") {
      filteredProducts = filteredProducts.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortByWhat === "priceLow") {
      filteredProducts = filteredProducts.sort(function (a, b) {
        if (
          a.priceRangeV2.minVariantPrice.amount <
          b.priceRangeV2.minVariantPrice.amount
        ) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (sortByWhat === "priceHigh") {
      filteredProducts = filteredProducts.sort(function (a, b) {
        if (
          a.priceRangeV2.minVariantPrice.amount <
          b.priceRangeV2.minVariantPrice.amount
        ) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortByWhat === "prodNew") {
      filteredProducts = filteredProducts.sort(function (a, b) {
        if (a.createdAt < b.createdAt) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      filteredProducts = filteredProducts.sort(function (a, b) {
        if (a.createdAt < b.createdAt) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
  // Pagaination pages
  const totalPages = Math.ceil(filteredProducts.length / limit);
  const paginatedProducts = filteredProducts.slice(skip, skip + limit);
  // Pagination functions
  const handlePageForward = () => {
    let cIds = [];
    if (selectedCollectionIds.length > 0) {
      selectedCollectionIds.forEach(id => {
        cIds.push(encodeURIComponent(id));
      });
    }
    setPage(page + 1);
    if (selectedCollectionIds.length > 0 && !!searchTerm && !!sortByWhat) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(
          ","
        )}&s=${searchTerm}&sort_by=${sortByWhat}&page=${page + 1}`
      );
    } else if (
      selectedCollectionIds.length > 0 &&
      !searchTerm &&
      !!sortByWhat
    ) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(",")}&sort_by=${sortByWhat}&page=${
          page + 1
        }`
      );
    } else if (selectedCollectionIds.length > 0 && !searchTerm && !sortByWhat) {
      navigate(`${origin}${pathname}?c=${cIds.join(",")}&page=${page + 1}`);
    } else if (
      selectedCollectionIds.length > 0 &&
      !!searchTerm &&
      !sortByWhat
    ) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(",")}&s=${searchTerm}&page=${
          page + 1
        }`
      );
    } else if (
      !selectedCollectionIds.length > 0 &&
      !!searchTerm &&
      !!sortByWhat
    ) {
      navigate(
        `${origin}${pathname}?s=${searchTerm}&sort_by=${sortByWhat}&page=${
          page + 1
        }`
      );
    } else if (
      !selectedCollectionIds.length > 0 &&
      !!searchTerm &&
      !sortByWhat
    ) {
      navigate(`${origin}${pathname}?s=${searchTerm}&page=${page + 1}`);
    } else if (
      !selectedCollectionIds.length > 0 &&
      !searchTerm &&
      !!sortByWhat
    ) {
      navigate(`${origin}${pathname}?sort_by=${sortByWhat}&page=${page + 1}`);
    } else {
      navigate(`${origin}${pathname}?page=${page + 1}`);
    }
  };
  const handlePageBack = () => {
    let cIds = [];
    if (selectedCollectionIds.length > 0) {
      selectedCollectionIds.forEach(id => {
        cIds.push(encodeURIComponent(id));
      });
    }
    setPage(page + 1);
    if (selectedCollectionIds.length > 0 && !!searchTerm && !!sortByWhat) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(
          ","
        )}&s=${searchTerm}&sort_by=${sortByWhat}&page=${page - 1}`
      );
    } else if (
      selectedCollectionIds.length > 0 &&
      !searchTerm &&
      !!sortByWhat
    ) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(",")}&sort_by=${sortByWhat}&page=${
          page - 1
        }`
      );
    } else if (selectedCollectionIds.length > 0 && !searchTerm && !sortByWhat) {
      navigate(`${origin}${pathname}?c=${cIds.join(",")}&page=${page - 1}`);
    } else if (
      selectedCollectionIds.length > 0 &&
      !!searchTerm &&
      !sortByWhat
    ) {
      navigate(
        `${origin}${pathname}?c=${cIds.join(",")}&s=${searchTerm}&page=${
          page - 1
        }`
      );
    } else if (
      !selectedCollectionIds.length > 0 &&
      !!searchTerm &&
      !!sortByWhat
    ) {
      navigate(
        `${origin}${pathname}?s=${searchTerm}&sort_by=${sortByWhat}&page=${
          page - 1
        }`
      );
    } else if (
      !selectedCollectionIds.length > 0 &&
      !!searchTerm &&
      !sortByWhat
    ) {
      navigate(`${origin}${pathname}?s=${searchTerm}&page=${page - 1}`);
    } else if (
      !selectedCollectionIds.length > 0 &&
      !searchTerm &&
      !!sortByWhat
    ) {
      navigate(`${origin}${pathname}?sort_by=${sortByWhat}&page=${page - 1}`);
    } else {
      navigate(`${origin}${pathname}?page=${page - 1}`);
    }
  };
  const toggleFilters = () => {
    setClicked(!clicked);
    const myHtml = document.querySelector("html");
    const myBody = document.querySelector("body");
    if (clicked) {
      myHtml.classList.add("menuIsOpen");
      myBody.classList.add("menuIsOpen");
    } else {
      myHtml.classList.remove("menuIsOpen");
      myBody.classList.remove("menuIsOpen");
    }
    const filters = document.getElementById("filters");
    const overlay = document.getElementById("overlay");
    filters.classList.toggle("show");
    overlay.classList.toggle("show");
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollTargetAdd = document.getElementById("scrollTargetAdd");
      const scrollTargetRemove = document.getElementById("scrollTargetRemove");
      const myScrollBtn = document.getElementById("myScrollBtn");

      const returnCallback = (elem, methodType, classAsString) => {
        return function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (methodType === "add") {
                elem.classList.add(classAsString);
              } else {
                elem.classList.remove(classAsString);
              }
            }
          });
        };
      };

      const createObserverFunction = (elem, callback, options) => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(elem);
        return observer;
      };
      createObserverFunction(
        scrollTargetAdd,
        returnCallback(myScrollBtn, "add", "showBtn")
      );
      createObserverFunction(
        scrollTargetRemove,
        returnCallback(myScrollBtn, "remove", "showBtn")
      );
    }
  }, []);

  return (
    <Layout paddingValues={true}>
      <ScrollElementDiv id="scrollTargetAdd"></ScrollElementDiv>
      <ScrollRemoveElementDiv id="scrollTargetRemove"></ScrollRemoveElementDiv>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          marginBottom: "5px",
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
      <Selectors
        numberOfFilters={Object.keys(selectedCollectionIdsMap).length}
        toggleFilters={toggleFilters}
      />
      <Filters toggleFilters={toggleFilters} />
      {!filteredProducts.length && (
        <NoMatchWrapper>
          <h3>
            Oops...no matches for &nbsp; <strong>'{searchTerm}'</strong>
          </h3>
        </NoMatchWrapper>
      )}
      {!!filteredProducts.length && !!searchTerm && (
        <NoMatchWrapper>
          <h3>
            Searching for <strong>'{searchTerm}'</strong>
          </h3>
        </NoMatchWrapper>
      )}
      {!!filteredProducts.length && (
        <div>
          <ProductGrid products={paginatedProducts} />
          <PaginationButtons
            page={page}
            totalPages={totalPages}
            handlePageForward={handlePageForward}
            handlePageBack={handlePageBack}
          />
        </div>
      )}
      <ScrollToTopButton />
    </Layout>
  );
}
