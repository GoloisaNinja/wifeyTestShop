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
  overflow-y: auto;
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
    flex-direction: column;
    margin-top: 100px;
    > div {
      width: 100%;
      margin: 0 auto;
      filter: drop-shadow(3px 5px 5px #ff00f7);
    }
    > p {
      color: #035efc;
      font-size: 20px;
      font-weight: 900;
      font-family: "Lato", sans-serif;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      padding-bottom: 5px;
      margin-top: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #ff00f7;
    }
  }
`;
export const NavButton = styled.button`
  background: none;
  border: none;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #c800cf;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: left;
  cursor: pointer;
  > svg {
    vertical-align: middle;
    margin-bottom: 5px;
    margin-left: 5px;
    color: #ff00f7;
  }
`;