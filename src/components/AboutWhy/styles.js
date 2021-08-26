import styled from "styled-components";

export const AboutWhyWrapper = styled.div`
  width: 100%;
  padding: 10px;
  overflow: hidden;
  > div:first-child {
    text-align: center;
  }
  > div:nth-child(2) {
    width: 100%;
    float: left;
    @media (min-width: 600px) {
      width: 70%;
    }
  }
`;

export const AboutWhyText = styled.div`
  text-align: justify;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #780096;
  > p {
    //margin-top: 50px;
  }
`;
