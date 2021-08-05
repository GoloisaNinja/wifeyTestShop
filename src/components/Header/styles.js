import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2px;
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
  > svg {
    font-size: 30px;
    color: #ff00f7;
    margin-right: 10px;
    cursor: pointer;
    margin-bottom: 5px;
  }
`;
