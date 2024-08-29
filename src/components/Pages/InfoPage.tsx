import { useState } from "react";
import {
  ActionsWrapper,
  ButtonStyled,
  Description,
  PageContainer,
  Subtitle,
  Title,
} from "./styled";

export const InfoPage = () => (
  <PageContainer style={{ position: "relative" }}>
    <div>
      <Title style={{ marginTop: "32px" }}>21 сентября 2024 в 16:00</Title>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "32px 0px 16px 0px",
        }}
      >
        <Subtitle>Место проведения - кафе «TAUS» пос. Редкино</Subtitle>
      </div>
    </div>
  </PageContainer>
);
