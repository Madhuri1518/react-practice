import React from 'react';
import Card from '.';
import { withKnobs, select, number } from "@storybook/addon-knobs";


export default {
  title: 'Card',
  decorators: [withKnobs],
};

export const menuCard = () => {
  const menuList = {
      "French Fries":"French Fries",
      "Crusty Garlic with Melted Cheese":"Crusty Garlic with Melted Cheese"
  }
  const cost = number('Item Cost', 70, { range: true, min: 0, max: 5000, step: 10 });
  const menuItem = select("Menu Items", menuList, 'French Fries');
  return <Card title={menuItem} content={cost}/>
};

export const tableCard = () => {
    const menuList = {
        "Table-1":"Table-1",
        "Table-2":"Table-2",
        "Table-3":"Table-3",
    }
    const totalItems = number('Total Items', 7, { min: 0, max: 100, step: 1 });
    const totalCost = number('Total Cost', 70, { range: true, min: 0, max: 5000, step: 10 });
    const content = `Rs. ${totalCost} | Total items: ${totalItems}`
    const menuItem = select("Menu Items", menuList, 'Table-1');
    return <Card title={menuItem} content={content}/>
  };