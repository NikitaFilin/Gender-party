import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px">
          Вечеринка пройдет
        </Text>
        <Text fontSize="32px" paddingBottom="18px">
          6 августа 2022 года
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -16:00-
        </Text>
        <Text fontSize="18px" paddingTop="32px">
          Узнайте это первыми!
        </Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
