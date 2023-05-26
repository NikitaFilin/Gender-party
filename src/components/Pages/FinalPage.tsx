import React from "react";
import { Subtitle, Title } from "./styled";

export const FinalPage = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px",
        marginTop: "32px",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          fontFamily: "'Marck Script', cursive",
          color: "#2a3e1d",
        }}
      >
        Ваши
      </div>
      <div
        style={{
          fontSize: "48px",
          fontFamily: "'Marck Script', cursive",
          color: "#2a3e1d",
        }}
      >
        Даша и Женя
      </div>
    </div>
  );
};
