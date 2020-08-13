import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

import MuiTableCell from "@material-ui/core/TableCell";
const useStyles = makeStyles({
  table: {
      // minWidth: 650,
  },
});
const TableCell = withStyles({
  root: {
    borderBottom: "none",
  }
})(MuiTableCell);
export default function RTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  className={{root: {border: "none"}}}align="center">
              SNO
            </TableCell>
            <TableCell align="center">Items</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Number of servings</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.itemsInfo.map((itemInfo, index) => (
            <TableRow key={index}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{itemInfo.name}</TableCell>
              <TableCell align="center">{itemInfo.cost}</TableCell>
              <TableCell align="center">
                <input type="number" min="1" value={itemInfo.quantity} />
              </TableCell>
              <TableCell align="center">
                <DeleteIcon color="action"/>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">1234</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
