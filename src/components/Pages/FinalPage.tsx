import { Title } from "./styled";

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
      <Title>Ваши</Title>
      <Title style={{ fontSize: "48px" }}>Даша и Женя</Title>
    </div>
  );
};
