import { PageContainer, Subtitle, Title } from "./styled";

export const StartPage = () => {
  return (
    <PageContainer>
      <Title style={{ marginBottom: "32px" }}>Дорогие друзья!</Title>

      <Subtitle>
        Мы с огромным удовольствием приглашаем вас на торжество, посвященное
        нашей свадьбе!
      </Subtitle>
    </PageContainer>
  );
};
