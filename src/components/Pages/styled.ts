import styled from "styled-components";
import { TextStyled } from "../Text/styled";
import { device } from "../../utils";

// #2a3e1d
// #b7cfb5
// #d9e4d2

export const StartPageContainer = styled.div({
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
  color: "#2a3e1d",
});

export const Subtitle = styled.div({
  fontSize: "24px",
  color: "#b7cfb5",
  lineHeight: "24px",
});

export const GridContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  padding: "16px",
  background: "lightblue",
});

export const GridItem = styled.div({});

export const Title1 = styled(TextStyled)`
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  z-index: 1;

  color: orange;
  background-clip: text;
  -webkit-background-clip: text;

  padding-top: 24px;

  @media ${device.mobileS} {
    font-size: 55px;
  }

  @media ${device.tablet} {
    font-size: 150px;
  }

  @media ${device.laptop} {
    font-size: 200px;
  }

  @media ${device.laptopL} {
    font-size: 200px;
  }
`;

// export const

export const Page1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Page2Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;

  @media ${device.mobileS} {
    justify-content: end;
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const Page3Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin: 40px;
  }
`;

export const Page2Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #ffffffa8;

  ${TextStyled} {
    font-family: "Podkova", sans-serif;
  }

  @media ${device.mobileS} {
    margin: auto;
    padding: 30px;
  }

  @media ${device.tablet} {
    margin: 100px;
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 100px;
  }

  /* opacity: 0.5; */
`;

export const MapStyled = styled.iframe`
  width: calc(100% - 8px);
  height: 600px;
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`;
