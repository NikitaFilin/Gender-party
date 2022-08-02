import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page4: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px">
          Дресс-код тематический.
        </Text>
        <Text fontSize="24px" fontWeight="bold" paddingBottom="18px">
          Проверим вашу интуицию 😊
        </Text>
        <Text fontSize="24px" paddingBottom="18px">
          Если вы думаете, что у нас будет мальчик, ждём вас в голубом или
          синем. А если девочка - в красном или розовом
        </Text>
        <Text fontSize="18px" paddingTop="32px">
          P.S. Не обязательно собирать весь наряд в цвет, можно обойтись
          аксессуаром
        </Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
