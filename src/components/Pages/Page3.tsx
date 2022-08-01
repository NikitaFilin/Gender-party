import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { GoogleMap } from "./GoogleMap";

export const Page3: React.FC = () => {
  return (
    <Page3Wrapper>
      <Page2Container>
        <GoogleMap />

        <Text fontSize="18px" paddingTop="16px" paddingBottom="18px">
          Место проведения - особняк семьи Саржиных.
        </Text>
        <Text fontSize="16px" paddingBottom="18px">
          Адрес: Тверская область, посёлок Озерки, Первомайская улица, 6.
        </Text>
        <a href="https://yandex.ru/maps/-/CCUReFTOsD">Открыть в Я.Картах</a>
      </Page2Container>
    </Page3Wrapper>
  );
};
