import React from "react";

import { GoogleMap } from "./GoogleMap";

import { PageContainer } from "../styled";
import { Wrapper } from "./styled";

export const MapPage: React.FC = () => {
  return (
    <PageContainer>
      <Wrapper>
        <GoogleMap />
        <div>
          <a href="https://yandex.ru/maps/-/CDwuNNYE">Открыть в Я.Картах</a>
        </div>
      </Wrapper>
    </PageContainer>
  );
};
