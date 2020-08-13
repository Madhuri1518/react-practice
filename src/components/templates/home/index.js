import React from "react";
import Box from "@material-ui/core/Box";

export default function HomeTemplate(props) {
  return (
    <Box display="flex" height="600px" width="100%" flexDirection="row" bgcolor="#9e9e9e17">
      <Box width={1 / 4} height={1}>
        {props.leftMenu}
      </Box>
      {props.divider}
      <Box width={3 / 4} height={1}>
        {props.rightMenu}
      </Box>
    </Box>
  );
}
