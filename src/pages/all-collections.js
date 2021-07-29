import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { LayoutNoPadding } from "../components/LayoutNoPadding";
import { CollectionTile } from "../components/CollectionTile";

const AllCollectionPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <LayoutNoPadding>
      {collections.map(
        collection =>
          collection.title.slice(0, 4) === "Luci" && (
            <CollectionTile
              key={collection.storefrontId}
              collection={collection}
            />
          )
      )}
    </LayoutNoPadding>
  );
};
export default AllCollectionPage;
