import styled from "styled-components";

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 75%;
  height: 100vh;
  z-index: 2;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  visibility: hidden;
  transform: translate3d(-100%, 0, 0);
  transition: all 0.5s ease-in-out;
  @media (min-width: 500px) {
    width: 50%;
  }
  @media (min-width: 700px) {
    width: 35%;
  }
  &.show {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  > div:first-child {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    > p:first-child {
      color: #c800cf;
      font-weight: 900;
      font-family: "Lato", sans-serif;
      text-transform: uppercase;
    }
  }
`;
