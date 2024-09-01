import { useState } from "react";

import { PageContainer, Subtitle, Title } from "../styled";

export const AdditionalPage = () => (
  <PageContainer>
    <Title>Прошу подтвердить свое присутствие</Title>
    <Subtitle style={{ marginTop: "32px" }}>
      Написав в WhatsApp - <a href="https://wa.me/79065548374">ссылка</a>
    </Subtitle>
    <Subtitle style={{ marginTop: "32px" }}>
      Или любым другим удобным для вас способом
    </Subtitle>
  </PageContainer>
);
