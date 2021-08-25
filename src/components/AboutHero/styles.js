import styled from "styled-components";

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
    > button:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
