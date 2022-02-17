import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Item from "../item/item";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("list")) || []);
  }, []);

  return (
    <>
      <p>Lista de tareas</p>
      <ListGroup>
        {list.map((item) => (
          <item data={item} />
        ))}
      </ListGroup>
    </>
  );
};

export default List;
