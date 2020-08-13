import React,{ useState } from 'react';
import Box from '@material-ui/core/Box';
import TableList from "../../molecules/CardList/TableList";
import SearchBox from '../../molecules/SearchBox';
import Header from '../../atoms/Header';


export default function LeftPanel(props) {
    const tableInfo = [
        { name: "Table1", cost: 123, quantity: 2},
        { name: "Table2", cost: 123, quantity: 2 },
        { name: "Table3", cost: 123, quantity: 2 },
        { name: "Table1", cost: 123, quantity: 2 },
        { name: "Table2", cost: 123, quantity: 2 },
        { name: "Table3", cost: 123, quantity: 2 },
      ];
    const [tables, setTables] = useState(tableInfo)
    const concatenateContent = (itemsInfo)=>{
        if(itemsInfo)
            return itemsInfo.map(item=>{
                return {name: item.name, content: `Rs. ${item.cost} | TotalItems: ${item.quantity}`}
            })
        return null;
    }
    // const changeTableData = (data) =>{

    // }
    return (
        <Box
      display="flex"
      flexDirection="column"
      p={1}
    >
      <Header title="Table"/>
      <SearchBox label="search by table" size="sm"/>
      <TableList list={concatenateContent(tables)} changeTableData={(tableInfo)=>setTables(tableInfo)}/>
    </Box>
    )
}
