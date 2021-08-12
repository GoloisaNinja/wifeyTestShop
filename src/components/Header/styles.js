import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2px;
  width: 100%;
  > a {
    > div {
      width: 200px;
      @media (min-width: 374px) {
        width: 250px;
      }
      @media (min-width: 700px) {
        width: 300px;
      }
    }
  }
  > a:last-child {
    > svg {
      font-size: 35px;
      color: #ff00f7;
      margin-right: 10px;
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
`;
