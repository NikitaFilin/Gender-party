import React from "react";
import { MapStyled } from "./styled";

export const GoogleMap = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <MapStyled
        title="maps"
        src="https://yandex.ru/map-widget/v1/-/CCUReFTOsD"
      ></MapStyled>
    </div>
  );
};
