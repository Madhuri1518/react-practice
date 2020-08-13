import React from "react";
import Box from "@material-ui/core/Box";
import Card from "../../RCards";
import CustomizedDialogs from "../../../organisms/DialogBox"

function allowDrop(event) {
  event.preventDefault();
}

export default function TableList(props) {
  function dropIt(event, targetId) {
    event.preventDefault();
    const menuItems = [
      { name: "French Fries", cost: 123 },
      { name: "Crusty Melted Cheese", cost: 435 },
      { name: "French Fries", cost: 123 },
      { name: "Crusty Melted Cheese", cost: 435 },
      { name: "French Fries", cost: 123 },
      { name: "Crusty Melted Cheese", cost: 435 },
    ];
    let sourceId = event.dataTransfer.getData("dragItemId");
    // let targetElementId = event.target.id;
    console.log(
      " dragged item " +
        sourceId +
        "item =>" +
        menuItems[sourceId].name +
        "\n dropped on table  id " +
        targetId
    );
    updateTableInfo(targetId, sourceId, menuItems[sourceId]);
    // let dragItemInfo = getItemById(sourceId);
    // console.log("item--" + dragItemInfo);
    // let targetElement = document.getElementById(targetElementId);
    // let updatedTableInfo = updateAndGetTableById(targetElementId, dragItemInfo);
    // console.log("updating");
    // targetElement.innerHTML = targetElementId + "<br />Rs. " + updatedTableInfo.bill + " | Total Items " + updatedTableInfo.totalItems;
  }
  function updateTableInfo(id, itemId, updateItemInfo) {
    if (isNaN(props.list[id].tableItems[itemId + ""])) {
      props.list[id].tableItems[id + ""] = 1;
    } else {
      props.list[id].tableItems[id + ""] += 1;
    }

    props.list[id].cost += updateItemInfo.cost;
    props.list[id].items += 1;
    console.log(props.list);
    props.changeTableData(props.list);
  }

  const [dialogOpen, setDialogOpen] = React.useState(true);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="500px"
      overflow="auto"
    >
      {props.list.map((table, index) => {
        return (
          <Box mt={1} id={index}
          onDropCapture={(event) => dropIt(event, index)}
          onDragOverCapture={(event) => allowDrop(event)}
          onClick={()=>handleClickOpen()}>
              <Card title={table.name} content={table.content} />
          </Box>
        );
      })}
    </Box>
      <CustomizedDialogs open={dialogOpen} handleClose={handleClose}/>
    </>
  );
}
