import styled from "styled-components";
import { device } from "../../utils";

const fonts = {
  primary: "'Caveat', cursive",
  secondary: "'Marck Script', cursive",
};

const colors = {
  primary: "#e7af3e",
  secondary: "#42100d",
  tertiary: "#f3dcb3",
};

export const PageContainer = styled.div({
  fontFamily: '"Rubik", sans-serif',
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "16px",
  textAlign: "center",
});

export const Title = styled.div({
  fontSize: "40px",
  fontWeight: 800,
  color: colors.primary,
  fontFamily: fonts.secondary,
});

export const Subtitle = styled.div({
  fontSize: "32px",
  lineHeight: "40px",
  color: colors.secondary,
  fontFamily: fonts.secondary,
});

export const Description = styled.div({
  fontSize: "32px",
  color: colors.primary,
  fontFamily: fonts.primary,
});

export const MapStyled = styled.iframe`
  width: calc(100% - 8px);
  height: 600px;
`;

export const ActionsWrapper = styled.div({
  position: "absolute",
  bottom: "32px",
  right: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "16px 32px 0px 32px",
});

export const ButtonStyled = styled.div({
  width: "100%",
  padding: "16px",
  border: `1px solid ${colors.primary}`,
  borderRadius: "16px",
  color: colors.primary,

  "&:hover": {
    color: "white",
    background: colors.secondary,
  },
});

// @media ${device.mobileS} {
//   font-size: 55px;
// }

// @media ${device.tablet} {
//   font-size: 150px;
// }

// @media ${device.laptop} {
//   font-size: 200px;
// }

// @media ${device.laptopL} {
//   font-size: 200px;
// }
