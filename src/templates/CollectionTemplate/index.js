import React, { useState } from "react";
import { graphql, navigate } from "gatsby";
import {
  Layout,
  CollectionProductTemplate,
  GradientH1,
  Button,
} from "../../components";
import { ButtonWrapper, CollectionText } from "./styles";

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
  const [variantQueryStrings, setVariantQueryStrings] = useState({});
  const handleVariantQueryStrings = (handle, variant) => {
    setVariantQueryStrings({
      ...variantQueryStrings,
      [handle]: encodeURIComponent(variant),
    });
  };

  return (
    <Layout paddingValues={true}>
      <ButtonWrapper>
        <Button onClick={() => navigate(`/all-collections`)}>
          back to collections
        </Button>
      </ButtonWrapper>
      <GradientH1
        style={{ textAlign: "center", marginBottom: "8px" }}
        font={`'Abril Fatface', cursive`}
        color={`#ff00f7, #035efc`}
      >
        {data.shopifyCollection.title}
      </GradientH1>
      <CollectionText>
        <p>{data.shopifyCollection.description}</p>
      </CollectionText>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <CollectionProductTemplate
          key={node.storefrontId}
          productShopifyId={node.shopifyId}
          productStorefrontId={node.storefrontId}
          images={node.images}
          handle={node.handle}
          handleVariantQueryStrings={handleVariantQueryStrings}
          variantQueryStrings={variantQueryStrings}
        />
      ))}
    </Layout>
  );
}
