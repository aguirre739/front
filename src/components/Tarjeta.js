import React from 'react';
import Form from "react-bootstrap/Form";

const Tarjeta = () => {
    return (
        <div>
            <h3>Detalles de la tarjeta</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Fecha de Vencimiento</Form.Label>
        <Form.Row>
          <Form.Control type="email" placeholder="Enter email" />
          <span class="date-separator">/</span>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Row>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Numero de la tarjeta</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Codigo de seguridad</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Banco Emisor</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Cuotas</Form.Label>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form.Group>
      </Form.Group>
        </div>
    );
};

export default Tarjeta;