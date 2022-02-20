import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import List from "../list/list";

const Add = () => {
  const [formValues, setFormValues] = useState({
    id: 0,
    name: "",
    completed: false,
    createdAt: "",
    updateAt: null,
  });
  const [date, setDate] = useState(false);

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("list")) || [];

    //logica para obtener el id
    let id = list.length;
    //console.log(id)
    console.log(list.length);
    if (list.length === 0) {
      console.log("hola");
      setFormValues((formValues) => ({
        ...formValues,
        id: 1,
        createdAt: new Date().getTime(),
      }));
    } else {
      setFormValues((formValues) => ({
        ...formValues,
        id: id + 1,
        createdAt: new Date().getTime(),
      }));
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.name === "") {
      alert("Ingrese datos");
      return;
    }
    let list = JSON.parse(localStorage.getItem("list")) || [];

    //agregar tarea a la lista
    list.push(formValues);
    localStorage.setItem("list", JSON.stringify(list));
    console.log(formValues);

    setDate(new Date().getTime());
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>Nueva Tarea</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre de la tarea"
                name="name"
                required
                pattern="[A-Za-z1-9.,]{0,128}"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                Solo puede ingresar 128 caracteres
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <List />
    </>
  );
};

export default Add;
