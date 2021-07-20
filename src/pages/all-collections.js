import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { LayoutNoPadding } from "../components/LayoutNoPadding";
import { CollectionTile } from "../components/CollectionTile";

const AllCollectionPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <LayoutNoPadding>
      {collections.map(collection => (
        <CollectionTile key={collection.shopifyId} collection={collection} />
      ))}
    </LayoutNoPadding>
  );
};
export default AllCollectionPage;
