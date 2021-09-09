import styled, { css } from "styled-components";

function buttonAnimation() {
  let styles = "";
  for (let i = 1; i < 6; i++) {
    let interval = 0.4;
    interval *= i;
    styles += `&.animate:nth-child(${i}) {
      transition-delay: ${interval}s;
    }`;
  }
  return css`
    ${styles}
  `;
}

export const AboutHeroWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  > header {
    display: flex;
    flex-direction: column;
    > button {
      transform: translate3d(-600px, 0, 0);
      transition: transform 0.5s ease-out;
      ${buttonAnimation};
      &.animate {
        transform: translate3d(0, 0, 0);
      }
    }
    > button:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
