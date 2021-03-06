import styled from "styled-components";

export const ProductTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ff00f7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 10px 7px rgba(247, 0, 255, 0.5);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.015);
  }
  > div {
    flex-grow: 1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;
export const ProductTileContentWrapper = styled.section`
  padding: 10px;
  > div:nth-child(3) {
    display: flex;
    align-items: center;
  }
`;
export const ProductTileTitle = styled.h4`
  font-weight: bold;
  font-family: "Abril Fatface", cursive;
  color: #c800cf;
  text-transform: uppercase;
`;
export const ProductTileDescription = styled.p`
  color: #966da8;
  margin-bottom: 10px;
  font-family: "Lato", sans-serif;
`;
export const ProductTilePrice = styled.p`
  font-style: italic;
  font-family: "Abril Fatface", cursive;
  color: #c800cf;
  margin-bottom: 30px;
  letter-spacing: 1px;
`;
export const ProductTileCompareAtPrice = styled.p`
  font-style: italic;
  text-decoration: line-through;
  font-family: "Abril Fatface", cursive;
  color: #c800cf;
  margin-bottom: 30px;
  letter-spacing: 1px;
  padding-left: 10px;
`;
