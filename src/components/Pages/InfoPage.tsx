import React from "react";
import { Text } from "../Text";
import { StartPageContainer } from "./styled";

export const InfoPage = () => {
  return (
    <StartPageContainer>
      <Text>08 июля 2023 в 15:00</Text>

      <Text fontSize="18px" paddingTop="16px" paddingBottom="18px">
        Место проведения - Дачный клуб "Fun forest".
      </Text>
      <Text fontSize="16px" paddingBottom="18px">
        MO, Солнечногорский райнон, д. Веревское.
      </Text>
    </StartPageContainer>
  );
};
