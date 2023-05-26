import styled from "styled-components";
import { TextStyled } from "../Text/styled";
import { device } from "../../utils";

const fonts = {
  primary: "'Original Surfer', cursive",
  secondary: "'Kaushan Script', cursive",
  tertiary: "'Dancing Script', cursive",
  // caligraph: "#88C75D",
};

const colors = {
  primary: "#2a3e1d",
  secondary: "#42612E",
  tertiary: "#88C75D",
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
  fontSize: "32px",
  color: colors.primary,
  fontFamily: fonts.primary,
});

export const Subtitle = styled.div({
  fontSize: "24px",
  color: colors.secondary,
  lineHeight: "40px",
  fontFamily: fonts.secondary,
});

export const Description = styled.div({
  fontSize: "22px",
  color: colors.tertiary,
  lineHeight: "40px",
  fontFamily: fonts.secondary,
});

export const GridContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  padding: "16px",
  background: "#b7cfb5",
});

export const GridItem = styled.div({
  fontFamily: fonts.tertiary,
  color: colors.primary,
});

export const MapStyled = styled.iframe`
  width: calc(100% - 8px);
  height: 600px;
`;

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
