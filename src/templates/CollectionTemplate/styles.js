import styled from "styled-components";

export const ButtonWrapper = styled.div`
  margin-bottom: 23px;
`;
export const CollectionText = styled.section`
  > p {
    color: #966da8;
    font-size: 1.25rem;
    font-family: "Lato", sans-serif;
    text-align: center;
    margin-bottom: 3rem;
  }
`;
export const PurchaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ff00f7;
  box-shadow: 10px 7px rgba(247, 0, 255, 0.5);
  margin-bottom: 50px;
  > div:first-child {
    display: flex;
    align-items: center;
    padding: 20px 20px 0px 20px;
    > p {
      font-weight: 900;
    }
  }
  > div:nth-child(2) {
    padding: 20px;
    > p {
      font-weight: 900;
      margin-bottom: 0.5rem;
    }
  }
`;
export const FloatingButtonWrapper = styled.div`
  width: 150px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 1;
`;
