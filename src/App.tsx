import { useState } from "react";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import { StartPage, MapPage, InfoPage, FinalPage } from "./components/Pages";

import CakeImage from "./images/cake.jpg";
import FinalImage from "./images/images3.jpg";
import Birthday from "./images/1.jpeg";
import Ballon from "./images/2.jpeg";
import Ballon3 from "./images/photo2.jpg";

const pages = [
  { img: Ballon, imgName: "1", content: <StartPage /> },
  { img: Ballon, imgName: "2", content: <InfoPage /> },
  { img: Ballon, imgName: "3", content: <MapPage /> },
  { img: Ballon3, imgName: "4", content: <FinalPage /> },
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
