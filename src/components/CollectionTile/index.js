import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  CollectionTileWrapper,
  Title,
  Description,
  CollectionTileContent,
} from "./styles";

export function CollectionTile({ collection }) {
  return (
    <Link to={`/collection/${collection.handle}`}>
      <CollectionTileWrapper>
        <GatsbyImage
          image={collection.image.gatsbyImageData}
          alt={collection.title}
        />
        <CollectionTileContent>
          <Title>{collection.title}</Title>
          <Description>{collection.description}</Description>
        </CollectionTileContent>
      </CollectionTileWrapper>
    </Link>
  );
}
