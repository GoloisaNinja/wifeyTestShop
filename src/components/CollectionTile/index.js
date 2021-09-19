import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import {
  CollectionTileWrapper,
  Title,
  Description,
  CollectionTileContent,
} from "./styles";

export function CollectionTile({ collection }) {
  return (
    <CollectionTileWrapper>
      <GatsbyImage
        image={collection.image.gatsbyImageData}
        alt={collection.title}
      />
      <CollectionTileContent>
        <Title>{collection.title}</Title>
        <Description>{collection.description}</Description>
        <div>
          <Button
            width={`100%`}
            onClick={e => navigate(`/collection/${collection.handle}`)}
          >
            Shop Collection
          </Button>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
}
