import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Layout } from "../components/Layout";
import { CollectionTile } from "../components/CollectionTile";

const AllCollectionPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      {collections.map(collection => (
        <CollectionTile key={collection.shopifyId} collection={collection} />
      ))}
    </Layout>
  );
};
export default AllCollectionPage;
