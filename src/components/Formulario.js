import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import Comprador from "./Comprador";
import Tarjeta from "./Tarjeta";

const Formulario = () => {
  return (
    <Form>
      <Comprador></Comprador>

      <Tarjeta></Tarjeta>

      <Button variant="primary" type="submit">
        Pagar
      </Button>
    </Form>
  );
};

export default Formulario;
