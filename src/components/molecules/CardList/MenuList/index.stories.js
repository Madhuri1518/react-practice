import React from "react";
import MenuCardList from ".";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "MenuCardList",
  decorators: [withKnobs],
};

export const menuCardList = () => {
  let menuItems = [
    { name: "French Fries", content: 123 },
    { name: "Crusty Garlic with Melted Cheese", content: 435 },
  ];
  return <MenuCardList menu={menuItems} />;
};
