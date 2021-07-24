import styled from "styled-components";

export const ImageGalleryWrapper = styled.section`
  > div:first-child {
    max-width: 600px;
    border: 5px solid #fba6ff;
  }
  > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    margin-top: 10px;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
