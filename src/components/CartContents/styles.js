import styled from "styled-components";

export const CartItem = styled.div`
  border-bottom: 1px solid #c800cf;
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 40px;
  > div {
    padding: 8px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: "Lato", sans-serif;
    color: #035efc;
    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      > div:first-child {
        font-weight: bold;
        @media (min-width: 500px) {
          font-size: 18px;
        }
      }
      > div:nth-child(2) {
        color: #9f65a1;
        margin-top: 4px;
        font-size: 12px;
        @media (min-width: 500px) {
          font-size: 14px;
        }
      }
      > img:nth-child(3) {
        margin-top: 5px;
        width: 50px;
      }
      > div:last-child {
        margin-top: 5px;
        font-size: 12px;
        @media (min-width: 500px) {
          font-size: 14px;
        }
      }
    }
  }
  > div:nth-child(2) {
    font-size: 15px;
    font-weight: bold;
  }
  > div:nth-child(4) {
    font-weight: bold;
  }
`;
export const CartItemImageWrapper = styled.div`
  margin-top: 5px;
  width: 75px;
`;
export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr 40px;
  border-bottom: 1px solid #c800cf;
  font-family: "Abril Fatface", cursive;
  color: #c800cf;
  > div {
    padding: 8px;
  }
`;

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 40px;
  font-family: "Lato", sans-serif;
  > div {
    padding: 8px;
    color: #035efc;
    font-weight: bold;
    &:first-child {
      font-family: "Abril Fatface", cursive;
      color: #c800cf;
      text-align: right;
    }
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-gap: 20px;
  margin-top: 50px;
  > div:last-child {
    //text-align: right;
  }
`;
export const ShopifyNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  border: 1px solid #ff00f7;
  box-shadow: 10px 7px rgba(247, 0, 255, 0.5);
  padding: 25px;
  margin-bottom: 50px;
`;
export const UnicornWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    max-width: 320px;
  }
`;
