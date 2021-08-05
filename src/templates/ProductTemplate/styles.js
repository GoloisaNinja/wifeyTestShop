import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  align-items: flex-start;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin-top: 20px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    > div:first-child {
      order: 2;
    }
    > div:last-child {
      order: 1;
    }
  }
`;
export const ProductText = styled.section`
  > p {
    color: #966da8;
    font-size: 1.25rem;
    font-family: "Lato", sans-serif;
  }
  > h2 {
    margin-top: 0;
  }
`;
export const SelectWrapper = styled.div`
  margin-top: 40px;
  > strong {
    display: block;
    margin-bottom: 8px;
    font-family: "Lato", sans-serif;
    color: #c800cf;
  }
  > select {
    font-family: "Lato", sans-serif;
    color: #39009c;
  }
`;
export const Price = styled.div`
  margin-top: 35px;
  font-size: 30px;
  font-family: "Abril Fatface", cursive;
  font-weight: 900;
  color: #96009c;
  letter-spacing: 1.5px;
`;
