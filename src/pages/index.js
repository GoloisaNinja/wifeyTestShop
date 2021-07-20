import * as React from "react";
import {
  LayoutNoPadding,
  HeroCollectionTile,
  HeroProductTile,
} from "../components";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <LayoutNoPadding>
      <Link to="/all-collections">
        <HeroCollectionTile />
      </Link>
      <Link to="/all-products">
        <HeroProductTile />
      </Link>
    </LayoutNoPadding>
  );
};

export default IndexPage;
