import React, { useState } from "react";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import { StartPage, MapPage, InfoPage, TablesPage } from "./components/Pages";

import StartPageImage from "./images/3.jpg";
import MapPageImage from "./images/3.jpg";
import InfoPageImage from "./images/3.jpg";

const pages = [
  { img: StartPageImage, content: <StartPage /> },
  { img: InfoPageImage, content: <InfoPage /> },
  { img: "", content: <TablesPage /> },
  { img: MapPageImage, content: <MapPage /> },
];

export const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AppStyled>
      {loading && <LoadPage />}
      {pages.map((page, index) => (
        <Page setLoading={setLoading} key={index} index={index} page={page} />
      ))}
    </AppStyled>
  );
};
