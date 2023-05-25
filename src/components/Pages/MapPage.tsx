import React from "react";
import { GoogleMap } from "./GoogleMap";

import { Page3Wrapper, Page2Container } from "./styled";

export const MapPage: React.FC = () => {
  return (
    <Page3Wrapper>
      <Page2Container>
        <GoogleMap />
        <div style={{ marginTop: "8px" }}>
          <a href="https://yandex.ru/maps/-/CCUsiSvicA">Открыть в Я.Картах</a>
        </div>
      </Page2Container>
    </Page3Wrapper>
  );
};
