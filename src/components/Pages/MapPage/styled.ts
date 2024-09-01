import styled from "styled-components";

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "12px 8px 16px 8px",
  borderRadius: "8px",
  background: "#ffffffa8",
});

export const MapWrapper = styled.div({
  position: "relative",
  overflow: "hidden",
});

export const MapStyled = styled.iframe`
  width: calc(100% - 8px);
  height: 600px;
`;
