import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 2px 0px 2px;
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
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px 20px 8px;
`;
