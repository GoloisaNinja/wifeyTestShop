import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 75%;
  z-index: 1010;
  background-color: #ffbdf6;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: center;
  > div:first-child {
    margin: 0 auto;
    filter: drop-shadow(3px 5px 5px #ff00f7);
  }
  > h4 {
    font-family: "Lato", sans-serif;
    //color: #5826ad;
    color: #007982;
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
export const UnicornWrapper = styled.div`
  width: 100%;
  > img {
    max-width: 100px;
  }
`;
