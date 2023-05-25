import React from "react";
import { Page1Wrapper, StartPageContainer, Subtitle, Title } from "./styled";

export const StartPage = () => {
  return (
    <StartPageContainer>
      <Title style={{ marginBottom: "32px" }}>Дорогие друзья!</Title>

      <Subtitle>
        Мы с огромным удовольствием приглашаем вас на торжество, посвященное
        нашей свадьбе!
      </Subtitle>

      {/* <div>Мы будем рады видеть вас!</div>

      <div>Дарья и Евгений</div>  */}
    </StartPageContainer>
  );
};
