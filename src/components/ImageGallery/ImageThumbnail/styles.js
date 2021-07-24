import styled from "styled-components";

export const ImageThumbnailWrapper = styled.div`
  max-width: 300px;
  cursor: pointer;
  border: 4px solid ${props => (props.isActive ? `#ff00f7` : `#fba6ff`)};
`;
