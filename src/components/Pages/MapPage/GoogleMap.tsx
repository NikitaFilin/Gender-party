import React from "react";

import { MapStyled, MapWrapper } from "./styled";

export const GoogleMap = () => {
  return (
    <MapWrapper>
      <MapStyled
        title="maps"
        src="https://yandex.ru/map-widget/v1/?ll=36.291026%2C56.668551&mode=whatshere&whatshere%5Bpoint%5D=36.289817%2C56.668693&whatshere%5Bzoom%5D=17&z=17.27"
      />
    </MapWrapper>
  );
};
