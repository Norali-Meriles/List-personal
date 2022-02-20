import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import formatDate from "../../utils/date";
import List from "../list/list";

const Item = ({ data, index }) => {
  //Eliminar una tarea
  let list = JSON.parse(localStorage.getItem("list")) || [];
  const eliminarTarea = (index) => {
    let validar = window.confirm("Esta seguro que quiere eliminar esta tarea");
    if (validar) {
      console.log(index);
      console.log(list);
      list.splice(index, 1);

      localStorage.setItem("list", JSON.stringify(list));
      return list;
    }
  };

  return (
    <div>
      <ListGroup.Item>
        <Row key={index}>
          <Col md={8}>
            {data.name} - {formatDate(data.createdAt)}
          </Col>
          <Col md={4} className=" d-flex justify-content-md-end">
            <Button variant="outline-primary">✍</Button>
            <Button
              variant="outline-secondary"
              onClick={() => eliminarTarea(index)}
            >
              🗑
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </div>
  );
};

export default Item;
