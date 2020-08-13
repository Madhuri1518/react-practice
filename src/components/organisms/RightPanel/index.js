import React,{ useState } from "react";
import Box from "@material-ui/core/Box";
import CardList from "../../molecules/CardList/MenuList";
import SearchBox from '../../molecules/SearchBox';
import Header from '../../atoms/Header'

export default function LeftPanel(props) {
  const menuItems = [
    { name: "French Fries", content: 123 },
    { name: "Crusty Melted Cheese", content: 435 },
    { name: "French Fries", content: 123 },
    { name: "Crusty Melted Cheese", content: 435 },
    { name: "French Fries", content: 123 },
    { name: "Crusty Melted Cheese", content: 435 },
  ];
  const [items, setItems] = useState(menuItems)
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={1}
    >
      <Header title="Menu"/>
      <SearchBox label="search by item" size="lg"/>
      <CardList menu={items}/>
    </Box>
  );
}
