import styled from "styled-components";

export const AboutSocialWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 25px;
`;
export const AboutSocialBanner = styled.header`
  background: #ff00f7;
  text-align: center;
  padding: 30px;
  margin-bottom: 25px;
  > p {
    font-weight: bold;
  }
`;
export const SocialContent = styled.div`
  display: flex;
`;
export const BlogWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const BlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
`;
export const BlogContent = styled.h3`
  font-family: "Abril Fatface", cursive;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;
export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00eeff;
  flex-grow: 1;
  min-width: 25%;
  > svg {
    font-size: 35px;
    color: #ff00f7;
    @media (min-width: 400px) {
      font-size: 50px;
    }
    @media (min-width: 600px) {
      font-size: 75px;
    }
  }
  > svg:not(:last-child) {
    margin-bottom: 35px;
  }
`;
