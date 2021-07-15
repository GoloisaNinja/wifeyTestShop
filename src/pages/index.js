import * as React from "react";
import { Layout } from "../components";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <h1>My Shop</h1>
      <p>Welcome to my shopify shop, where you can browse my wares.</p>
      <br />
      <Link to="/all-products">Products</Link>
      <br />
      <Link to="/all-collections">Collections</Link>
    </Layout>
  );
};

export default IndexPage;
