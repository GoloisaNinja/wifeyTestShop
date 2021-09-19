import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import { graphql, navigate } from "gatsby";
import {
  Layout,
  CollectionProductTemplate,
  GradientH1,
  GradientP,
  Button,
  Modal,
  ScrollToTopButton,
} from "../../components";
import {
  ScrollElementDiv,
  ScrollRemoveElementDiv,
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
  const { updateLineItem } = useContext(CartContext);
  const [variantQueryStrings, setVariantQueryStrings] = useState({});
  const [readyToAdd, setReadyToAdd] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);

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
    // navigate(
    //   `/collection/${encodeURIComponent(data.shopifyCollection.handle)}`
    // );
  };

  const handleModal = async () => {
    setAddBtnDisabled(true);
    let contentArray = [];
    for (let key in collectionProductMap) {
      contentArray.push(collectionProductMap[key]);
    }
    setModalContent({
      message: "was added to cart!",
      product: data.shopifyCollection.title,
      confetti: true,
    });
    await updateLineItem(contentArray);
    setShowModal(true);
    setAddBtnDisabled(false);
  };
  useEffect(() => {
    if (typeof window !== undefined) {
      const scrollTargetAdd = document.getElementById("scrollTargetAdd");
      const scrollTargetRemove = document.getElementById("scrollTargetRemove");
      const myScrollBtn = document.getElementById("myScrollBtn");

      const returnCallback = (elem, methodType, classAsString) => {
        return function (entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (methodType === "add") {
                elem.classList.add(classAsString);
              } else {
                elem.classList.remove(classAsString);
              }
            }
          });
        };
      };

      const createObserverFunction = (elem, callback, options) => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(elem);
        return observer;
      };
      createObserverFunction(
        scrollTargetAdd,
        returnCallback(myScrollBtn, "add", "showBtn")
      );
      createObserverFunction(
        scrollTargetRemove,
        returnCallback(myScrollBtn, "remove", "showBtn")
      );
    }
  }, []);
  return (
    <Layout paddingValues={true}>
      <ScrollElementDiv id="scrollTargetAdd"></ScrollElementDiv>
      <ScrollRemoveElementDiv id="scrollTargetRemove"></ScrollRemoveElementDiv>
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

        {showModal && <Modal dismiss={handleDismiss} content={modalContent} />}
        {readyToAdd && (
          <FloatingButtonWrapper>
            <Button
              id="addToCartBtn"
              inverse
              width={"150px"}
              disabled={addBtnDisabled}
              onClick={handleModal}
            >
              Add to Bag
            </Button>
          </FloatingButtonWrapper>
        )}
      </div>
      <ScrollToTopButton zNumber={2} />
    </Layout>
  );
}
