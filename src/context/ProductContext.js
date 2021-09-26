import React, { createContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
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
          images {
            id
            src
            gatsbyImageData(placeholder: "BLURRED")
          }
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
            id
            gatsbyImageData(placeholder: "BLURRED", width: 1000)
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
  const { allShopifyProduct, allShopifyCollection } = useStaticQuery(query);
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
