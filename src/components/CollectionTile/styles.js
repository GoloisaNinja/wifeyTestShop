import styled from "styled-components";

export const CollectionTileWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  > div {
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
  background: rgba(0, 0, 0, 0.5);
`;
export const Title = styled.h2`
  text-transform: uppercase;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 2.5em;
  text-shadow: 2px 2px 2px #030303;
  text-align: center;
  @media (min-width: 500px) {
    font-size: 3.2em;
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
