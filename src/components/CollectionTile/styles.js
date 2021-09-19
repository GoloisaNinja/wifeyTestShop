import styled from "styled-components";

export const CollectionTileWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 5px;
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  box-shadow: 10px 7px rgba(247, 0, 255, 0.5);
  > div:first-child {
    > img {
      border-radius: 5px;
      /* border-top-left-radius: 5px;
      border-top-right-radius: 5px; */
    }
  }
  > div {
    border-radius: 5px;
    /* border-top-left-radius: 5px;
    border-top-right-radius: 5px; */
    flex-grow: 1;
  }
`;
export const CollectionTileContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  > div {
    width: 80%;
    margin: 0 auto;
    @media (min-width: 500px) {
      width: 50%;
    }
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  padding: 10px;
  font-weight: bold;
  font-family: "Abril Fatface", cursive;
  color: #ff94fb;
  font-size: 1.75em;
  text-shadow: 2px 2px 2px #590056;
  text-align: center;
  @media (min-width: 500px) {
    font-size: 2em;
  }
`;
export const Description = styled.h4`
  text-transform: uppercase;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 0.9em;
  text-shadow: 2px 2px 2px #030303;
  text-align: center;
  margin-top: 0;
  @media (min-width: 500px) {
    font-size: 1.25em;
  }
`;
