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
  GradientH4,
  ScrollToTopButton,
} from "../../components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
import {
  ScrollElementDiv,
  ScrollRemoveElementDiv,
  ProductText,
  Grid,
  SelectWrapper,
  Price,
  SocialWrapper,
  SocialHeader,
} from "./styles";

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
  const { search, origin, pathname } = useLocation();

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

  const handleModal = () => {
    const content = {
      message: "was added to bag!",
      product: data.shopifyProduct.title,
    };
    setModalContent(content);
    setShowModal(true);
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
    getProductById,
    setProduct,
    setSelectedVariant,
    data.shopifyProduct.storefrontId,
    variantId,
  ]);

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
      <SocialHeader>
        <GradientH4 font={`"Lato", sans-serif`} color={`#c800cf, #035efc`}>
          You should share this!
        </GradientH4>
      </SocialHeader>
      <SocialWrapper>
        <FacebookShareButton
          quote={"OMG 👀 what I found on Neon Unicorn!"}
          url={`${origin}${pathname}`}
          hashtag={"neonunicorn"}
        >
          <FacebookIcon size={42} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          title={"OMG 👀 what I found on Neon Unicorn!"}
          url={`${origin}${pathname}`}
          via={"Neon Unicorn"}
          hashtags={["neonunicorn", "pretties"]}
        >
          <TwitterIcon size={42} round={true} />
        </TwitterShareButton>
        <PinterestShareButton
          description={"OMG 👀 what I found on Neon Unicorn!"}
          url={`${origin}${pathname}`}
          media={selectedVariant?.image.src}
        >
          <PinterestIcon size={42} round={true} />
        </PinterestShareButton>
      </SocialWrapper>
      {showModal && <Modal dismiss={handleDismiss} content={modalContent} />}
      <ScrollToTopButton />
    </Layout>
  );
}
