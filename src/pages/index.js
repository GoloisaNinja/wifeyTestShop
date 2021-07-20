import * as React from "react";
import { Layout, HeroCollectionTile, HeroProductTile } from "../components";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Link to="/all-collections">
        <HeroCollectionTile />
      </Link>
      <Link to="/all-products">
        <HeroProductTile />
      </Link>
    </Layout>
  );
};

export default IndexPage;
