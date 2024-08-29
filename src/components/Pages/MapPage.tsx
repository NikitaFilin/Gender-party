import React from "react";
import { GoogleMap } from "./GoogleMap";
import { PageContainer } from "./styled";

export const MapPage: React.FC = () => {
  return (
    <PageContainer style={{ margin: "8px" }}>
      <div
        style={{
          padding: "8px",
          borderRadius: "8px",
          background: "#ffffffa8",
        }}
      >
        <GoogleMap />
        <div style={{ marginTop: "8px" }}>
          <a href="https://yandex.ru/maps/-/CDs4i8JN">Открыть в Я.Картах</a>
        </div>
      </div>
    </PageContainer>
  );
};
