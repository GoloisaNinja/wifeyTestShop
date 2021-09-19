import styled from "styled-components";

export const FiltersWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100vh;
  z-index: 6;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  visibility: hidden;
  overflow-y: auto;
  transform: translate3d(100%, 0, 0);
  transition: all 0.5s ease-in-out;
  @media (min-width: 500px) {
    width: 50%;
  }
  @media (min-width: 700px) {
    width: 30%;
  }
  &.show {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  > div:first-child {
    display: flex;
    justify-content: space-between;
    > svg {
      font-size: 30px;
      padding: 5px;
      color: #c800cf;
      cursor: pointer;
      border: 1px solid #c800cf;
      &:hover {
        background-color: #c800cf;
        color: #fff;
      }
    }
    > p:first-child {
      color: #c800cf;
      font-weight: 900;
      font-family: "Lato", sans-serif;
      text-transform: uppercase;
    }
  }
  > div:nth-child(2) {
    > a {
      font-family: "Lato", sans-serif;
      text-decoration: none;
      text-transform: uppercase;
      color: #c800cf;
      font-weight: bold;
    }
  }
`;
