import { PageContainer, Subtitle, Title } from "../styled";
import { Wrapper } from "./styled";

export const StartPage = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Title>Дорогие друзья!</Title>
        <Subtitle>
          Я с огромным удовольствием приглашаю вас на праздник в честь
        </Subtitle>
        <Subtitle>
          моего <span style={{ fontSize: "40px", color: "#e7af3e" }}>45</span>
          -летия
        </Subtitle>
      </Wrapper>
    </PageContainer>
  );
};
