import React from "react";
import Box from "@material-ui/core/Box";
import Card from "../../RCards";

export default function MenuList(props) {
  function dragStart(ev) {
    ev.dataTransfer.setData("dragItemId", ev.target.id);
}
  return (
    <Box display="flex" flexDirection="column" width="100%" height="500px" overflow="auto">
      {props.menu.map((menuItem, index) => {
        return (
          <Box mt={1} draggable="true" onDragStartCapture={event=>dragStart(event)} id={index}>
            <Card title={menuItem.name} content={menuItem.content} />
          </Box>
        );
      })}
    </Box>
  );
}
