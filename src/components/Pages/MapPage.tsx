import React from "react";
import { GoogleMap } from "./GoogleMap";
import { PageContainer } from "./styled";

export const MapPage: React.FC = () => {
  return (
    <PageContainer style={{ margin: "8px" }}>
      <div
        style={{
          background: "#ffffffa8",
          padding: "8px",
        }}
      >
        <GoogleMap />
        <div style={{ marginTop: "8px" }}>
          <a href="https://yandex.ru/maps/-/CCUsiSvicA">Открыть в Я.Картах</a>
        </div>
      </div>
    </PageContainer>
  );
};
