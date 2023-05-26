import { Description, PageContainer, Subtitle, Title } from "./styled";

export const InfoPage = () => {
  return (
    <PageContainer style={{ position: "relative" }}>
      <div>
        <Title style={{ marginTop: "32px" }}>08 июля 2023 в 15:00</Title>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "32px 0px 16px 0px",
          }}
        >
          <Subtitle>Место проведения -</Subtitle>
          <Description>
            Дачный клуб <span style={{ color: "#88C75D" }}>"Fun forest"</span>
          </Description>
        </div>

        <Subtitle style={{ fontSize: "22px" }}>
          MO, Солнечногорский райнон, д. Веревское.
        </Subtitle>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          margin: "16px 32px 0px 32px",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "16px",
            border: "1px solid #42612E",
            borderRadius: "16px",
            color: "#42612E",
          }}
        >
          ХОЧУ ПОЕХАТЬ В ЗАГС
        </div>
      </div>
    </PageContainer>
  );
};
