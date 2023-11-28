import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ff00dd;
  color: #fff;
  //margin-bottom: 15px;
`;
export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.$overlaycolor};
  //background: rgba(189, 0, 164, 0.5);
  > div {
    padding: 20px;
  }
`;
export const HeroTitleText = styled.h1`
  font-family: "Abril Fatface", cursive;
  font-weight: bold;
  font-size: 3em;
  text-shadow: 2px 2px 2px #030303;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 2.5em;
  }
  @media (min-width: 500px) {
    font-size: 3.5em;
  }
  @media (min-width: 600px) {
    font-size: 4em;
  }
`;
export const HeroSubText = styled.h4`
  //font-family: "Abril Fatface", cursive;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 2px #030303;
  @media (max-width: 400px) {
    font-size: 0.85em;
  }
  @media (min-width: 500px) {
    font-size: 1.5em;
  }
  @media (min-width: 600px) {
    font-size: 1.75em;
  }
`;
