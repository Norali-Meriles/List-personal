import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Item from "../item/item";

const List = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  //   useEffect(() => {
  //     setList(JSON.parse(localStorage.getItem("list")) || []);
  //   }, []);

  return (
    <>
      <p>Lista de tareas</p>
      <ListGroup>
        {list.map((item, index) => (
          <Item data={item} index={index} />
        ))}
      </ListGroup>
    </>
  );
};

export default List;
