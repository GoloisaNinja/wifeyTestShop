import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  width: 100%;
  padding: 10px;
  overflow: hidden;
  > div:first-child {
    text-align: center;
  }
  > div:nth-child(2) {
    width: 100%;
    float: right;
    margin: 10px;
    @media (min-width: 500px) {
      width: 70%;
    }
  }
`;

export const AboutUsText = styled.div`
  text-align: justify;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: #780096;
  > p {
    margin-top: 50px;
  }
`;
