import React, { createContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

const pquery = graphql`
  fragment ProductTileFields on ShopifyProduct {
    handle
    storefrontId
    priceRangeV2 {
      minVariantPrice {
        amount
      }
    }
    variants {
      compareAtPrice
    }
  }
  {
    allShopifyProduct {
      edges {
        node {
          ...ProductTileFields
          description
          shopifyId
          storefrontId
          createdAt
          title
          variants {
            id
            storefrontId
            image {
              src
              gatsbyImageData
            }
          }
          # images {
          #   id
          #   src
          #   gatsbyImageData(placeholder: "BLURRED")
          # }
        }
      }
    }
    allShopifyCollection {
      edges {
        node {
          products {
            ...ProductTileFields
          }
          description
          title
          shopifyId
          storefrontId
          handle
          image {
            src
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyProduct, allShopifyCollection } = useStaticQuery(pquery);
  return (
    <ProductContext.Provider
      value={{
        products: allShopifyProduct.edges.map(({ node }) => node),
        collections: allShopifyCollection.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
