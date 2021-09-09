import styled, { css } from "styled-components";

function fadeAnimation() {
  let styles = "";
  for (let i = 1; i < 6; i++) {
    let interval = 1;
    interval *= i;
    styles += `&.fade:nth-child(${i}) {
      transition-delay: ${interval}s;
    }`;
  }
  return css`
    ${styles}
  `;
}

export const AboutWhyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  > div:first-child {
    text-align: center;
    margin-bottom: 25px;
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    @media (min-width: 810px) {
      flex-direction: row;
    }
  }
`;
export const BlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 810px) {
    width: 70%;
  }
  > div:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const BlockContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(45deg, #00bac7, #c800cf, #ff00f7);
  color: #fff;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 20px;
  opacity: 0;
  transition: opacity 1s ease-out;
  ${fadeAnimation}
  &.fade {
    opacity: 1;
  }
  @media (min-width: 475px) {
    justify-content: center;
    font-size: 24px;
  }
  @media (min-width: 809px) {
    justify-content: flex-start;
    font-size: 16px;
  }
  > svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;
