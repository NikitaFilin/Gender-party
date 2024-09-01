import React from "react";
import { WrapperPage } from "./styled";
import { Parallax } from "react-parallax";
import { parseImgPath } from "./utils";

import "./index.css";

const IMAGE_LAST_NAME = "photo";

export const Page: React.FC<{
  page: { img?: string; content: JSX.Element };
  index: number;
  setLoading: Function;
}> = ({ page, index, setLoading }) => {
  return (
    <Parallax
      strength={200}
      bgImage={page.img}
      onLoad={(e: Event) => {
        const img = e.target as HTMLImageElement;
        console.log("s", parseImgPath(img));
        if (parseImgPath(img) === IMAGE_LAST_NAME) {
          setLoading(false);
        }
      }}
      bgClassName={index !== 3 ? "image" : undefined}
    >
      <WrapperPage>{page.content}</WrapperPage>
    </Parallax>
  );
};
