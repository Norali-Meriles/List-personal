import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import formatDate from "../../utils/date";

const Item = (prop) => {
  return (
    <div>
      <ListGroup.Item>
        <Row>
          <Col md={8}>
            {prop.data.name} - {formatDate(prop.data.createdAt)}
          </Col>
          <Col md={4} className=" d-flex justify-content-md-end">
            <Button variant="outline-primary">✍</Button>{" "}
            <Button variant="outline-secondary">🗑</Button>{" "}
          </Col>
        </Row>
      </ListGroup.Item>
    </div>
  );
};

export default Item;
