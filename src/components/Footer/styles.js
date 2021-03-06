import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  padding: 20px;
  min-height: 180px;
  background-color: #eee;
  > div:last-child {
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 10px;
    > p {
      font-family: "Lato", sans-serif;
      font-size: 12px;
      font-weight: 900;
      color: #ff00f7;
      margin-top: 18px;
    }
    > svg {
      color: #ff66c4;
      margin-top: 16px;
      margin-left: 3px;
      margin-right: 3px;
      font-size: 12px;
    }
  }
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 10px;
  > div {
    margin-left: 2rem;
    margin-right: 2rem;
    filter: drop-shadow(3px 5px 8px #ff00f7);
    @media (min-width: 500px) {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
`;

export const FooterInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #671d80;

  > div {
    > ul {
      > li {
        > a {
          text-decoration: none;
        }
      }
      > li:not(:last-child) {
        padding-bottom: 12px;
      }
    }
  }
`;
export const FooterSocialWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #671d80;
  text-transform: uppercase;
  > div:first-child {
    > p {
      margin-bottom: 8px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      > svg {
        font-size: 30px;
        color: #ff66c4;
        filter: drop-shadow(1px 1px 0.8px #671d80);
      }
      > svg:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
`;
