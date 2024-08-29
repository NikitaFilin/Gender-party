import { Title } from "./styled";

export const FinalPage = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "64px",
      }}
    >
      <Title>Ваша</Title>
      <Title style={{ fontSize: "48px" }}>Катерина</Title>
    </div>
  );
};
