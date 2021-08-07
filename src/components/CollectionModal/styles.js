import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 75%;
  z-index: 1010;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  > h4 {
    font-family: "Lato", sans-serif;
    font-weight: bold;
    color: #5826ad;
  }
  > div:first-child {
    margin: 0 auto;
    filter: drop-shadow(3px 5px 5px #ff00f7);
  }
`;
export const ProductDetailsWrapper = styled.div`
  > h5 {
    margin: 0;
    color: #ad26ab;
    font-family: "Abril Fatface", cursive;
    font-weight: bold;
    text-transform: uppercase;
  }
  > h6 {
    font-weight: bold;
    font-family: "Lato", sans-serif;
    color: #30818a;
    font-size: 14px;
    text-transform: uppercase;
  }
`;

export const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  opacity: 80%;
`;
