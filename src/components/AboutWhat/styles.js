import styled from "styled-components";

export const AboutWhatWrapper = styled.div`
  width: 100%;
  padding: 10px;
  overflow: hidden;
  > div:first-child {
    text-align: center;
    > h2 {
      > svg {
        color: #ff00f7;
      }
      > span {
        font-family: "Lato", sans-serif;
        font-style: italic;
        font-size: 16px;
      }
    }
  }
  > div:nth-child(2) {
    width: 100%;
    float: left;
    margin-bottom: 25px;
    @media (min-width: 600px) {
      width: 70%;
      margin: 5px;
    }
  }
`;

export const AboutWhatText = styled.div`
  text-align: justify;
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #780096;
  > p {
    //margin-top: 50px;
  }
`;
