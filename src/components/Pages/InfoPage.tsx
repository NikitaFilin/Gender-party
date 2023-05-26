import React from "react";
import { Text } from "../Text";
import { StartPageContainer, Subtitle, Title } from "./styled";

export const InfoPage = () => {
  return (
    <StartPageContainer>
      <Title>08 июля 2023 в 15:00</Title>

      <Subtitle style={{ margin: "16px 0px" }}>
        Место проведения -
        <span style={{ fontSize: "28px" }}>Дачный клуб "Fun forest"</span>.
      </Subtitle>
      <Subtitle style={{ paddingTop: "16px" }}>
        MO, Солнечногорский райнон, д. Веревское.
      </Subtitle>
    </StartPageContainer>
  );
};
