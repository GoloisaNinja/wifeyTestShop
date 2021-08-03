import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Layout } from "../components/Layout";
import { CollectionTile } from "../components/CollectionTile";

const AllCollectionPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      {collections.map(
        collection =>
          collection.title.slice(0, 4) === "Luci" && (
            <CollectionTile
              key={collection.storefrontId}
              collection={collection}
            />
          )
      )}
    </Layout>
  );
};
export default AllCollectionPage;
