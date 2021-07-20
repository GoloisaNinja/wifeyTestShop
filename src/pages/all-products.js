import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { LayoutPadding, ProductGrid, GradientH3 } from "../components";

const AllProductsPage = () => {
  const { products } = useContext(ProductContext);
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

      <ProductGrid products={products} />
    </LayoutPadding>
  );
};
export default AllProductsPage;
