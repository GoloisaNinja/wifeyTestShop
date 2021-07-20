import React, { useContext } from "react";
import styled from "styled-components";
import ProductContext from "../context/ProductContext";
import { Layout, ProductGrid, GradientH3 } from "../components";

const AllProductsPage = () => {
  const ProductPageWrapper = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 25px;
    > div:first-child {
      border-bottom: 2px solid #f700ff;
      margin-bottom: 35px;
    }
  `;
  const { products } = useContext(ProductContext);
  return (
    <Layout>
      <ProductPageWrapper>
        <div>
          <GradientH3
            style={{ marginTop: "0" }}
            font={"'Abril Fatface', cursive"}
            color={"#7000a1, #f700ff"}
          >
            Our Product Line is eclectic, trendy, and sexy. Just like you!
          </GradientH3>
        </div>

        <ProductGrid products={products} />
      </ProductPageWrapper>
    </Layout>
  );
};
export default AllProductsPage;
