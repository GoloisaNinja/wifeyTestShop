import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Layout, ProductGrid } from "../components";

const AllProductsPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <Layout>
      <h1>All Products</h1>
      <ProductGrid products={products} />
    </Layout>
  );
};
export default AllProductsPage;
