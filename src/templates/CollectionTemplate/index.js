import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import {
  Layout,
  CollectionProductTemplate,
  GradientH1,
  GradientP,
  Button,
  CollectionModal,
} from "../../components";
import {
  ButtonWrapper,
  CollectionText,
  PurchaseWrapper,
  FloatingButtonWrapper,
} from "./styles";

export const query = graphql`
  query CollectionQuery($shopifyId: String) {
    shopifyCollection(shopifyId: { eq: $shopifyId }) {
      description
      title
      handle
      storefrontId
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
  const [readyToAdd, setReadyToAdd] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleVariantQueryStrings = (handle, variant) => {
    setVariantQueryStrings({
      ...variantQueryStrings,
      [handle]: encodeURIComponent(variant),
    });
  };
  const [collectionProductMap, setCollectionProductMap] = useState({});
  useEffect(() => {
    let initialMap = {};
    data.allShopifyProduct.edges.forEach(({ node }) => {
      initialMap[node.storefrontId] = {
        variantId: null,
        productTitle: null,
        variantTitle: null,
        quantity: null,
        confirmed: false,
      };
    });
    setCollectionProductMap(initialMap);
  }, [data.shopifyCollection]);

  useEffect(() => {
    let readyCheck = [];
    for (let key in collectionProductMap) {
      if (collectionProductMap[key].confirmed === true) {
        readyCheck.push(key);
      }
    }
    if (readyCheck.length === data.allShopifyProduct.edges.length) {
      setReadyToAdd(true);
    } else {
      setReadyToAdd(false);
    }
  }, [collectionProductMap]);

  const updateCollectionProductMap = ({
    storefrontId,
    variantId,
    productTitle,
    variantTitle,
    quantity,
    confirmed,
  }) => {
    setCollectionProductMap({
      ...collectionProductMap,
      [storefrontId]: {
        variantId,
        productTitle,
        variantTitle,
        quantity,
        confirmed,
      },
    });
  };
  const handleDismiss = () => {
    setShowModal(false);
    setVariantQueryStrings({});
    let resetMap = {};
    for (let key in collectionProductMap) {
      resetMap[key] = {
        variantId: null,
        productTitle: null,
        variantTitle: null,
        quantity: null,
        confirmed: false,
      };
    }
    setCollectionProductMap(resetMap);
    navigate(
      `/collection/${encodeURIComponent(data.shopifyCollection.handle)}`
    );
  };
  const handleModal = () => {
    let contentArray = [];
    for (let key in collectionProductMap) {
      contentArray.push(collectionProductMap[key]);
    }
    setModalContent(contentArray);
    setShowModal(true);
  };
  return (
    <Layout paddingValues={true}>
      <div style={{ position: "relative" }}>
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
        <PurchaseWrapper>
          <div>
            <GradientP font={`'Lato', sans-serif`} color={`#035efc, #ff00f7`}>
              Getting a new look should be easy. Our style expert has done the
              hard work for you. Just confirm each collection piece below and
              then add to bag to get an entire outfit in one click!
            </GradientP>
          </div>
          <div>
            <GradientP font={`'Lato', sans-serif`} color={`#ff00f7, #035efc`}>
              To purchase items individually click
            </GradientP>
            <Button
              onClick={e =>
                navigate(
                  `/all-products?c=${encodeURIComponent(
                    data.shopifyCollection.storefrontId
                  )}`
                )
              }
            >
              Leave Collection
            </Button>
          </div>
        </PurchaseWrapper>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <CollectionProductTemplate
            key={node.storefrontId}
            productShopifyId={node.shopifyId}
            productStorefrontId={node.storefrontId}
            images={node.images}
            handle={node.handle}
            handleVariantQueryStrings={handleVariantQueryStrings}
            variantQueryStrings={variantQueryStrings}
            updateCollectionProductMap={updateCollectionProductMap}
            confirmedStatus={collectionProductMap[node.storefrontId]?.confirmed}
          />
        ))}

        {showModal && (
          <CollectionModal
            dismiss={handleDismiss}
            collectionTitle={data.shopifyCollection.title}
            content={modalContent}
            exploding={true}
          />
        )}
        {readyToAdd && (
          <FloatingButtonWrapper>
            <Button
              inverse
              width={`100%`}
              disabled={!readyToAdd}
              onClick={handleModal}
            >
              Add to Bag
            </Button>
          </FloatingButtonWrapper>
        )}
      </div>
    </Layout>
  );
}
