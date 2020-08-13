import React from "react";
import Box from "@material-ui/core/Box";

export default function LeftPanel(props) {
  return (
    <Box alignSelf="center">
      <h4>{props.title}</h4>
    </Box>
  );
}
