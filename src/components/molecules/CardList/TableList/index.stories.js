import React from "react";
import TableCardList from ".";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Molecules/CardList/TableCardList",
  decorators: [withKnobs],
};

export const tableCardList = () => {
  const tableData = [
    { name: "Table1", cost: 123, items: 2 },
    { name: "Table2", cost: 123, items: 2 },
    { name: "Table3", cost: 123, items: 2 },
  ];
  const concatenateContent = (items) => {
    if (items)
      return items.map((item) => {
        return {
          name: item.name,
          content: `Rs. ${item.cost} | TotalItems: ${item.items}`,
        };
      });
    return null;
  };
  return <TableCardList list={concatenateContent(tableData)} />;
};
