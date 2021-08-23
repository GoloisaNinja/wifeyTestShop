import styled from "styled-components";

export const ShoppingBagWrapper = styled.div`
  display: flex;
  position: relative;
  > a:first-child {
    > svg {
      font-size: 35px;
      color: #ff00f7;
      margin-right: 10px;
      cursor: pointer;
      margin-bottom: 5px;
    }
    > div:last-child {
      position: absolute;
      top: -5px;
      right: 1px;
      border-radius: 50%;
      padding: 5px 8px;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: bold;
      font-family: "Lato", sans-serif;
      background-color: #cc00c5;
      color: #fff;
    }
  }
`;
