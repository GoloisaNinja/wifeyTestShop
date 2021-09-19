import React from "react";
import { CollectionTile } from "../CollectionTile";
import { CollectionGridWrapper } from "./styles";

export function CollectionGrid({ collections }) {
  return (
    <CollectionGridWrapper>
      {collections.map(
        collection =>
          collection.title.slice(0, 4) === "Luci" && (
            <CollectionTile
              key={collection.shopifyId}
              collection={collection}
            />
          )
      )}
    </CollectionGridWrapper>
  );
}
