import React from "react";
import { increasingArrayWithLength } from "../../utils/increasingArrayWithLength";
import { GridContainer, GridItem } from "./styled";

const guestsAtTable = [
  { name: "Никита" },
  { name: "Алина" },
  { name: "Катя" },
  { name: "Костя" },
  { name: "Маша" },
  { name: "Павел" },
  { name: "Кира" },
  { name: "Денис" },
];

export const TablesPage = () => {
  return (
    <GridContainer>
      {increasingArrayWithLength(8).map((_, i) => (
        <GridItem>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "8px",
              margin: "12px 8px",
            }}
          >
            <span style={{ fontSize: "20px" }}>Стол # {i + 1}</span>
            {guestsAtTable.map((el, i) => (
              <div
                style={{ fontSize: "20px", fontWeight: 500, color: "black" }}
              >
                {el.name}
              </div>
            ))}
          </div>
        </GridItem>
      ))}
    </GridContainer>
  );
};
