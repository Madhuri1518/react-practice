import React from 'react';
import Table from '.';

export default {
  title: 'Table'
   };

export const rightPanel = () => {
  // function createData(name, cost, quantity) {
  //   return { name, cost, quantity };
  // }

  // const itemsInfo = [
  //   createData('Frozen yoghurt', 159, 2),
  //   createData('Ice cream sandwich', 237, 9),
  //   createData('Eclair', 262, 16),
  //   createData('Cupcake', 305, 3),
  //   createData('Gingerbread', 356, 16),
  // ];
  const itemsInfo = [
    { name: "Item1", cost: 123, quantity: 2 },
    { name: "Item2", cost: 123, quantity: 2 },
    { name: "Item3", cost: 123, quantity: 2 },
    { name: "Item4", cost: 123, quantity: 2 },
  ];
  return <Table itemsInfo={itemsInfo}/>
  };