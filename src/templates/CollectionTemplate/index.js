import React from "react";
import { graphql } from "gatsby";
import {
  LayoutPadding,
  CollectionProductTemplate,
  GradientH1,
} from "../../components";

export const query = graphql`
  query CollectionQuery($shopifyId: String) {
    shopifyCollection(shopifyId: { eq: $shopifyId }) {
      description
      title
    }
    allShopifyProduct(
      filter: { collections: { elemMatch: { shopifyId: { eq: $shopifyId } } } }
    ) {
      edges {
        node {
          shopifyId
          storefrontId
          description
          title
          handle
          images {
            id
            src
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default function CollectionTemplate({ data }) {
  return (
    <LayoutPadding>
      <GradientH1
        style={{ textAlign: "center", marginBottom: "3rem" }}
        font={`'Abril Fatface', cursive`}
        color={`#ff00f7, #035efc`}
      >
        {data.shopifyCollection.title}
      </GradientH1>

      {data.allShopifyProduct.edges.map(({ node }) => (
        <CollectionProductTemplate
          key={node.storefrontId}
          productShopifyId={node.shopifyId}
          productStorefrontId={node.storefrontId}
          images={node.images}
          handle={node.handle}
        />
      ))}
    </LayoutPadding>
  );
}
