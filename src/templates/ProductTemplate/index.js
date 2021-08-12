import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { navigate, useLocation } from "@reach/router";
import queryString from "query-string";
import { graphql } from "gatsby";
import {
  Layout,
  ImageGallery,
  Button,
  GradientH2,
  ProductQuantityAdder,
  Modal,
} from "../../components";
import { ProductText, Grid, SelectWrapper, Price } from "./styles";

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      description
      shopifyId
      id
      storefrontId
      title
      images {
        id
        src
        gatsbyImageData(placeholder: "BLURRED")
      }
      variants {
        id
        storefrontId
      }
    }
  }
`;

export default function ProductTemplate({ data }) {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const { search } = useLocation();

  const variantId = queryString.parse(search).variant;

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(
      variant => variant.id === e.target.value
    );
    setSelectedVariant(newVariant);
    // navigate(
    //   `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
    //   { replace: true }
    // );
    window.history.replaceState(
      "",
      "",
      `?variant=${encodeURIComponent(newVariant.id)}`
    );
  };

  const handleModal = ({ variantId, quantity, error }) => {
    if (error) {
      const content = {
        title: "Whoopsie",
        product: "Quantity should be a number",
        addedVariant: "try again",
        quantity: "error",
        confetti: false,
      };
      setModalContent(content);
      setShowModal(true);
    } else {
      const addedVariant = product?.variants.find(
        variant => variant.id === variantId
      );
      const content = {
        title: "Added to bag!",
        product: data.shopifyProduct.title,
        addedVariant: addedVariant.title,
        quantity,
        confetti: true,
      };
      setModalContent(content);
      setShowModal(true);
    }
  };

  const handleDismiss = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const idResult = async () => {
      try {
        const result = await getProductById(data.shopifyProduct.storefrontId);
        setProduct(result);
        setSelectedVariant(
          result.variants.find(({ id }) => id === variantId) ||
            result.variants[0]
        );
      } catch (error) {
        console.log(error);
      }
    };
    idResult();
  }, [
    //getProductById,
    setProduct,
    setSelectedVariant,
    data.shopifyProduct.storefrontId,
    variantId,
  ]);

  return (
    <Layout paddingValues={true}>
      <Button onClick={() => navigate(-1)}>GO BACK</Button>
      <Grid>
        <div>
          <ProductText>
            <GradientH2
              font={`'Abril Fatface', cursive`}
              color={`#ff00f7, #035efc`}
            >
              {data.shopifyProduct.title}
            </GradientH2>
            <p>{data.shopifyProduct.description}</p>
          </ProductText>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product?.variants.length > 1 && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  <select
                    value={selectedVariant.id}
                    onChange={handleVariantChange}
                  >
                    {product?.variants.map(variant => (
                      <option key={variant.id} value={variant.id}>
                        {variant.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                  <Price>$ {selectedVariant.price} USD</Price>
                  <ProductQuantityAdder
                    variantId={selectedVariant.id}
                    available={selectedVariant.available}
                    handleModal={handleModal}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            selectedImageVariantId={selectedVariant?.id}
            selectedImageVariantIdSrc={selectedVariant?.image.src}
            images={data.shopifyProduct.images}
          />
        </div>
      </Grid>
      {showModal && <Modal dismiss={handleDismiss} content={modalContent} />}
    </Layout>
  );
}
