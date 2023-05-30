import { useState } from "react";
import {
  ActionsWrapper,
  ButtonStyled,
  Description,
  PageContainer,
  Subtitle,
  Title,
} from "./styled";

export const InfoPage = () => {
  const [isShowAdditionalInfo, setIsShowAdditionalInfo] = useState(false);

  const handleClick = () => {
    setIsShowAdditionalInfo(!isShowAdditionalInfo);
  };

  return (
    <PageContainer style={{ position: "relative" }}>
      <div>
        <Title style={{ marginTop: "32px" }}>8 июля 2023 в 15:00</Title>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "32px 0px 16px 0px",
          }}
        >
          <Description>Место проведения -</Description>
          <Subtitle>Дачный клуб "Fun forest"</Subtitle>
        </div>

        <Description>MO, Солнечногорский райнон, д. Веревское.</Description>
      </div>

      <ActionsWrapper>
        {isShowAdditionalInfo ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "32px",
            }}
          >
            <Subtitle>Загс</Subtitle>
            <Description>
              11: 30, г. Долгопрудный, ул. Циолковского, д. 32/12
            </Description>
          </div>
        ) : (
          <ButtonStyled onClick={handleClick}>ХОЧУ ПОЕХАТЬ В ЗАГС</ButtonStyled>
        )}
      </ActionsWrapper>
    </PageContainer>
  );
};
