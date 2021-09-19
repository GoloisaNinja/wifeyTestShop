import styled from "styled-components";

export const CollectionGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-bottom: 25px;
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;
